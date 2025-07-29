import { LicensesNormalized, LicenseType } from "@/models";
import {
	SearchInput,
	SearchInputProps,
	SearchInputSelectionValue,
} from "@/ui/atoms";
import React, { useCallback, useMemo, useState } from "react";
import { filterLogic } from "./filter-logic";
import { HighlightText } from "./highlight-text";

export type SearchSectionProps = {
	className?: string;
	licenseList: LicenseType[];
	onSelectChange: SearchInputProps<LicenseType>["onSelectChange"];
};
export function SearchSection({
	licenseList,
	className,
	onSelectChange,
}: SearchSectionProps) {
	const [query, setQuery] = useState<string>();

	const filteredData = useMemo(
		() => filterLogic(licenseList, query),
		[licenseList, query]
	);
	const getItemLabel = useCallback((item: LicenseType) => item.title, []);
	const renderItem = useCallback(
		(service: LicenseType, query?: string) => (
			<ListItem service={service} query={query} />
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
	service,
	query,
}: {
	service: LicenseType;
	query?: string;
}) {
	return (
		<div className="flex">
			<div className="flex-1">
				{query ? (
					<HighlightText
						text={service.title}
						query={query}
						highlightClassName="font-bold text-blue-700"
					/>
				) : (
					service.title
				)}
			</div>
			<div>{service.groupId}</div>
		</div>
	);
}
