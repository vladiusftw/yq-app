'use client'
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import Profile from './Profile'
import { Separator } from '../ui/separator'
import { usePathname } from 'next/navigation'
import { ROUTE_NAMES } from '@/lib/constants'
import { RouteValue } from '@/lib/routes'
import ThemeToggle from '../shared/ThemeToggle'

const AppTopbar = () => {
    const pathname = usePathname() as RouteValue

    return (
        <>
            <header className="flex items-center justify-between w-full pe-4 py-2 ">
                <div className="flex items-center gap-1 lg:gap-2 px-4">
                    <SidebarTrigger />
                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:h-4 me-2"
                    />
                    <h1>{ROUTE_NAMES[pathname]}</h1>
                </div>
                <div className="flex items-center">
                    <Profile />
                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:h-4 ms-2 me-1"
                    />
                    <ThemeToggle />
                </div>
            </header>
            <Separator />
        </>
    )
}

export default AppTopbar
