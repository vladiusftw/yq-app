'use client'
import React from 'react'
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar'
import { NAV_MAIN_ITEMS } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const NavMain = () => {
    const pathname = usePathname()
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {NAV_MAIN_ITEMS.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <Link href={item.url}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    className={cn(
                                        pathname === item.url &&
                                            '!bg-primary !text-primary-foreground'
                                    )}
                                >
                                    <item.icon />
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

export default NavMain
