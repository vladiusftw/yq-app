import { IconDashboard, IconUsers, type Icon } from '@tabler/icons-react'
import { RouteValue } from './routes'
type NavMainItem = {
    title: string
    icon: Icon
    url: RouteValue
}

export const NAV_MAIN_ITEMS: NavMainItem[] = [
    {
        title: 'Dashboard',
        url: '/',
        icon: IconDashboard,
    },
    {
        title: 'Team',
        url: '/team',
        icon: IconUsers,
    },
]

export const ROUTE_NAMES: { [key in RouteValue]: string } = {
    '/': 'Dashboard',
    '/team': 'Team',
    '/login': 'Login',
}

export type TimeRange = '7' | '30' | '90'

type ChartTimeRangeItem = {
    label: string
    value: TimeRange
    hideMobile: boolean
    hideTablet: boolean
}

export const CHART_TIME_RANGES: ChartTimeRangeItem[] = [
    {
        label: 'Last 3 months',
        value: '90',
        hideMobile: true,
        hideTablet: true,
    },
    {
        label: 'Last 30 days',
        value: '30',
        hideMobile: true,
        hideTablet: false,
    },
    {
        label: 'Last 7 days',
        value: '7',
        hideMobile: false,
        hideTablet: false,
    },
]
