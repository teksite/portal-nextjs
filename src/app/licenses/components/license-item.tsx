import {LicenseType} from "@/types";
import Link from "next/link";

type LicenseItemProps = {
    license: LicenseType;
}

export function LicenseItem({license}: LicenseItemProps) {
    return (
        <Link href={`/licenses/${license.id}`} className="bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:shadow h-full flex flex-col justify-between">
            <div className='px-3 py-6 '>
                <h4>
                    {license.title}
                </h4>
            </div>
            <div className="border-t border-zinc-200 flex items-center justify-end px-3 py-2">
                 <span className="text-sm">
                     {'مشاهده'}
                 </span>
            </div>
        </Link>
    );

}