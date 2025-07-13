import ServiceModel, {ServiceType} from "@/models/serviceModel";
import {getServices} from "@/http/controller/servicesController";
import CertificateBox from "@/ui/components/certificates/certificateBox";
import {ReactNode} from "react";
import {searchParamsType} from "@/ui/servicedesk/searchService";

const groupingServices = (services: ServiceType[] , search?:string|searchParamsType) => {
    return services?.reduce((acc: { [key: string]: any[] }, service: ServiceType) => {

        const group = service?.serviceGroupCaption || 'سایر';
        if (!acc[group]) {
            acc[group] = [];
        }
        const serviceInstanceModel = new ServiceModel(service);

        acc[group].push(serviceInstanceModel);
        return acc;
    }, {})
}

function listingCertificates(items: ServiceModel[]): ReactNode {
    return items?.map((item: ServiceModel, index: number) => {
        return (
            <li key={index}>
                <CertificateBox certificate={item}/>
            </li>);
    });
}


export default async function GroupedCertificatesListWrapper({search}:{search?:string|searchParamsType}) {

    try {
        const services: ServiceType[] = await getServices() ?? [];

        if (!services.length) {
            return <p className="text-center text-sm font-semibold">موردی ثبت نشده‌است</p>
        }

        const groupedServices = groupingServices(services ,search)

        return Object.entries(groupedServices).map(([name, items]) => {
            const certificatesList = listingCertificates(items)

            return (
                <section key={name}>
                    <div className="flex items-center gap-3 mb-12">
                        <h2 className="min-w-fit ">{name}</h2>
                        <hr className="w-full hr"/>
                    </div>
                    <ul className="grid gap-x-6 gap-y-12 lg:mb-24 lg:grid-cols-2 xl:grid-cols-3 items-stretch">
                        {certificatesList}
                    </ul>
                </section>
            );
        });
    } catch (error) {
        console.log(error)
        return (
            <p className="text-xs text-center">
                در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.
            </p>
        );
    }
}