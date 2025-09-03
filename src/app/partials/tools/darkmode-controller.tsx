"use client";

import { useEffect } from "react";

interface DarkModeToggleProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) html.classList.add("dark");
        else html.classList.remove("dark");
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <label className="flex items-center space-x-2 mb-4">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="w-4 h-4"
            />
            <span className="font-medium">دارک مود</span>
        </label>
    );
}
