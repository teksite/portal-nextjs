import React, { ComponentProps, useId, useRef, useState } from "react";

import { Search } from "lucide-react";
import { cva } from "class-variance-authority";
import { InputProps, PopoverAnchor } from "@/ui/atoms";
import {
	Button,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/ui/atoms";
import { mockUsStates } from "@/app/mock";
import { SearchButton } from "./search-input-button";
import { SearchPrefix } from "./search-input-prefix";

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

type SearchInputProps = Pick<InputProps, "size" | "placeholder"> & {
	type?: "noButton" | "buttonInside" | "buttonOutside";
};
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
	({ size = "default", placeholder = "جستجو", type = "noButton" }, ref) => {
		const data = mockUsStates;
		const id = useId();
		const [open, setOpen] = useState(false);
		const [query, setQuery] = useState("");
		const [highlightIndex, setHighlightIndex] = useState(0);
		const inputRef = useRef<HTMLInputElement>(null);
		const filtered = data.filter((item) =>
			item.toLowerCase().includes(query.toLowerCase())
		);

		const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
				// If dropdown is closed and user presses Down/Up, open it and highlight an item
				setOpen(true);
				setHighlightIndex(e.key === "ArrowDown" ? 0 : filtered.length - 1);
				e.preventDefault();
				return;
			}

			if (e.key === "ArrowDown" && filtered.length > 0) {
				e.preventDefault();
				setHighlightIndex((prev) => {
					// Move highlight down (wrap to top if at end)
					const nextIndex = prev < filtered.length - 1 ? prev + 1 : 0;
					return nextIndex;
				});
			} else if (e.key === "ArrowUp" && filtered.length > 0) {
				e.preventDefault();
				setHighlightIndex((prev) => {
					// Move highlight up (wrap to bottom if at start)
					const nextIndex = prev > 0 ? prev - 1 : filtered.length - 1;
					return nextIndex;
				});
			} else if (e.key === "Enter") {
				if (open) {
					e.preventDefault();
					// Close dropdown on Enter (do not select the highlighted item)
					setOpen(false);
					setHighlightIndex(-1);
				}
				// (If needed, could trigger a form submit or other action here when closed)
			} else if (e.key === "Escape") {
				if (open) {
					e.preventDefault();
					// Cancel the dropdown
					setOpen(false);
					setHighlightIndex(-1);
				}
			}
		};

		return (
			<div className="flex-col flex gap-3">
				<Input
					ref={inputRef}
					id={id}
					type="text"
					placeholder={placeholder}
					size={size}
					className={inputVariants({ size, type })}
				/>
				<Popover onOpenChange={setOpen} open={open}>
					<div className="relative flex rounded-md shadow-xs">
						{type === "noButton" && <SearchPrefix size={size} />}
						<PopoverAnchor asChild>
							<Input
								ref={inputRef}
								id={id}
								type="text"
								placeholder={placeholder}
								size={size}
								className={inputVariants({ size, type })}
								onFocus={() => setOpen(true)}
								onKeyDown={handleKeyDown}
							/>
						</PopoverAnchor>
						<PopoverContent
							className="w-80"
							onOpenAutoFocus={(e) => e.preventDefault()}
							onCloseAutoFocus={(e) => e.preventDefault()}
							onFocusOutside={(e) => e.preventDefault()}
							// onInteractOutside={(e) => e.preventDefault()}
							onPointerDownOutside={(e) => e.preventDefault()}
							// onEscapeKeyDown={(e) => e.preventDefault()}
						>
							<ul>
								{filtered.length ? (
									filtered.map((item, idx) => (
										<li
											key={item}
											className={`px-4 py-2 cursor-pointer ${
												idx === highlightIndex ? "bg-gray-100" : ""
											}`}
											onMouseEnter={() => setHighlightIndex(idx)}
											onClick={() => {
												setQuery(item);
												setOpen(false);
											}}
										>
											{item}
										</li>
									))
								) : (
									<li className="px-4 py-2 text-gray-500">No results</li>
								)}
							</ul>
						</PopoverContent>
						{type !== "noButton" && <SearchButton size={size} type={type} />}
					</div>
				</Popover>
			</div>
		);
	}
);
SearchInput.displayName = "SearchInput";
