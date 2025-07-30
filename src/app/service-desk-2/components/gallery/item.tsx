import { cn } from "@/lib";
import { LicenseGroup, LicenseType } from "@/models";
import { HighlightText } from "./highlight-text";

export type ItemProps = {
	license: LicenseType;
	group: LicenseGroup;
	query?: string;
};
export function Item({ license, group, query }: ItemProps) {
	return (
		<li className="flex gap-4 border border-solid p-2 mb-3">
			<div>
				{query ? (
					<HighlightText
						text={license.title}
						query={query}
						highlightClassName="text-blue-600 font-semibold"
					/>
				) : (
					license.title
				)}
			</div>

			<div className="text-sm border ">{group.title}</div>
		</li>
	);
}
