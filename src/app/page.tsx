import {SectionLicenses} from "@/app/components/section-licenses";
import {SectionTransparency} from "@/app/components/section-transparency";
import {SectionOpenData} from "@/app/components/section-open-data";

export default function Home() {
    return (
        <>
            <div className="border border-zinc-300 my-12 rounded-xl inner-container p-6">
                <SectionLicenses/>
            </div>
            <div className="border border-zinc-300 my-12 rounded-xl inner-container p-6">
                <SectionTransparency/>
            </div>
            <div className="border border-zinc-300 my-12 rounded-xl inner-container p-6">
                <SectionOpenData/>
            </div>
        </>
    );
}
