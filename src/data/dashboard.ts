import { TimeRange } from '@/lib/constants'
import data from '@/mock/sample.json'

type ActiveUserItem = {
    date: string
    value: number
}

type ActiveUsersResponse = {
    data: {
        activeUsers: ActiveUserItem[]
    }
    status: number
    statusText: 'OK'
}

type WorkforceUtilizationItem = {
    location: string
    persons: {
        firstName: string
        lastName: string
    }[]
    waitTime: number
}

type WorkforceUtilizationResponse = {
    data: {
        workforceUtilization: WorkforceUtilizationItem[]
    }
    status: number
    statusText: 'OK'
}

export type DashboardSectionsResponse = {
    data: {
        dashboardSections: {
            totalRevenue: {
                value: number
                percent: number
            }
            newCustomers: {
                value: number
                percent: number
            }
            activeAccounts: {
                value: number
                percent: number
            }
            growthRate: {
                value: number
                percent: number
            }
        }
    }
    status: number
    statusText: 'OK'
}

export const getDashboardSections = async () => {
    return await new Promise<DashboardSectionsResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    dashboardSections: {
                        totalRevenue: {
                            value: 1250,
                            percent: 12.5,
                        },
                        newCustomers: {
                            value: 1234,
                            percent: -20,
                        },
                        activeAccounts: {
                            value: 45678,
                            percent: 12.5,
                        },
                        growthRate: {
                            value: 4.5,
                            percent: 4.5,
                        },
                    },
                },
                status: 200,
                statusText: 'OK',
            })
        }, 1000)
    })
}

export const getActiveUsers = async (days: TimeRange) => {
    const today = new Date()
    const activeUsers: ActiveUserItem[] = []
    const parsedDays = parseInt(days)
    for (let i = 0; i < parsedDays; i++) {
        const newDate = new Date()
        newDate.setDate(today.getDate() - (parsedDays - i))
        activeUsers.push({
            date: newDate.toISOString().split('T')[0] + 'T00:00:00Z',
            value: Math.floor(Math.random() * 400) + 200, // random between 200-600
        })
    }

    return await new Promise<ActiveUsersResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    activeUsers,
                },
                status: 200,
                statusText: 'OK',
            })
        }, 1000)
    })
}

export const getWorkforce = async () => {
    return new Promise<WorkforceUtilizationResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    workforceUtilization: data.sectionData.map((section) => ({
                        location: section.locationName,
                        persons: section.metrics.workForceUtilization.persons,
                        waitTime: section.metrics.waitTimeSeconds,
                    })),
                },
                status: 200,
                statusText: 'OK',
            })
        }, 1000)
    })
}
