import React, { useId, useRef, useState } from "react";

import { cva } from "class-variance-authority";
import {
	Input,
	InputProps,
	Popover,
	PopoverContent,
	PopoverAnchor,
} from "@/ui/atoms";
import { SearchButton } from "./search-input-button";
import { SearchPrefix } from "./search-input-prefix";
import { SearchInputButtonTypes } from "./shared";
import { HighlightText } from "./highlight-text";

const inputVariants = cva("peer", {
	variants: {
		type: {
			noButton: "",
			buttonInside: "",
			buttonOutside: "-me-px rounded-e-none shadow-none focus-visible:z-1",
		},
		size: {
			default: "",
			sm: "",
			lg: "",
			xl: "",
		},
	},
	compoundVariants: [
		// noButton
		{ type: "noButton", size: "default", class: "ps-9" },
		{ type: "noButton", size: "sm", class: "ps-7" },
		{ type: "noButton", size: "lg", class: "ps-9" },
		{ type: "noButton", size: "xl", class: "ps-11" },
	],
});

const EMPTY_ARRAY: unknown[] = [];
export type SearchInputSelectionValue<T> = {
	selectedQuery?: string;
	selectedItem?: T;
};
export type SearchInputProps<T> = Pick<InputProps, "size" | "placeholder"> & {
	type?: SearchInputButtonTypes;
	data: T[];
	getItemLabel?: (item: T) => string;
	getItemKey?: (item: T) => string;
	renderItem?: (item: T, query?: string) => React.ReactNode;
	onQueryChange?: (newFilter?: string) => void;
	onSelectChange?: (selection: SearchInputSelectionValue<T>) => void;
};
export const SearchInput = <T,>({
	size = "default",
	placeholder = "جستجو",
	type = "noButton",
	data = EMPTY_ARRAY as T[],
	getItemLabel = (item: T) => (!item ? "" : item.toString()),
	getItemKey = (item: T) => (!item ? "" : item.toString()),
	renderItem = (item: T, query?: string) => (!item ? "" : item.toString()),
	onQueryChange,
	onSelectChange,
}: SearchInputProps<T>): React.ReactElement => {
	const id = useId();
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [highlightIndex, setHighlightIndex] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
			// If dropdown is closed and user presses Down/Up, open it and highlight an item
			setOpen(true);
			setHighlightIndex(e.key === "ArrowDown" ? 0 : data.length - 1);
			e.preventDefault();
			return;
		}

		if (e.key === "ArrowDown" && data.length > 0) {
			e.preventDefault();
			setHighlightIndex((prev) => {
				// wrap to top if at end
				const nextIndex = prev < data.length - 1 ? prev + 1 : 0;
				return nextIndex;
			});
		} else if (e.key === "ArrowUp" && data.length > 0) {
			e.preventDefault();
			setHighlightIndex((prev) => {
				// wrap to bottom if at start
				const nextIndex = prev > 0 ? prev - 1 : data.length - 1;
				return nextIndex;
			});
		} else if (e.key === "Enter") {
			e.preventDefault();
			handleListItemSelect(highlightIndex);
		}
	};

	const handleListItemSelect = (index: number) => {
		const item = index >= 0 ? data[index] : undefined;
		const newQuery = item ? getItemLabel(item) : query;
		setQuery(newQuery);
		onSelectChange &&
			onSelectChange({ selectedQuery: newQuery, selectedItem: item });
		setOpen(false);
		setHighlightIndex(-1);
	};

	return (
		<Popover
			onOpenChange={(newOpen) => {
				setOpen(newOpen);
			}}
			open={open}
		>
			<PopoverAnchor asChild>
				<div ref={ref} className="relative flex rounded-md shadow-xs">
					{type === "noButton" && <SearchPrefix size={size} />}
					<Input
						id={id}
						type="text"
						placeholder={placeholder}
						size={size}
						className={inputVariants({ size, type })}
						value={query}
						onFocus={() => setOpen(true)}
						onKeyDown={handleKeyDown}
						onChange={({ target: { value } }) => {
							setQuery(value);
							setHighlightIndex(-1);
							onQueryChange && onQueryChange(value);
							setOpen(true);
						}}
					/>
					{type !== "noButton" && (
						<SearchButton
							size={size}
							type={type}
							onClick={() => handleListItemSelect(highlightIndex)}
						/>
					)}
				</div>
			</PopoverAnchor>
			<PopoverContent
				style={{ width: ref.current?.getBoundingClientRect().width || 500 }}
				// className="w-80 max-h-96 overflow-y-auto"
				className="w-full max-h-[calc(50vh-60px)] overflow-y-auto"
				onOpenAutoFocus={(e) => e.preventDefault()}
				onCloseAutoFocus={(e) => e.preventDefault()}
				onFocusOutside={(e) => e.preventDefault()}
				// onInteractOutside={(e) => e.preventDefault()}
				// onPointerDownOutside={(e) => e.preventDefault()}
				// onEscapeKeyDown={(e) => e.preventDefault()}
			>
				<ul>
					{data.length ? (
						data.map((item, idx) => (
							<li
								key={getItemKey(item)}
								data-index={idx}
								className={`px-4 py-2 cursor-pointer ${
									idx === highlightIndex ? "bg-gray-100" : ""
								}`}
								onMouseEnter={() => setHighlightIndex(idx)}
								onClick={() => {
									handleListItemSelect(idx);
								}}
							>
								{renderItem(item, query)}
							</li>
						))
					) : (
						<li className="px-4 py-2 text-gray-500">No results</li>
					)}
				</ul>
			</PopoverContent>
		</Popover>
	);
};

SearchInput.displayName = "SearchInput";
SearchInput.Highlight = HighlightText;
