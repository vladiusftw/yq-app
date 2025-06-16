'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { IconLogout, IconUser } from '@tabler/icons-react'
import { signOut, useSession } from 'next-auth/react'

const Profile = () => {
    const { data: session } = useSession()
    const onLogout = () => {
        signOut()
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage />
                        <AvatarFallback>
                            <IconUser size={18} />
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" rounded-lg">
                    <DropdownMenuLabel>
                        <div className="flex flex-col">
                            <span className="truncate font-medium">
                                {session?.name}
                            </span>
                            <span className="text-muted-foreground truncate text-xs">
                                {session?.email}
                            </span>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={onLogout}
                    >
                        <IconLogout />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default Profile
