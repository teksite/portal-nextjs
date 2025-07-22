import Link from "next/link";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";

import CardWithIcon from "@/ui/components/cardWithIcon";
import { LicenseType } from "@/models";
import { CatalogBtn } from "../license/catalogBtn";

interface CertificateBoxProps {
	certificate: LicenseType;
}

export default function CertificateBox({ certificate }: CertificateBoxProps) {
	// // const title: string = certificate. .get("title", "بدون عنوان") ?? "بدون عنوان";
	const image: string = "/no-image.jpg";
	// const description = certificate.get("description");
	const {
		id,
		slug,
		title = "بدون عنوان",
		code,
		groupId,
		serviceGroupCaption,
		avgTime,
		cost,
		description,
		electronics,
		needPresence,
		serviceTime,
	} = certificate;
	return (
		<CardWithIcon title={title} image={image} className="h-full relative">
			<div className="space-y-6 flex flex-col justify-between h-full relative">
				{description && (
					<p className="text-center text-sm px-3">{description}</p>
				)}
				<div className="h-fit flex flex-col sm:flex-row items-center justify-center divide-x divide-zinc-300 border border-zinc-300 w-full  mt-auto mb-0 justify-self-end">
					<Link
						//TODO change the url of SSO
						href="https://ssoinfo.farhang.gov.ir/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DPORTALErSHaD232%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%253A%252F%252Fmy.farhang.gov.ir%252Fapi%252Fopenid%252Fcallback%253Fprovider%253DPortalBarsaSSO%26state%3D41119AD9_https%25253A%25252F%25252Fmy.farhang.gov.ir%25252F%26nonce%3D41119AD9%26response_mode%3Dform_post%26culture%3Dfa-IR#/servicedesk"
						className="w-full flex items-center justify-center gap-1 text-green-900 p-3 text-center hover:bg-zinc-300"
					>
						<InboxArrowDownIcon className="fill-current size-5" />
						<span>ثبت</span>
					</Link>
					<CatalogBtn license={certificate} />
				</div>
			</div>
		</CardWithIcon>
	);
}

/*



import CardWithIcon from "@/ui/components/cardWithIcon";
import {SolidLink} from "@/ui/components/Links";
import ServiceModel from "@/models/serviceModel";
import CatalogBtn from "@/ui/components/certificates/catalogBtn";
import {SparklesIcon, InboxArrowDownIcon} from "@heroicons/react/16/solid";

interface CertificateBoxProps {
    certificate: ServiceModel;
}

export default function CertificateBox({certificate}: CertificateBoxProps) {
    const title: string = certificate.get("title", "بدون عنوان") ?? "بدون عنوان";
    const image: string =  "/no-image.jpg";
    const description = certificate.get("description");

    return (
        <CardWithIcon title={title} image={image} className="h-full relative overflow-hidden">
            <span className="bg-yellow-600 shadow-md py-0.5 text-center w-24 h-24 rounded-full px-3 absolute -end-12 -top-12 text-xs font-bold text-zinc-50 flex items-center justify-center ">
                <SparklesIcon className="fill-yellow-50  mt-10 me-10 size-6 mx-auto "/>
            </span>

            <div className="space-y-6 flex flex-col justify-between h-full relative">
                {description && (
                    <p className="text-center text-sm">
                        {description}
                    </p>
                )}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full h-full mt-auto mb-0 justify-self-end">
                    <SolidLink
                        //TODO change the url of SSO
                        href="https://ssoinfo.farhang.gov.ir/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DPORTALErSHaD232%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%253A%252F%252Fmy.farhang.gov.ir%252Fapi%252Fopenid%252Fcallback%253Fprovider%253DPortalBarsaSSO%26state%3D41119AD9_https%25253A%25252F%25252Fmy.farhang.gov.ir%25252F%26nonce%3D41119AD9%26response_mode%3Dform_post%26culture%3Dfa-IR#/servicedesk"
                        color="green" className="w-full flex gap-3">
                        <InboxArrowDownIcon className="fill-current size-5"/>
                        <span>ثبت</span>
                    </SolidLink>
                    <CatalogBtn certificate={JSON.stringify(certificate)}/>
                </div>
            </div>
        </CardWithIcon>
    );
}

 */
