'use client'
import React, { PropsWithChildren, useEffect } from 'react'
import { SidebarProvider } from './ui/sidebar'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './ui/sonner'
import NextTopLoader from 'nextjs-toploader'
import NProgress from 'nprogress'
import { usePathname } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'
import Notifications from './Notifications'

type Props = PropsWithChildren & {}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 35 * (60 * 1000), // 30 minutes,
            staleTime: 30 * (60 * 1000),
            refetchOnWindowFocus: false,
        },
    },
})

const Providers = ({ children }: Props) => {
    const pathname = usePathname()
    useEffect(() => {
        NProgress.done()
    }, [pathname])

    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    <SessionProvider>
                        <QueryClientProvider client={queryClient}>
                            {children}
                        </QueryClientProvider>
                    </SessionProvider>
                </SidebarProvider>
            </ThemeProvider>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    classNames: {
                        description: '!text-muted-foreground',
                    },
                }}
            />
            <NextTopLoader color={'var(--color-primary)'} showSpinner={false} />
            <Notifications />
        </>
    )
}

export default Providers
