'use client'
import React, { useMemo } from 'react'
import useTimeRangeChart from '../shared/useTimeRangeChart'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import useActiveUsers from '@/hooks/dashboard/useActiveUsers'
import Spinner from '../shared/Spinner'
import { CHART_TIME_RANGES } from '@/lib/constants'

const chartConfig = {
    users: {
        label: 'Users',
        color: 'var(--primary)',
    },
} satisfies ChartConfig

const ActiveUsersChart = () => {
    const { timeRange, ChartContainer } = useTimeRangeChart()
    const { data, isLoading } = useActiveUsers({ range: timeRange })
    const chartData = useMemo(() => {
        if (!data?.data?.activeUsers?.length) return []
        return data?.data.activeUsers.map((user) => ({
            date: new Date(user.date).toLocaleDateString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
            }),
            users: user.value,
        }))
    }, [data])

    const interval = useMemo(() => {
        if (timeRange === '90') return 11
        if (timeRange === '30') return 2
        if (timeRange === '7') return undefined
    }, [timeRange])

    return (
        <ChartContainer
            title="Total Active Users"
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
            cardDescription={
                <span className="md:hidden">
                    {
                        CHART_TIME_RANGES.find(
                            (item) => item.value === timeRange
                        )?.label
                    }
                </span>
            }
        >
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <Spinner />
                </div>
            ) : (
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        top: 20,
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        interval={interval}
                        tickFormatter={(value) => value}
                        className="hidden sm:flex"
                    />
                    <YAxis
                        dataKey={'users'}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                        dataKey="users"
                        type="natural"
                        stroke="var(--color-users)"
                        strokeWidth={2}
                        dot={{
                            fill: 'var(--color-users)',
                        }}
                        activeDot={{
                            r: 6,
                        }}
                    />
                </LineChart>
            )}
        </ChartContainer>
    )
}

export default ActiveUsersChart
