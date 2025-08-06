'use client'
import { LicenseType } from "@/models";
import { SearchInput, SearchInputProps } from "@/ui/atoms";
import React, { useCallback, useMemo, useState } from "react";
import { filterLogic } from "./filter-logic";
import { HighlightText } from "./highlight-text";
import {useGroupData, useNormalizedData} from "./contexts";
import {getGroupServices} from "@/http/controller/servicesController";
import {LicenseIcon} from "@/ui/components/certificate/icons";

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
	const group= useGroupData(license.groupId);
	return (
		<div className="">
			<span className="">
				{query ? (
					<HighlightText
						text={license.title}
						query={query}
						highlightClassName="font-bold text-blue-700"
					/>
				) : (
					license.title
				)}
			</span>
			<div className="flex gap-1 items-center">
				<LicenseIcon name={group?.name ?? "Sayer"} className={`size-6`} />
				<span className="text-xs">
         			 {license.serviceGroupCaption ?? "بدون گروه"}
        		</span>
			</div>
		</div>
	);
}
