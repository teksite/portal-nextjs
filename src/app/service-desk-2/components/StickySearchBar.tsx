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

        // پاکسازی
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {showSticky &&
                <div className="sticky top-14 z-50 bg-white shadow-md">
                    <div className="inner-container py-3">
                        <GallerySearchSection onSelectChange={setSelection}/>
                    </div>
                </div>
            }
        </>

    );
}
