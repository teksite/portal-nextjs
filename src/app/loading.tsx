import {SkeletonSection} from "@/app/components/skeleton/skeleton-section";
import {SkeletonSlider} from "@/app/components/skeleton/skeleton-slider";
import {SectionLicenses} from "@/app/components/section-licenses";
import {SectionTransparency} from "@/app/components/section-transparency";
import {SectionOpenData} from "@/app/components/section-open-data";


export default function Loading() {
    return (
        <>
            <div className="border border-default my-12 rounded-xl inner-container p-6">
                <SkeletonSection/>
                <SkeletonSlider />
            </div>
            <div className="border border-default my-12 rounded-xl inner-container p-6">
                <span className="shimmer w-24 p-2 h-6 block rounded-md mb-12"></span>
                <SkeletonSlider/>
            </div>
            <div className="border border-default my-12 rounded-xl inner-container p-6">
                <SkeletonSection/>
                <SkeletonSlider />
            </div>

            <div className="border border-default my-12 rounded-xl inner-container p-6">
                <SectionLicenses/>
            </div>
            <div className="border border-default my-12 rounded-xl inner-container p-6">
                <SectionTransparency/>
            </div>
            <div className="border border-default my-12 rounded-xl inner-container p-6">
                <SectionOpenData/>
                <SkeletonSlider/>

            </div>
        </>
    );
}