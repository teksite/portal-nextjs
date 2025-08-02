import { useMemo } from "react";
import { filterLogic } from "./filter-logic";
import { Item } from "./item";
import { Group } from "./group";
import { useNormalizedData } from "./contexts";
import {LicenseList} from "@/ui/components/certificate/list";
import CollapseItem from "@/ui/components/certificate/list/items/gallery/collapse/collapse";
import {ItemText} from "@/ui/components/certificate/list/popover/item-text";

export type GalleryListSectionProps = {
	query?: string;
	className?: string;
};
export function GalleryListSection({
	className,
	query,
}: GalleryListSectionProps) {
	return (
		<div className={className}>
			{query ? <Filtered query={query} /> : <Categorized />}
		</div>
	);
}

function Filtered({ query }: { query: string }) {
	const { groups, licenses } = useNormalizedData();

	const filteredList = useMemo(
		() => filterLogic(Object.values(licenses), query),
		[licenses, query]
	);
	debugger;
	return (
		<div>
			{filteredList.length === 0 ? (
				<div>آیتمی یافت نشد </div>
			) : (
				<ul>
					<LicenseList className="grid gap-6 md:grid-cols-2"
											 data={filteredList}
											 collapsedComponent={({ id, data, onExpand }) => (
												 <div onClick={() => onExpand(id)}>
													 <CollapseItem id={id} license={data} query={query} />
												 </div>
											 )}
											 expandedComponent={ItemText}
					/>

				</ul>
			)}
		</div>
	);
}

function Categorized() {
	const { groupIdList } = useNormalizedData();
	return (
		<ul>
			{groupIdList.map((id) => (
				<Group id={id} />
			))}
		</ul>
	);
}
