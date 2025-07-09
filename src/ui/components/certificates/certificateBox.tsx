import CardWithIcon from "@/ui/components/cardWithIcon";
import { SolidLink } from "@/ui/components/Links";
import ServiceModel from "@/models/service";
import CatalogBtn from "@/ui/components/certificates/catalogBtn";

interface CertificateBoxProps {
    certificate: ServiceModel;
}

export default function CertificateBox({ certificate }: CertificateBoxProps) {
    const title:string = certificate.get("title", "بدون عنوان") ?? "بدون عنوان";
    const image:string = certificate.get("image", "/no-image.jpg") ?? "/no-image.jpg";
    const description = certificate.get("description");

    return (
        <CardWithIcon title={title} image={image} className="h-full">
            <div className="space-y-6 flex flex-col justify-between h-full">
                {description && (
                    <p className="text-center text-sm">
                        {description}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full h-full mt-auto mb-0 justify-self-end">
                    <SolidLink href="#" title="ثبت" color="blue" className="w-full" />
                    <CatalogBtn certificateId={certificate.get('code')}/>
                </div>
            </div>
        </CardWithIcon>
    );
}