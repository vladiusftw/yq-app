import data from '@/mock/sample.json'

type TeamDataItem = {
    id: string
    firstName: string
    lastName: string
    email: string
    waitTime: number
    locationName: string
}

type TeamDataResponse = {
    data: { teamData: TeamDataItem[] }
    status: number
    statusText: 'OK'
}

export const getTeamData = async () => {
    return new Promise<TeamDataResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    teamData: data.sectionData.flatMap((section) =>
                        section.metrics.workForceUtilization.persons.map(
                            (person) => ({
                                id: person.id,
                                firstName: person.firstName,
                                lastName: person.lastName,
                                email: person.email,
                                waitTime: section.metrics.waitTimeSeconds,
                                locationName: section.locationName,
                            })
                        )
                    ),
                },
                status: 200,
                statusText: 'OK',
            })
        }, 1000)
    })
}
