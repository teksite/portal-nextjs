"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { SolidButton } from "../components/buttons";
import { useSearchParams } from "next/navigation";
import Form from "next/form";
import {
	searchLicensesByTitle,
	searchItemType,
} from "@/http/controller/licenseSearchController";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { debounce } from "@/lib";

export default function SearchService() {
	const searchParams = useSearchParams();
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
	const [value, setValue] = useState("");
	const [results, setResults] = useState<searchItemType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const suggestionBoxRef = useRef<HTMLDivElement>(null);

	const searchTitleHandler = useCallback(
		debounce(async (term: string) => {
			setIsLoading(true);
			try {
				if (term.length >= 1) {
					const { exact, startsWith, containsWords, descriptionContains } =
						searchLicensesByTitle(term);
					const allResults = [
						...exact,
						...startsWith,
						...containsWords,
						...descriptionContains,
					];
					setResults(allResults);
					setShowSuggestions(allResults.length > 0);
				} else {
					setResults([]);
					setShowSuggestions(false);
				}
			} finally {
				setIsLoading(false);
			}
		}, 300),
		[]
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value;
		setValue(term);
		searchTitleHandler(term);
	};

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (
			suggestionBoxRef.current &&
			!suggestionBoxRef.current.contains(event.target as Node)
		) {
			setShowSuggestions(false);
		}
	}, []);

	const handleInputFocus = () => {
		if (results.length > 0 && value.length >= 4) {
			setShowSuggestions(true);
		}
	};

	useEffect(() => {
		const initialTitle = searchParams?.get("title") ?? "";
		setValue(initialTitle);
		if (initialTitle.length >= 4) {
			searchTitleHandler(initialTitle);
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [searchParams, handleClickOutside, searchTitleHandler]);

	return (
		<div className="x-box inner-container">
			<Form className="grid gap-6 lg:grid-cols-4" action="/servicedesk">
				<div className="relative lg:col-span-3">
					<label htmlFor="search-title" className="sr-only label-style">
						نام خدمت مورد نظر
					</label>
					<input
						id="search-title"
						title="جستجوی مجوزها"
						placeholder="جستجو..."
						name="title"
						className={`input-style ${
							showSuggestions && results.length
								? "rounded-b-none border-b-0 shadow"
								: ""
						}`}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
						value={value}
					/>
					<MagnifyingGlassIcon className="absolute end-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
					{showSuggestions && results.length > 0 && (
						<div
							className="absolute top-full inset-x-0 z-10"
							ref={suggestionBoxRef}
						>
							<ul className="x-box rounded-t-none divide-y divide-t-zinc-300 dark:divide-t-zinc-600 border-blue-600 border-t-zinc-300 dark:border-t-zinc-600 py-1 overflow-y-auto max-h-[500px]">
								{isLoading ? (
									<li className="py-3 px-4 text-center text-gray-500">
										در حال بارگذاری...
									</li>
								) : (
									results.map((suggestion) => (
										<li key={suggestion.id}>
											<Link
												href={suggestion.slug}
												className="py-3 px-4 block hover:bg-zinc-300 dark:hover:bg-zinc-600"
											>
												<span
													className="text-zinc-600 block"
													dangerouslySetInnerHTML={{
														__html:
															suggestion.highlightedTitle || suggestion.title,
													}}
												/>
												<span className="text-zinc-600 text-sm block">
													({suggestion.serviceGroupCaption})
												</span>
											</Link>
										</li>
									))
								)}
							</ul>
						</div>
					)}
				</div>
				<div className="flex gap-3 items-center justify-end order-last lg:order-2">
					<SolidButton type="submit" title="جستجو" size="md" />
				</div>
			</Form>
		</div>
	);
}
