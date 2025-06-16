'use client'
import React, { useMemo } from 'react'
import ChartWrapper from '../shared/ChartWrapper'
import {
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '../ui/chart'
import { Pie, PieChart } from 'recharts'
import Spinner from '../shared/Spinner'
import { labelToKey } from '@/lib/utils'
import useWorkforce from '@/hooks/dashboard/useWorkforce'

const WorkforceTotalChart = () => {
    const { data, isLoading } = useWorkforce()

    // Make the chart data dynamic based on data
    const chartData = useMemo(() => {
        if (!data?.data?.workforceUtilization?.length) return []
        return data.data.workforceUtilization.map((item) => ({
            location: labelToKey(item.location),
            persons: item.persons.length,
            fill: `var(--color-${labelToKey(item.location)})`,
        }))
    }, [data])

    // Make the chart config dynamic based on data
    const chartConfig = useMemo(() => {
        if (!data?.data?.workforceUtilization?.length) return {}
        return {
            location: { label: 'Persons' },

            ...data.data.workforceUtilization.reduce(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (acc: any, item, index) => {
                    acc[labelToKey(item.location)] = {
                        label:
                            item.location[0].toUpperCase() +
                            item.location.slice(1),
                        color: `var(--chart-${index + 1})`,
                    }
                    return acc
                },
                {}
            ),
        }
    }, [data])

    return (
        <ChartWrapper
            title="Workforce Distribution"
            config={chartConfig}
            className="aspect-square h-[300px] w-full mx-auto"
        >
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <Spinner />
                </div>
            ) : (
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent
                                labelFormatter={() => <span>Persons</span>}
                            />
                        }
                    />
                    <Pie
                        data={chartData}
                        dataKey="persons"
                        nameKey="location"
                    />
                    <ChartLegend
                        content={<ChartLegendContent nameKey="location" />}
                        className="-translate-y-2 flex-wrap gap-2 *:basis-1/3 *:justify-center"
                    />
                </PieChart>
            )}
        </ChartWrapper>
    )
}

export default WorkforceTotalChart
