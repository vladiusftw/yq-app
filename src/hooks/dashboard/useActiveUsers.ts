'use client'
import { getActiveUsers } from '@/data/dashboard'
import { TimeRange } from '@/lib/constants'
import { useQuery } from '@tanstack/react-query'

type Props = {
    range: TimeRange
}

const useActiveUsers = ({ range }: Props) => {
    return useQuery({
        queryKey: ['active-users', range],
        queryFn: () => getActiveUsers(range),
    })
}

export default useActiveUsers
