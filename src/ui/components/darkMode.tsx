"use client";

import {useTheme} from "@/ui/components/themeProvider";
import {MagnifyingGlassIcon, MoonIcon, SunIcon} from "@heroicons/react/16/solid";
import React from "react";

export default function DarkMode() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-zinc-300">
            {
                theme === "light" ?
                    <MoonIcon className="size-5 fill-zinc-300" />:
                    <SunIcon className="size-5 fill-zinc-300" />
            }
        </button>
    );
}