import SearchService from "@/ui/servicedesk/searchService";
import Banner from "@/ui/layout/Banner";
import GroupedCertificatesListWrapper from "@/ui/components/certificates/groupedCertificatesList";
import {GroupedCardWithIconListSkeleton} from "../../ui/components/skeletons";
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