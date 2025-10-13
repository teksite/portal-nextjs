import { SkeletonLicenseItem } from "@/app/licenses/components/skeletons/skeleton-license-item";

type SkeletonGroupedLicensesListProps = {
    skeletonCount?: number;
}

export function SkeletonAside({ skeletonCount = 3 }: SkeletonGroupedLicensesListProps) {
    const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);

    return (
        <div className={'p-6'}>
            <ul>
                <li className="mt-12">
                    <span className="shimmer w-24 p-2 h-3 block rounded-md"></span>
                </li>
                <div className="mt-6">
                    <ul className="">
                        {skeletons.map((index) => (
                            <li key={index} className="h-full mt-6">
                                <span className="shimmer w-12 p-2 h-3 block rounded-md"></span>
                                <span className="shimmer w-full p-3 h-8 block rounded-md mt-1"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </div>
    );
}
