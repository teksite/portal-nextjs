import ServiceModel from "@/models/service";
import {getServices} from "@/http/services";
import CertificateBox from "@/ui/components/certificates/certificateBox";

export default async function CertificatesListWrapper({count = "8"}: { count?: number | string }) {

    try {
        const result = await getServices();
        const Services = result?.Services ?? [];
        if (!Services.length) {
            return <p className="text-center text-sm font-semibold">موردی ثبت شنده است</p>
        }
        const certificatesList = Services?.slice(0, count).map((item: {
            [x: string]: any;
            Title: any;
        }, index: number) => {
            const certificate = new ServiceModel({
                title: item?.Title,
                description: item["شرح خدمت"] ?? 'كسب و كار فرهنگي در فضاي مجازي نظير رسانه برخط، نشر ديجيتال و...',
                code: item["كد خدمت"] ?? null,
                group: item["گروه"] ?? null,
            });
            return (
                <li key={index}>
                    <CertificateBox certificate={certificate}/>
                </li>);
        });
        return (
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                {certificatesList}
            </ul>
        );
    } catch (error) {
        console.log(error)
        return <p className="text-xs text-center">در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.</p>
    }
}