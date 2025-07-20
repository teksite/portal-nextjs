import {Suspense} from "react";

import Breadcrumb from "@/ui/components/breadcrumb/breadcrumb";
import {GroupedCardWithIconListSkeleton} from "@/ui/components/skeletons";
import Banner from "@/ui/layout/Banner";
import SearchService, {searchParamsType} from "@/ui/servicedesk/searchService";
import ServiceDeskPage from "@/ui/servicedesk/searchItems";


export default async function LicensesPage(props: {searchParams?: Promise<searchParamsType>;}) {
    const searchParams = await props.searchParams;

    const breadcrumbItems = [
        {
            title: "خدمات و مجوزها"
        }
    ];

    return (
        <>
            <Banner title='خدمات'>
                <Breadcrumb items={breadcrumbItems} listClassName='justify-center mx-auto text-center'/>
            </Banner>
            <main className=''>
                <SearchService />
                <div className="mt-12 space-y-12 inner-container">
                    <Suspense fallback={<GroupedCardWithIconListSkeleton/>}>
                        <ServiceDeskPage search={searchParams}/>
                    </Suspense>
                </div>
            </main>
        </>
    );
}