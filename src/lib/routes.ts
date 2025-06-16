export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES]
export const ROUTES = {
    LOGIN: '/login',
    Dashboard: '/',
    TEAM: '/team',
} as const
