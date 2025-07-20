import React, { JSX, useId, useRef, useState } from "react";

import { PopoverAnchor } from "@/ui/atoms";
import { Input, Popover, PopoverContent } from "@/ui/atoms";

const EMPTY_ARRAY: unknown[] = [];

type Item = string;

export type SearchInput2Props<T> = {
	data: T[];
	getItemLabel?: (item: T) => string;
	getItemKey?: (item: T) => string;
	renderItem?: (item: T, highlighted?: boolean) => React.ReactNode;
	onFilterChange?: (newFilter?: string) => void;
	onSelectChange?: (option: { filter?: string; item?: T }) => void;
};

export const SearchInput2 = <T,>({
	data,
	getItemLabel = (item: T) => (!item ? "" : item.toString()),
	getItemKey = (item: T) => (!item ? "" : item.toString()),
	renderItem = (item: T) => (!item ? "" : item.toString()),
	onFilterChange,
	onSelectChange,
}: SearchInput2Props<T>): JSX.Element => {
	const id = useId();
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [highlightIndex, setHighlightIndex] = useState(0);
	const [selectedItem, setSelectedItem] = useState<T>();
	const inputRef = useRef<HTMLInputElement>(null);

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
		onSelectChange && onSelectChange({ filter: newQuery, item });
		setOpen(false);
		setHighlightIndex(-1);
	};

	return (
		<div className="flex-col flex gap-3">
			<Popover
				onOpenChange={(newOpen) => {
					setOpen(newOpen);
				}}
				open={open}
			>
				<div className="relative flex rounded-md shadow-xs">
					<PopoverAnchor asChild>
						<Input
							ref={inputRef}
							id={id}
							type="text"
							value={query}
							onFocus={() => setOpen(true)}
							onKeyDown={handleKeyDown}
							onChange={({ target: { value } }) => {
								setQuery(value);
								setHighlightIndex(-1);
								onFilterChange && onFilterChange(value);
								setOpen(true);
							}}
						/>
					</PopoverAnchor>
					<PopoverContent
						// className="w-80 max-h-96 overflow-y-auto"
						className="w-80 max-h-[calc(50vh-60px)] overflow-y-auto"
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
										className={`px-4 py-2 cursor-pointer ${
											idx === highlightIndex ? "bg-gray-100" : ""
										}`}
										onMouseEnter={() => setHighlightIndex(idx)}
										onClick={() => {
											handleListItemSelect(idx);
										}}
									>
										{renderItem(item, idx === highlightIndex)}
									</li>
								))
							) : (
								<li className="px-4 py-2 text-gray-500">No results</li>
							)}
						</ul>
					</PopoverContent>
				</div>
			</Popover>
		</div>
	);
};

type SearchInputListItemProps = React.ComponentProps<"div"> & {
	asChild?: boolean;
};

SearchInput2.displayName = "SearchInput2";
