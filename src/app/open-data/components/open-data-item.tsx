import Link from "next/link";
import {BasicOpenDataType} from "@/types/open-data-type";
import Image from "next/image";

type OpenDataItemProps = {
    opendata: BasicOpenDataType;
}

export function OpenDataItem({opendata}: OpenDataItemProps) {
    return (
        <Link href={`/open-data/${opendata.id}`} className="bg-zinc-50 rounded-xl hover:shadow h-full flex flex-col justify-between">
            <div className='px-3 py-6 '>
               <figure>
                   {
                       opendata.image &&
                       (<Image src={opendata.image} alt={opendata.title} width={200} height={200} loading={'lazy'} fetchPriority={'low'} decoding={'async'} />)
                   }
                   <figcaption>
                       <h4>
                           {opendata.title}
                       </h4>
                   </figcaption>
               </figure>
            </div>
            <div className="border-t border-zinc-200 flex items-center justify-end px-3 py-2">
                 <span className="text-sm">
                     {'مشاهده'}
                 </span>
            </div>
        </Link>
    );

}