import SearchService, {searchParamsType} from "@/ui/servicedesk/searchService";
import Banner from "@/ui/layout/Banner";
import GroupedCertificatesListWrapper from "@/ui/components/certificates/groupedCertificatesList";
import {GroupedCardWithIconListSkeleton} from "@/ui/components/skeletons";
import {Suspense} from "react";
import Breadcrumb from "@/ui/components/breadcrumb/breadcrumb";

export default async function ServicePage(props: {searchParams?: Promise<searchParamsType>;}) {
    const searchParams = await props.searchParams;

    const breadcrumbItems = [
        {
            title: "خدمات و مجوزها"
        }
    ]

    return (
        <>
            <Banner title='خدمات'>
                <Breadcrumb items={breadcrumbItems} listClassName='justify-center mx-auto text-center'/>
            </Banner>
            <main className=''>
                <SearchService searchParams={searchParams}/>
                <div className="mt-12 space-y-12 inner-container">
                    <Suspense fallback={<GroupedCardWithIconListSkeleton/>}>
                        <GroupedCertificatesListWrapper/>
                    </Suspense>
                </div>
            </main>
        </>
    );


}