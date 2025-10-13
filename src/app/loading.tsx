import {SkeletonGroupedLicensesList} from "@/app/licenses/components/skeletons/skeleton-grouped-licenses-list";
import {SkeletonBreadcrumbs} from "@/components/skeletons/skeleton-breadcrumb";
import {SkeletonAside} from "@/app/licenses/components/skeletons/skeleton-aside";


export default function Loading() {
    return (
        <>
            <SkeletonBreadcrumbs/>
            <div className='grid gap-6 lg:grid-cols-4 2xl:grid-cols-6'>
              <div>
                  <SkeletonAside />
              </div>
                <div className="lg:col-span-3 2xl:col-span-5">
                    <div className="w-11/12 mt-6 mx-auto">
                        <span className="w-24 h-3 p-2 shimmer block mb-6"></span>
                        <SkeletonGroupedLicensesList/>
                    </div>
                </div>
            </div>
        </>
    );
}