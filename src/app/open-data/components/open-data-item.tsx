import Link from "next/link";
import {BasicOpenDataType} from "@/types/open-data-type";

type OpenDataItemProps = {
    opendata: BasicOpenDataType;
}

export function OpenDataItem({opendata}: OpenDataItemProps) {
    return (
        <Link href={`#`} className="bg-zinc-50 rounded-xl hover:shadow h-full flex flex-col justify-between">
            <div className='px-3 py-6 '>
                <h4>
                    {opendata.title}
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