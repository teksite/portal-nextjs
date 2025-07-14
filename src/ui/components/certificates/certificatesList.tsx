import ServiceModel, {ServiceType} from "@/models/serviceModel";
import CertificateBox from "@/ui/components/certificates/certificateBox";
import {getServices} from "@/http/controller/servicesController";

export default async function CertificatesListWrapper({count = 8}: { count: number|string }) {

    try {
        const services:ServiceType[] = await getServices() ?? [];
        if (!services.length) {
            return <p className="text-center text-sm font-semibold">موردی ثبت نشده‌است</p>
        }
        const certificatesList = services?.slice(0, Number(count)).map((item: ServiceType, index: number) => {
            const certificate = new ServiceModel(item);
            return (
                <li key={index}>
                    <CertificateBox certificate={certificate}/>
                </li>);
        });
        return (
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                {certificatesList}
            </ul>
        );
    } catch (error) {
        return <p className="text-xs text-center">در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.</p>
    }
}