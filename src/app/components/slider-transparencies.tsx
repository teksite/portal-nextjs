import {BasicGroupType, TransparencyCategoryWithGroupType} from "@/types";

import {SliderTransparenciesItem} from "@/app/components/slider-transparencies-item";

type SliderTransparenciesProps = {
    categories: Record<string, TransparencyCategoryWithGroupType>
}

export async function SliderTransparencies({categories}: SliderTransparenciesProps) {
    return (
        <ul className="grid gap-3 grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 items-stretch">
            {
                Object.entries(categories).map(([key, category]: [key: string, categories: TransparencyCategoryWithGroupType]) => (
                    <li key={key} className='h-full'>
                        <div className='h-full'>
                           <SliderTransparenciesItem category={category} />
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}