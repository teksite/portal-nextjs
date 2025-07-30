import { useMemo } from "react";
import { filterLogic } from "./filter-logic";
import { Item } from "./item";
import { Group } from "./group";
import { useNormalizedData } from "./contexts";

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
					{filteredList.map((license) => (
						<Item
							license={license}
							group={groups[license.groupId]}
							query={query}
						/>
					))}
				</ul>
			)}
		</div>
	);
}

function Categorized() {
	const { groupIdList } = useNormalizedData();
	return (
		<ul>
			{groupIdList.map((id) => {
				return <Group id={id} />;
			})}
		</ul>
	);
}
