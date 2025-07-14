'use client'

import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === "Enter") {
            e.preventDefault();
            router.push(`/servicedesk?title=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="relative w-1/2 mx-auto">
            <label htmlFor="search_header" className="absolute start-1 top-1/2 -translate-y-1/2">
                <MagnifyingGlassIcon className="size-6 fill-zinc-600" />
            </label>
            <input
                id="search_header"
                title="جستجو"
                placeholder="جستجو در مجوزها"
                className="border border-slate-200 rounded-2xl ps-8 pe-3 p-2 bg-zinc-200 block w-full focus:bg-white outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}