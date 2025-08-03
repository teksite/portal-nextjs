import { LicenseGroup, LicenseType } from "@/models";
import { HighlightText } from "./highlight-text";
import CollapseItem from "@/app/service-desk-2/components/gallery/collapse";

export type ItemProps = {
	license: LicenseType;
	group: LicenseGroup;
	query?: string;
};
export function Item({ license, group, query }: ItemProps) {
	return (
		<li className="">
				{query ? (
						<CollapseItem id={license.id} license={license} />

				) : (
					<CollapseItem id={license.id} license={license} title={license.title} />
				)}
		</li>
	);
}
