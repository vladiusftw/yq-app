import { SidebarInset } from '../../components/ui/sidebar'
import AppSidebar from '@/components/layout/AppSidebar'
import AppTopbar from '@/components/layout/AppTopbar'
import ReportBug from '@/components/layout/ReportBug'

export const revalidate = 0

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <AppSidebar />
            <SidebarInset className="flex flex-1 flex-col">
                <AppTopbar />
                <div className="flex flex-1 flex-col px-4 py-4">{children}</div>
            </SidebarInset>
            <ReportBug />
        </>
    )
}
