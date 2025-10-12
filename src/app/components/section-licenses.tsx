import {fetchApi} from "@/lib/utils";
import {BasicGroupType} from "@/types";
import {SliderLicenses} from "@/app/components/slider-licenses";
import {Xbox} from "@/components/xbox";

export async function SectionLicenses() {
    const groups:Record<string, BasicGroupType> = await fetchApi('allLicencesAndGroups');
    return (
        <section className='inner-container py-24'>
            <Xbox className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                    <h2>
                        درگاه مجوز‌ها
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur culpa et explicabo
                        fugiat harum inventore neque nobis non nostrum, pariatur quia quidem quisquam quos
                        reprehenderit repudiandae tempore temporibus tenetur.
                    </p>
                </div>
                <div>

                </div>
            </Xbox>
            <div>
                <SliderLicenses groups={groups} />
            </div>

        </section>
    );
}