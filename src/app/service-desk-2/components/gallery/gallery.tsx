"use client";

import {LicenseType} from "@/models";
import {SearchInputSelectionValue} from "@/ui/atoms";
import {useState} from "react";
import {GallerySearchSection} from "./gallery-search-section";
import {GalleryListSection} from "./gallery-list-section";

export type GalleryProps = {
    className?: string;
};

export function Gallery({
                            className,
                            selection,
                            setSelection,
                        }: {
    className?: string;
    selection: SearchInputSelectionValue<LicenseType> | undefined;
    setSelection: (value: SearchInputSelectionValue<LicenseType>) => void;
}) {


    return (
        <div className={className}>
            <GalleryListSection query={selection?.selectedQuery}/>
        </div>
    );
}
