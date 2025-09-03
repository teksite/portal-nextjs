"use client";

import { useEffect } from "react";

interface GrayscaleToggleProps {
    grayscale: boolean;
    setGrayscale: (value: boolean) => void;
}

export default function GrayscaleToggle({ grayscale, setGrayscale }: GrayscaleToggleProps) {
    useEffect(() => {
        localStorage.setItem("grayscale", grayscale.toString());
    }, [grayscale]);

    return (
        <label className="flex items-center space-x-2 mb-4">
            <input
                type="checkbox"
                checked={grayscale}
                onChange={(e) => setGrayscale(e.target.checked)}
                className="w-4 h-4"
            />
            <span className="font-medium">سیاه و سفید کردن صفحات</span>
        </label>
    );
}
