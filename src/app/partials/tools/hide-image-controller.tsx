"use client";

import { useEffect } from "react";

interface HideImagesToggleProps {
    hideImages: boolean;
    setHideImages: (value: boolean) => void;
}

export default function HideImagesToggle({ hideImages, setHideImages }: HideImagesToggleProps) {
    useEffect(() => {
        localStorage.setItem("hideImages", hideImages.toString());
    }, [hideImages]);

    return (
        <label className="flex items-center space-x-2 mb-4">
            <input
                type="checkbox"
                checked={hideImages}
                onChange={(e) => setHideImages(e.target.checked)}
                className="w-4 h-4"
            />
            <span className="font-medium">حذف عکس و آیکون و SVG</span>
        </label>
    );
}
