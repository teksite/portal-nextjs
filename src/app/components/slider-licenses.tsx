import {BasicGroupType} from "@/types";
import {Xbox} from "@/components/xbox";
import Link from "next/link";
import Image from "next/image";
type SliderLicensesProps={
    groups: Record<string, BasicGroupType>
}
export async function SliderLicenses({groups}:SliderLicensesProps) {
    return (
      <ul className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 items-stretch">
          {
              Object.entries(groups).map(([key, group]:[key:string , group:BasicGroupType]) => (
                  <li key={key} className='h-full'>
                      <Xbox className='h-full'>
                          <Link href={`/licenses/${group.id}`}>
                              <figure className="text-center">
                                  {
                                      group.image &&
                                      <Image src={group.image} alt={group.title} width={200} height={150}
                                             fetchPriority={'low'} loading={'lazy'} decoding={'async'}/>
                                  }
                                  <figcaption className="text-center text-sm">
                                      {group.title}
                                  </figcaption>
                              </figure>
                          </Link>
                      </Xbox>
                  </li>
              ))
          }

      </ul>
    );
}