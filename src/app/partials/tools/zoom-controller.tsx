"use client";

import { useEffect } from "react";

interface ZoomControlProps {
    zoom: number;
    setZoom: (value: number) => void;
}

export default function ZoomControl({ zoom, setZoom }: ZoomControlProps) {
    useEffect(() => {
        document.documentElement.style.zoom = `${zoom}%`;
        localStorage.setItem("zoom", zoom.toString());
    }, [zoom]);

    return (
        <div className="mb-4">
            <label className="block font-semibold mb-1">بزرگ‌نمایی: {zoom}%</label>
            <input
                type="range"
                min={50}
                max={150}
                step={5}
                value={zoom}
                onChange={(e) => setZoom(parseInt(e.target.value))}
                className="w-full"
            />
        </div>
    );
}
