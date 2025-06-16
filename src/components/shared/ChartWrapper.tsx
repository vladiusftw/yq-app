'use client'
import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { ChartConfig, ChartContainer } from '../ui/chart'
import * as RechartsPrimitive from 'recharts'

export type ChartCWrapperProps = React.ComponentProps<'div'> & {
    config: ChartConfig
    children: React.ComponentProps<
        typeof RechartsPrimitive.ResponsiveContainer
    >['children']
    cardAction?: React.ReactNode
    cardDescription?: React.ReactNode
    title: string
    cardBottom?: React.ReactNode
}

const ChartWrapper = ({
    children,
    config,
    cardAction,
    cardDescription,
    cardBottom,
    title,
    ...rest
}: ChartCWrapperProps) => {
    return (
        <Card className="@container/card">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{cardDescription}</CardDescription>
                <CardAction>{cardAction}</CardAction>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config} {...rest}>
                    {children}
                </ChartContainer>
                {cardBottom}
            </CardContent>
        </Card>
    )
}

export default ChartWrapper
