import CardWithIcon from "@/ui/components/cardWithIcon";
import {SolidLink} from "@/ui/components/Links";
import ServiceModel, {ServiceType} from "@/models/serviceModel";
import CatalogBtn from "@/ui/components/certificates/catalogBtn";
import {InboxArrowDownIcon} from "@heroicons/react/16/solid";

interface CertificateBoxProps {
    certificate: ServiceModel;
}

export default function CertificateBox({certificate}: CertificateBoxProps) {
    const title: string = certificate.get("title", "بدون عنوان") ?? "بدون عنوان";
    const image: string =  "/no-image.jpg";
    const description = certificate.get("description");

    return (
        <CardWithIcon title={title} image={image} className="h-full">
            <div className="space-y-6 flex flex-col justify-between h-full">
                {description && (
                    <p className="text-center text-sm">
                        {description}
                    </p>
                )}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full h-full mt-auto mb-0 justify-self-end">
                    <SolidLink
                        href="https://ssoinfo.farhang.gov.ir/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DPORTALErSHaD232%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%253A%252F%252Fmy.farhang.gov.ir%252Fapi%252Fopenid%252Fcallback%253Fprovider%253DPortalBarsaSSO%26state%3D41119AD9_https%25253A%25252F%25252Fmy.farhang.gov.ir%25252F%26nonce%3D41119AD9%26response_mode%3Dform_post%26culture%3Dfa-IR#/servicedesk"
                        color="green" className="w-full flex gap-3">
                        <InboxArrowDownIcon className="fill-current size-5"/>
                        <span>ثبت</span>
                    </SolidLink>
                    <CatalogBtn certificateId={certificate.get('code')}/>
                </div>
            </div>
        </CardWithIcon>
    );
}