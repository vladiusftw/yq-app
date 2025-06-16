'use client'
import { useMemo } from 'react'
import ChartWrapper from '../shared/ChartWrapper'
import { ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'
import Spinner from '../shared/Spinner'
import { keyToLabel, labelToKey } from '@/lib/utils'
import useWorkforce from '@/hooks/dashboard/useWorkforce'

const WorkforceUtilChart = () => {
    const { data, isLoading } = useWorkforce()

    // make chart data dynamic based on data
    const chartData = useMemo(() => {
        if (!data?.data?.workforceUtilization?.length) return []
        return data.data.workforceUtilization.map((item) => ({
            location: labelToKey(item.location),
            waitTime: item.waitTime,
            fill: `var(--color-${labelToKey(item.location)})`,
        }))
    }, [data])

    // make chart config dynamic based on data
    const chartConfig = useMemo(() => {
        if (!data?.data?.workforceUtilization?.length) return {}
        return {
            waitTime: { label: 'Wait Time' },
            ...data.data.workforceUtilization.reduce(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (acc: any, item, index) => {
                    acc[labelToKey(item.location)] = {
                        label: `${item.location[0].toUpperCase()}${item.location.slice(
                            1
                        )}`,
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
            title="Workforce Utilization"
            config={chartConfig}
            className="aspect-square h-[300px] w-full mx-auto"
            cardDescription={<span className="">In seconds</span>}
        >
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <Spinner />
                </div>
            ) : (
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="vertical"
                    margin={{
                        left: 10,
                        right: 25,
                    }}
                >
                    <XAxis type="number" dataKey="waitTime" hide />
                    <YAxis
                        dataKey="location"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => keyToLabel(value)}
                    />

                    <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent
                                hideLabel
                                formatter={(value, name, item) => (
                                    <>
                                        <div
                                            className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                                            style={{
                                                backgroundColor:
                                                    item.payload.fill,
                                            }}
                                        />
                                        <div className="text-muted-foreground flex min-w-[130px] items-center text-xs">
                                            {chartConfig[
                                                name as keyof typeof chartConfig
                                            ]?.label || name}
                                            <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                                {value}
                                                <span className="text-muted-foreground font-normal">
                                                    sec
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            />
                        }
                    />
                    <Bar dataKey="waitTime" radius={8}>
                        <LabelList
                            dataKey="waitTime"
                            position="right"
                            offset={8}
                            className="fill-foreground"
                            fontSize={12}
                        />
                    </Bar>
                </BarChart>
            )}
        </ChartWrapper>
    )
}

export default WorkforceUtilChart
