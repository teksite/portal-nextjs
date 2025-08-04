"use client";

import {GallerySearchSection} from "@/app/service-desk-2/components/gallery/gallery-search-section";
import {SearchInputSelectionValue} from "@/ui/atoms";
import {LicenseType} from "@/models";
import {useEffect, useState} from "react";

export function StickySearchBar({
                                    selection,
                                    setSelection,
                                }: {
    selection: SearchInputSelectionValue<LicenseType> | undefined;
    setSelection: (value: SearchInputSelectionValue<LicenseType> | undefined) => void;
}) {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`
                sticky top-14 z-50 bg-white shadow-md transition-all duration-500 
                ${showSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
        >
            <div className="inner-container py-3">
                <GallerySearchSection onSelectChange={setSelection} />
            </div>
        </div>
    );
}
