import {GroupWithLicenseType, LicenseType} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {IconPicker} from "@/components/icon";

type LicenseItemProps = {
    license: LicenseType;
    group?: GroupWithLicenseType
}

export function LicenseItem({license, group}: LicenseItemProps) {
    const imageSrc = license.image || group?.image || null;
    return (
        <Link href={`/licenses/${license.id}`}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:shadow h-full flex flex-col justify-between">
            <div className='px-3 py-6 '>
                {
                    imageSrc ?
                        (<figure className={'text-center'}>
                            <Image src={imageSrc} alt={license.title} loading={'lazy'} fetchPriority={'low'}
                                   decoding={'async'} width={200} height={200} className={'mx-auto'}/>
                            <figcaption>
                                <h4 className={'text-center'}>
                                    {license.title}
                                </h4>
                            </figcaption>
                        </figure>) :
                        (<h4>
                            {license.title}
                        </h4>)
                }
            </div>
            <div className="border-t border-zinc-200 flex items-center justify-end gap-1 px-3 py-2">
                 <span className="text-sm">
                     {'مشاهده'}
                 </span>
                <IconPicker icon={'angle-left'} className={'stroke-2'} size={'12'}/>
            </div>
        </Link>
    );

}