"use client";

import { LicenseType } from "@/models";
import { SearchInputSelectionValue } from "@/ui/atoms";
import { useState } from "react";
import { GallerySearchSection } from "./gallery-search-section";
import { GalleryListSection } from "./gallery-list-section";

export type GalleryProps = {
	className?: string;
};
export function Gallery({ className }: GalleryProps) {
	const [selection, setSelection] =
		useState<SearchInputSelectionValue<LicenseType>>();

	return (
		<div className={className}>
			<div className="">
				<GallerySearchSection
					onSelectChange={setSelection}
					// onSelectChange={(selection) => {
					// 	setSelection(selection);
					// }}
				/>
			</div>
			<GalleryListSection query={selection?.selectedQuery} />
		</div>
	);
}
