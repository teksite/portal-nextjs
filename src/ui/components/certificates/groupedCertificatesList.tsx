import ServiceModel from "@/models/service";
import {getServices} from "@/http/services";
import CertificateBox from "@/ui/components/certificates/certificateBox";

export default async function GroupedCertificatesListWrapper() {
    try {
        const serviceResult = await getServices();
        const services = serviceResult?.Services ?? [];
        const groupedServices = services?.reduce((acc: { [key: string]: any[] }, service) => {
            const group = service["گروه خدمت"] || "بدون گروه";
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push(service);
            return acc;
        }, {})
        return Object.entries(groupedServices).map(([name, items]) => {
            const certificatesList = items?.map((item: { [x: string]: any; Title: any; }, index: number) => {
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
                <section key={name}>
                    <h2 className="text-center mb-12">{name}</h2>
                    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                        {certificatesList}
                    </ul>
                </section>
            );


        });
    } catch (error) {
        console.log(error)
        return <p className="text-xs text-center">در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.</p>
    }
}