import {BasicGroupType, TransparencyCategoryWithGroupType, UsefulType} from "@/types";

import {SliderTransparenciesItem} from "@/app/components/slider-transparencies-item";
import {Xbox} from "@/components/xbox";
import Link from "next/link";

type SliderTransparenciesProps = {
    links: Record<string, UsefulType>
}

export async function SliderUsefulLink({links}: SliderTransparenciesProps) {
    return (
        <ul className="grid gap-3 grid-cols-2 sm:grid-cols-4 xl:grid-cols-10 items-stretch">
            {
                Object.entries(links).map(([key, link]: [key: string, link: UsefulType]) => (
                    <li key={key} className='h-full'>
                        <Xbox className='h-full flex flex-col items-center justify-between gap-3'>
                          <Link href={link.url ?? "#"} className='text-sm text-center'>
                              {link.title}
                          </Link>
                        </Xbox>
                    </li>
                ))
            }
        </ul>
    );
}