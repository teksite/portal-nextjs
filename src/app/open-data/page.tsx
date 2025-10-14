import {fetchApi} from "@/lib/utils";
import {GroupedOpenDataList} from "@/app/open-data/components/grouped-open-data-list";
import {GroupWithLicenseType, GroupWithOpenDataType} from "@/types";
import {Breadcrumbs} from "@/components/breadcrumb";
import {FilterAside} from "@/app/open-data/partials/filter-aside";

const breadcrumbs = [
    {label: "صفحه نخست", href: "/"},
    {label: "درگاه داده باز"}
];

export default async function ServicesIndexPage() {
    const groups: GroupWithOpenDataType[] | [] = await fetchApi('allOpenDataAndGroups');
    return (
        <>
            <Breadcrumbs items={breadcrumbs}/>
            <div className='grid gap-6 lg:grid-cols-4 2xl:grid-cols-6'>
                <aside className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-e-lg shadow-lg">
                    <FilterAside/>
                </aside>
                <div className="lg:col-span-3 2xl:col-span-5">
                    <div className="w-11/12 mt-6 mx-auto">
                        <h1>درگاه داده باز</h1>
                        <div className="pb-24">
                            <GroupedOpenDataList groups={groups}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}