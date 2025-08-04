"use client";

import { useState } from "react";
import { Hero } from "./hero";
import { SearchInputSelectionValue } from "@/ui/atoms";
import { LicenseType } from "@/models";
import {Gallery} from "@/app/service-desk-2/components/gallery";

export function ServiceDesk2Client() {
    const [selection, setSelection] =
        useState<SearchInputSelectionValue<LicenseType>>();

    return (
        <>
            <Hero selection={selection} setSelection={setSelection} />
            <div className="inner-container">
                <Gallery selection={selection} setSelection={setSelection} />
            </div>
        </>
    );
}
