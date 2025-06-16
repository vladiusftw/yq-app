import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar'
import Link from 'next/link'
import { ROUTES } from '@/lib/routes'
import { IconInnerShadowTop } from '@tabler/icons-react'
import NavMain from './NavMain'

const AppSidebar = () => {
    return (
        <Sidebar variant="inset" collapsible="offcanvas">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={ROUTES.Dashboard}>
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base font-semibold">
                                    YQ APP
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar
