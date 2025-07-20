"use client";

import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {SolidButton} from "../components/buttons";
import {useSearchParams} from "next/navigation";
import Form from "next/form";
import {searchLicensesByTitle, titleSearchItemType} from "@/http/controller/licenseSearchController";
import React, {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";

export interface searchParamsType {
    title?: string;
}

const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

export default function SearchService() {

    const searchParams = useSearchParams();
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [value, setValue] = useState("");
    const [result, setResult] = useState<titleSearchItemType[]>([]);
    const suggestionBoxRef = useRef<HTMLDivElement>(null);

    const searchTitleHandler = useCallback(
        debounce(async (term: string) => {
            if (term.length > 4) {
                const res = searchLicensesByTitle(term);
                setResult(res);
                setShowSuggestions(res.length > 0);
            } else {
                setResult([]);
                setShowSuggestions(false);
            }
        }, 300),
        []
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setValue(term);
        searchTitleHandler(term);
    };

    const clickOutsideHandler = (event: MouseEvent) => {
        if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target as Node)) {
            setShowSuggestions(false);
        }
    };
    const selectSearchInputHandler = () => {
        if (result.length) setShowSuggestions(true);
    }

    useEffect(() => {
        setValue(searchParams?.get("title") ?? "");
        document.addEventListener("mousedown", clickOutsideHandler);
        return () => document.removeEventListener("mousedown", clickOutsideHandler);
    }, [searchParams]);

    const suggestionList = result?.map((suggestion: titleSearchItemType) => (
        <li key={suggestion.id}>
            <Link href={suggestion.slug} className="py-3 block">
                <span className="text-zinc-950 font-bold block">{suggestion.title}</span>
                <span className="text-zinc-600 text-sm block">{suggestion.serviceGroupCaption}</span>
            </Link>
        </li>
    ));

    return (
        <div className="x-box inner-container">
            <Form className="grid gap-6 lg:grid-cols-4" action="/servicedesk">
                {/* search by name */}
                <div className="relative lg:col-span-3">
                    <label htmlFor="search-title" className="sr-only label-style">
                        نام خدمت مورد نظر
                    </label>
                    <input
                        onClick={selectSearchInputHandler}
                        id="search-title"
                        title="جستوی مجوزها"
                        placeholder="جستجو..."
                        name="title"
                        className={`input-style ${result.length && showSuggestions ? 'rounded-b-none border-b-0 shadow' :''}`}
                        onChange={handleInputChange}
                        value={value}
                    />
                    <MagnifyingGlassIcon
                        className="absolute end-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                    />
                    {showSuggestions && result.length && (
                        <div className="absolute top-full inset-x-0 z-10" ref={suggestionBoxRef}>
                            <ul className="x-box rounded-t-none border-blue-600 border-t-zinc-300 dark:border-t-zinc-600 py-1">
                                {suggestionList}
                            </ul>
                        </div>
                    )}
                </div>
                {/* buttons */}
                <div className="flex gap-3 items-center justify-end order-last lg:order-2">
                    <SolidButton type="submit" title="جستجو" size="md"/>
                </div>
            </Form>
        </div>
    );
}