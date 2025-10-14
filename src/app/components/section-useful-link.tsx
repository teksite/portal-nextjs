import {fetchApi} from "@/lib/utils";
import {UsefulType} from "@/types";

import {SliderUsefulLink} from "@/app/components/slider-useful-link";

export async function SectionUsefulLink() {
    const links: Record<string, UsefulType> = await fetchApi('allUsefulLink');
    return (
        <section className=''>
            <SliderUsefulLink links={links}/>
        </section>
    );
}