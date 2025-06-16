'use client'

import { Button } from '@/components/ui/button'
import { formatDuration } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export type WorkUtil = {
    id: string
    name: string
    email: string
    location: string
    waitTime: number
}

export const columns: ColumnDef<WorkUtil>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'location',
        header: 'Location',
    },
    {
        accessorKey: 'waitTime',
        header: 'Wait Time',
        cell: ({ row }) => {
            const seconds = parseInt(row.getValue('waitTime'))
            const formatted = formatDuration(seconds)

            return <div className="">{formatted}</div>
        },
    },
]
