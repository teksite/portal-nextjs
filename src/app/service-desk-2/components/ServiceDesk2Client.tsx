"use client";

import { useState } from "react";
import { SearchInputSelectionValue } from "@/ui/atoms";
import { LicenseType } from "@/models";
import {Hero} from "@/app/service-desk-2/components/hero";
import {Gallery} from "@/app/service-desk-2/components/gallery";
import {StickySearchBar} from "@/app/service-desk-2/components/StickySearchBar";

export function ServiceDesk2Client() {
    const [selection, setSelection] =
        useState<SearchInputSelectionValue<LicenseType>>();

    return (
        <>
            <Hero selection={selection} setSelection={setSelection} />
            <div className="inner-container">
                <StickySearchBar selection={selection} setSelection={setSelection} />

                <Gallery selection={selection} setSelection={setSelection} />
            </div>

        </>
    );
}
