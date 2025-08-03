'use client'
import { LicenseType } from "@/models";
import { SearchInput, SearchInputProps } from "@/ui/atoms";
import React, { useCallback, useMemo, useState } from "react";
import { filterLogic } from "./filter-logic";
import { HighlightText } from "./highlight-text";
import { useNormalizedData } from "./contexts";

export type GallerySearchSectionProps = {
	className?: string;
	onSelectChange?: SearchInputProps<LicenseType>["onSelectChange"];
};
export function GallerySearchSection({
	className,
	onSelectChange,
}: GallerySearchSectionProps) {
	const { licenses } = useNormalizedData();
	const [query, setQuery] = useState<string>();

	const filteredData = useMemo(
		() => filterLogic(Object.values(licenses), query),
		[licenses, query]
	);
	const getItemLabel = useCallback((item: LicenseType) => item.title, []);
	const renderItem = useCallback(
		(license: LicenseType, query?: string) => (
			<ListItem license={license} query={query} />
		),
		[]
	);

	return (
		<div className={className}>
			<SearchInput
				size={"lg"}
				type={"buttonInside"}
				data={filteredData}
				onQueryChange={setQuery}
				getItemLabel={getItemLabel}
				renderItem={renderItem}
				onSelectChange={onSelectChange}
			/>
		</div>
	);
}

function ListItem({
	license,
	query,
}: {
	license: LicenseType;
	query?: string;
}) {
	return (
		<div className="flex">
			<div className="flex-1">
				{query ? (
					<HighlightText
						text={license.title}
						query={query}
						highlightClassName="font-bold text-blue-700"
					/>
				) : (
					license.title
				)}
			</div>
			<div>{license.groupId}</div>
		</div>
	);
}
