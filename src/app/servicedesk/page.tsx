import SearchService from "@/app/ui/servicedesk/searchService";
import Banner from "@/app/ui/layout/Banner";
import GroupedCertificatesListWrapper from "@/app/ui/components/certificates/groupedCertificatesList";
import {GroupedCardWithIconListSkeleton} from "@/app/ui/components/skeletons";
import {Suspense} from "react";

export default async function ServicePage() {

    return (
        <>
            <Banner title='خدمات'>
            </Banner>
            <main className=''>
                <SearchService/>
                <div className="mt-12 space-y-12 inner-container">
                    <Suspense fallback={<GroupedCardWithIconListSkeleton/>}>
                        <GroupedCertificatesListWrapper/>
                    </Suspense>
                </div>
            </main>

        </>
    );


}