import {Suspense} from "react";

import Breadcrumb from "@/ui/components/breadcrumb/breadcrumb";
import {GroupedCardWithIconListSkeleton} from "@/ui/components/skeletons";
import Banner from "@/ui/layout/Banner";
import SearchBox from "@/ui/servicedesk/searchBox";
import SearchResult from "@/ui/servicedesk/searchResult";


export default async function LicensesPage(props: { searchParams}) {
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
                <div className="-mt-16">
                    <SearchBox/>
                </div>
                <div className="mt-12 space-y-12 inner-container">
                    <Suspense fallback={<GroupedCardWithIconListSkeleton/>}>
                        <SearchResult search={searchParams}/>
                    </Suspense>
                </div>
            </main>
        </>
    );
}