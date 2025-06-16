'use client'
import React, { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { CHART_TIME_RANGES, TimeRange } from '@/lib/constants'
import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'
import ChartWrapper, {
    ChartCWrapperProps,
} from '@/components/shared/ChartWrapper'

const useTimeRangeChart = () => {
    const isMobile = useIsMobile()
    const [timeRange, setTimeRange] = useState<TimeRange>('90')

    useEffect(() => {
        if (isMobile) setTimeRange('7')
    }, [isMobile])

    const onValueChange = (value: TimeRange) => {
        if (!value) return
        setTimeRange(value)
    }

    const ChartContainer = ({
        children,
        ...rest
    }: Omit<ChartCWrapperProps, 'cardAction'>) => {
        return (
            <ChartWrapper
                {...rest}
                cardAction={
                    <>
                        <ToggleGroup
                            type="single"
                            value={timeRange.toString()}
                            onValueChange={onValueChange}
                            variant={'outline'}
                            className="*:data-[slot=toggle-group-item]:px-4 hidden @[768px]/card:flex"
                        >
                            {CHART_TIME_RANGES.map((item) => (
                                <ToggleGroupItem
                                    value={item.value}
                                    key={item.value}
                                >
                                    {item.label}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>

                        <Select
                            value={timeRange.toString()}
                            onValueChange={onValueChange}
                        >
                            <SelectTrigger
                                size="sm"
                                aria-label="Select a time range"
                                className="hidden md:flex w-40 @[768px]/card:hidden"
                            >
                                <SelectValue placeholder="Last 3 months" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                {CHART_TIME_RANGES.map((item) => (
                                    <SelectItem
                                        value={item.value}
                                        key={item.value}
                                        className={cn(
                                            'rounded-lg',
                                            item.hideTablet &&
                                                !item.hideMobile &&
                                                'hidden md:flex',
                                            item.hideMobile && 'hidden sm:flex'
                                        )}
                                    >
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </>
                }
            >
                {children}
            </ChartWrapper>
        )
    }
    return {
        timeRange,
        setTimeRange,
        ChartContainer,
    }
}

export default useTimeRangeChart
