"use client";

import { LicensesNormalized, LicenseType } from "@/models";
import { SearchInput, SearchInputSelectionValue } from "@/ui/atoms";
import { useCallback, useMemo, useState } from "react";
import { filterLogic } from "./filter-logic";
import { HighlightText } from "./highlight-text";
import { SearchSection } from "./search-section";

export type GalleryProps = {
	data: LicensesNormalized;
};
export function Gallery({
	data: { groupIdList, groups, licenses },
}: GalleryProps) {
	const licenseList = useMemo(() => {
		return Object.values(licenses);
	}, [licenses]);

	const [selection, setSelection] =
		useState<SearchInputSelectionValue<LicenseType>>();

	return (
		<div>
			<div>
				<SearchSection
					licenseList={licenseList}
					onSelectChange={(selection) => {
						setSelection(selection);
					}}
				/>
			</div>
		</div>
	);
}
