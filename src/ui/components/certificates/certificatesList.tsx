import CardWithIcon from "@/ui/components/cardWithIcon";
import {OutlineLink, SolidLink} from "@/ui/components/Links";
import ServiceModel from "@/models/service";
import {getServices} from "@/http/services";

export default async function CertificatesListWrapper({count="8"}: { count?: number|string }) {

    try {
        const result = await getServices();
        const Services = result?.Services ?? [];
        if (!Services.length){
            return <p className="text-center text-sm font-semibold">موردی ثبت شنده است</p>
        }
        const certificatesList = Services?.slice(0, count).map((item: { [x: string]: any; Title: any; }, index: number) => {
            const certificate = new ServiceModel({
                title: item?.Title,
                description: item["شرح خدمت"] ?? 'كسب و كار فرهنگي در فضاي مجازي نظير رسانه برخط، نشر ديجيتال و...' ,
                code: item["كد خدمت"] ?? null,
                group: item["گروه"] ?? null,
            });
            return (<li key={index} >
                <CardWithIcon title={String(certificate.get('title' , "عنوان مجوز"))} image="/sdfsdf.png" className="h-full">
                    <div className="space-y-6 flex flex-col justify-between h-full">
                        {certificate.get('description') && <p className='text-center text-sm'>
                            {certificate.get('description') ?? ''}
                        </p>}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full h-full mt-auto mb-0 justify-self-end">
                            <SolidLink href="#" title="ثبت" color="blue" className="w-full" />
                            <OutlineLink href="#" title="کاتالوگ" color="blue" className="w-full" />
                        </div>
                    </div>
                </CardWithIcon>
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