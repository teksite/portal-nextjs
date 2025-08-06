import Link from "next/link";
import Breadcrumb from "@/ui/components/breadcrumb/breadcrumb";


export function TopBar() {

    return (
        <div className="bg-white shadow-sm px-6 py-3">
            <div className="flex items-center justify-between gap-6">
                <Breadcrumb items={[
                    {
                        title:'صفحه نخست',
                        href:'/'
                    },
                    {
                        title:'همه مجوزها',
                        href:'/service-desk-2'
                    },
                    {
                        title:'همه مجوزها',
                    }
                ]} />
                <Link href='/service-desk-2'>بازگشت</Link>
            </div>
        </div>
    );
}