import Link from "next/link";
import {InboxArrowDownIcon} from "@heroicons/react/16/solid";

export function RegisterBtn() {
	return (
		<Link
			//TODO change the url of SSO
			href="https://ssoinfo.farhang.gov.ir/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DPORTALErSHaD232%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%253A%252F%252Fmy.farhang.gov.ir%252Fapi%252Fopenid%252Fcallback%253Fprovider%253DPortalBarsaSSO%26state%3D41119AD9_https%25253A%25252F%25252Fmy.farhang.gov.ir%25252F%26nonce%3D41119AD9%26response_mode%3Dform_post%26culture%3Dfa-IR#/servicedesk"
			className="w-full flex items-center justify-center gap-1 text-green-900 dark:text-green-600 p-3 text-center hover:bg-zinc-300"
		>
			<InboxArrowDownIcon className="fill-current size-5"/>
			<span>ثبت</span>
		</Link>
	);
}