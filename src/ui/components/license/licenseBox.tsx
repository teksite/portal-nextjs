import CardWithIcon from "@/ui/components/cardWithIcon";
import { CatalogBtn } from "@/ui/components/license/catalogBtn";
import { LicenseType } from "@/models/licenseModel";
import { RegisterBtn } from "@/ui/components/license/registerBtn";
import { ReactElement } from "react";

interface LicenseBoxProps {
	license: LicenseType;
}

export default function LicenseBox({ license }: LicenseBoxProps): ReactElement {
	const image: string = "/next.svg";
	const { title = "بدون عنوان", description } = license;
	return (
		<CardWithIcon title={title} image={image} className="h-full relative">
			<div className="space-y-6 flex flex-col justify-between h-full relative">
				{description && (
					<p className="text-center text-sm px-3">{description}</p>
				)}
				<div className="h-fit flex flex-col sm:flex-row items-center justify-center divide-x divide-zinc-300 border border-zinc-300 w-full  mt-auto mb-0 justify-self-end">
					<RegisterBtn />
					<CatalogBtn license={license} />
				</div>
			</div>
		</CardWithIcon>
	);
}
