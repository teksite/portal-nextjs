import { LicenseGroup, LicenseType } from "@/models";
import { HighlightText } from "./highlight-text";
import CollapseItem from "@/ui/components/certificate/list/items/gallery/collapse/collapse";

export type ItemProps = {
	license: LicenseType;
	group: LicenseGroup;
	query?: string;
};
export function Item({ license, group, query }: ItemProps) {
	return (
		<li className="">
				{query ? (
						<CollapseItem id={license.id} license={license} group={group} title={<HighlightText
							text={license.title}
							query={query}
							highlightClassName="text-blue-600 font-semibold"
						/>} />

				) : (
					<CollapseItem id={license.id} license={license} group={group} title={license.title} />
				)}
		</li>
	);
}
