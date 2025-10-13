import {fetchApi} from "@/lib/utils";
import {BasicGroupType} from "@/types";
import {SliderLicenses} from "@/app/components/slider-licenses";
import {Xbox} from "@/components/xbox";
import Link from "next/link";

export async function SectionLicenses() {
    const groups:Record<string, BasicGroupType> = await fetchApi('allLicencesAndGroups');
    return (
        <section className=''>
            <Xbox className="grid gap-6 md:grid-cols-2 mb-6 p-6">
                <div>
                    <h2>
                        درگاه مجوز‌ها
                    </h2>
                    <p>
                        خدمات وزارت فرهنگ و ارشاد اسلامی را از این قسمت مشاهده و ثبت درخواست نمایید. درخواست های الکترونیکی سازمان را میتوان از این قسمت درخواست و ثبت کرد.
                    </p>
                    <div className="mt-6">
                        <Link href={'/licenses'} className='text-sm font-semibold text-zinc-50 bg-blue-950 rounded-lg px-3 py-1'>
                            مشاهده خدمات
                        </Link>
                    </div>
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