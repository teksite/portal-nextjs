import {fetchApi} from "@/lib/utils";
import {BasicGroupType, TransparencyCategoryWithGroupType} from "@/types";
import {Xbox} from "@/components/xbox";
import {SliderTransparencies} from "@/app/components/slider-transparencies";

export async function SectionTransparency() {
    const categories:Record<string, TransparencyCategoryWithGroupType> = await fetchApi('allTransparencyCategoryWithGroup');
    return (
        <section>
            <Xbox>
                <h2>
                    درگاه شفافیت
                </h2>
                <hr className="my-6 border-default"/>
                <SliderTransparencies categories={categories} />
            </Xbox>
        </section>
    );
}