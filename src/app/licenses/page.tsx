import {fetchApi} from "@/lib/utils";
import {GroupType, LicenseType} from "@/types";
import {GroupedLicensesList} from "@/app/licenses/components/grouped-licenses-list";
import Link from "next/link";
import {Breadcrumbs} from "@/app/components/breadcrumb";
import {FilterAside} from "@/app/licenses/partials/filter-aside";

const breadcrumbs = [
    {label: "صفحه نخست", href: "/"},
    {label: "صفحه مجوزها"}
];
export default async function ServicesIndexPage() {

    const groups: GroupType[] | [] = await fetchApi('allLicencesAndGroups');

    return (
        <>
            <Breadcrumbs items={breadcrumbs}/>
            <div className='grid gap-6 lg:grid-cols-4 2xl:grid-cols-6'>
                <aside className="p-3 bg-zinc-50 rounded-e-lg shadow-lg">
                    <FilterAside />
                </aside>
               <div className="lg:col-span-3 2xl:col-span-5">
                   <div className="w-11/12 mt-6 mx-auto">
                       <h1>مجوزها</h1>
                       <GroupedLicensesList groups={groups}/>
                   </div>
               </div>
            </div>
        </>
    );
}