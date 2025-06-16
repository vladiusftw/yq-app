import { getDashboardSections } from '@/data/dashboard'
import React from 'react'
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { Badge } from '../ui/badge'
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'

type SectionItem = {
    title: string
    percent: number
    value: string
    description: string
    subtext: string
}

const SectionCards = async () => {
    const dashboardSectionsData = await getDashboardSections()

    const sectionsData = dashboardSectionsData.data.dashboardSections

    const sections: SectionItem[] = [
        {
            title: 'Total Revenue',
            percent: sectionsData.totalRevenue.percent,
            value: new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(sectionsData.totalRevenue.value),
            description: `Trending ${
                sectionsData.totalRevenue.percent > 0 ? 'up' : 'down'
            } this month`,
            subtext: 'Visitors for the last 6 months',
        },
        {
            title: 'New Customers',
            percent: sectionsData.newCustomers.percent,
            value: sectionsData.newCustomers.value.toLocaleString('de-DE'),
            description: `${
                sectionsData.newCustomers.percent > 0 ? 'Up' : 'Down'
            } ${Math.abs(sectionsData.newCustomers.percent)}% this period`,
            subtext: `Acquisition ${
                sectionsData.newCustomers.percent > 0
                    ? 'looks great'
                    : 'needs attention'
            }`,
        },
        {
            title: 'Active Accounts',
            percent: sectionsData.activeAccounts.percent,
            value: sectionsData.activeAccounts.value.toLocaleString('de-DE'),
            description: `${
                sectionsData.activeAccounts.percent > 0 ? 'Strong' : 'Weak'
            } user retention`,
            subtext: 'Engagement exceed targets',
        },
        {
            title: 'Growth Rate',
            percent: sectionsData.growthRate.percent,
            value: `${sectionsData.growthRate.value.toLocaleString('de-DE')}%`,
            description: `Performance ${
                sectionsData.growthRate.percent > 0 ? 'increase' : 'decrease'
            }`,
            subtext: 'Meets growth projections',
        },
    ]

    return (
        <div className="@container/section ">
            <div className="grid @[600px]/section:grid-cols-2 @[1100px]/section:grid-cols-4 gap-4">
                {sections.map((section) => (
                    <Card className="@container/card" key={section.title}>
                        <CardHeader>
                            <CardDescription>{section.title}</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                {section.value}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline">
                                    {section.percent > 0 ? (
                                        <>
                                            <IconTrendingUp />
                                            {`+${section.percent.toLocaleString(
                                                'de-DE'
                                            )}%`}
                                        </>
                                    ) : (
                                        <>
                                            <IconTrendingDown />
                                            {`${section.percent.toLocaleString(
                                                'de-DE'
                                            )}%`}
                                        </>
                                    )}
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-1.5 text-sm">
                            <div className="line-clamp-1 flex gap-2 font-medium">
                                {section.description}
                            </div>
                            <div className="text-muted-foreground">
                                {section.subtext}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default SectionCards
