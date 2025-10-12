import {SkeletonGroupedLicensesList} from "@/app/licenses/components/skeletons/skeleton-grouped-licenses-list";
import {SkeletonBreadcrumbs} from "@/components/skeletons/skeleton-breadcrumb";


export default function Loading() {
    return (
        <>
            <SkeletonBreadcrumbs />
            <div className='inner-container'>
                <span className="w-24 h-3 p-2 shimmer block mb-6"></span>
                <SkeletonGroupedLicensesList />
            </div>
        </>
    );
}