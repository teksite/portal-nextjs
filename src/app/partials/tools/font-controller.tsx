"use client";

import { useEffect } from "react";

interface FontSizeControlProps {
    fontSize: number;
    setFontSize: (size: number) => void;
}

export default function FontSizeControl({ fontSize, setFontSize }: FontSizeControlProps) {
    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
        localStorage.setItem("fontSize", fontSize.toString());
    }, [fontSize]);

    return (
        <div className="mb-4">
            <label className="block font-semibold mb-1">اندازه فونت: {fontSize}px</label>
            <input
                type="range"
                min={12}
                max={36}
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full"
            />
        </div>
    );
}
