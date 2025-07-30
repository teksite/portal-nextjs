"use client";

import { LicensesNormalized, LicenseType } from "@/models";
import { SearchInputSelectionValue } from "@/ui/atoms";
import { useState } from "react";
import { NormalizedDataProvider } from "./contexts";
import { GallerySearchSection } from "./gallery-search-section";
import { GalleryListSection } from "./gallery-list-section";

export type GalleryProps = {
	className?: string;
	// data: LicensesNormalized;
};
export function Gallery({
	className,
}: // data
GalleryProps) {
	const [selection, setSelection] =
		useState<SearchInputSelectionValue<LicenseType>>();

	return (
		// <NormalizedDataProvider normalizedData={data}>
		<div className={className}>
			<GallerySearchSection
				onSelectChange={(selection) => {
					setSelection(selection);
				}}
			/>
			<GalleryListSection query={selection?.selectedQuery} />
		</div>
		// </NormalizedDataProvider>
	);
}
