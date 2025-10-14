import {SectionLicenses} from "@/app/components/section-licenses";
import {SectionTransparency} from "@/app/components/section-transparency";
import {SectionOpenData} from "@/app/components/section-open-data";
import {SliderOpenData} from "@/app/components/slider-open-data";
import {SectionUsefulLink} from "@/app/components/section-useful-link";

export default function Home() {
    return (
        <>
            <div className="border border-default my-12 rounded-2xl inner-container p-6">
                <SectionLicenses/>
            </div>
            <div className="border border-default my-12 rounded-2xl inner-container p-6">
                <SectionTransparency/>
            </div>
            <div className="border border-default my-12 rounded-2xl inner-container p-6">
                <SectionOpenData/>
            </div>
            <div className="rounded-xl inner-container mb-12">
                <SectionUsefulLink />
            </div>
        </>
    );
}
