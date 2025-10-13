import { SkeletonLicenseItem } from "@/app/licenses/components/skeletons/skeleton-license-item";

type SkeletonGroupedLicensesListProps = {
    skeletonCount?: number;
}

export function SkeletonGroupedLicensesList({ skeletonCount = 12 }: SkeletonGroupedLicensesListProps) {
    const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);

    return (
        <ul>
            <li className="mt-12">
                <span className="shimmer w-24 p-2 h-3 block rounded-md"></span>
            </li>
            <div className="mt-6">
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
                    {skeletons.map((index) => (
                        <li key={index} className="h-full">
                            <SkeletonLicenseItem />
                        </li>
                    ))}
                </ul>
            </div>
        </ul>
    );
}
