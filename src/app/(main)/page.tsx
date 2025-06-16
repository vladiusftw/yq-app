import ActiveUsersChart from '@/components/dashboard/ActiveUsersChart'
import SectionCards from '@/components/dashboard/SectionCards'
import WorkforceTotalChart from '@/components/dashboard/WorkforceTotalChart'
import WorkforceUtilChart from '@/components/dashboard/WorkforceUtilChart'

export default async function Home() {
    return (
        <div className="space-y-4 md:space-y-6">
            <section>
                <SectionCards />
            </section>
            <section className="flex flex-col gap-2">
                <ActiveUsersChart />
            </section>

            <section className="flex flex-col gap-2 @container/chart">
                <div className="grid @[1000px]/chart:grid-cols-2 gap-4">
                    <WorkforceUtilChart />
                    <WorkforceTotalChart />
                </div>
            </section>
        </div>
    )
}
