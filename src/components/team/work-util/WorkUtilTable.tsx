import React from 'react'

import { getTeamData } from '@/data/team'
import { DataTable } from './DataTable'
import { columns } from './Columns'

const WorkUtilTable = async () => {
    // usually we put this in a try and catch in case an error occurs
    const data = await getTeamData()
    return (
        <DataTable
            columns={columns}
            data={data.data.teamData.map((item) => ({
                id: item.id,
                name: `${item.firstName} ${item.lastName}`,
                email: item.email,
                location: item.locationName,
                waitTime: item.waitTime,
            }))}
        />
    )
}

export default WorkUtilTable
