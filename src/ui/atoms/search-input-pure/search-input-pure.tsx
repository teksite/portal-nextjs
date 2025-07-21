import React, { ComponentProps, useId } from "react";

import { Search } from "lucide-react";
import { Input, InputProps } from "../input";
import { Button } from "../button";
import { cva } from "class-variance-authority";

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

type SearchInputPureProps = Pick<InputProps, "size" | "placeholder"> & {
	type: "noButton" | "buttonInside" | "buttonOutside";
};
export const SearchInputPure = React.forwardRef<
	HTMLInputElement,
	SearchInputPureProps
>(({ size = "default", placeholder = "جستجو", type = "noButton" }, ref) => {
	const id = useId();

	return (
		<div className="relative flex rounded-md shadow-xs">
			{type === "noButton" && <SearchPrefix size={size} />}
			<Input
				ref={ref}
				id={id}
				type="text"
				placeholder={placeholder}
				size={size}
				className={inputVariants({ size, type })}
			/>
			{type !== "noButton" && <SearchButton size={size} type={type} />}
		</div>
	);
});
SearchInputPure.displayName = "SearchInputPure";
//________________________________________
//________________________________________
const prefixVariants = cva("", {
	variants: {
		size: {
			sm: "ps-2",
			default: "ps-3",
			lg: "ps-3",
			xl: "ps-4",
		},
	},
});
const iconVariants = cva("", {
	variants: {
		size: {
			sm: "size-3.5",
			default: "size-4",
			lg: "size-4.5",
			xl: "size-5",
		},
	},
});
function SearchPrefix({ size }: { size: SearchInputPureProps["size"] }) {
	return (
		<div
			className={prefixVariants({
				size,
				className:
					"text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center peer-disabled:opacity-50",
			})}
		>
			<Search className={iconVariants({ size })} />
			<span className="sr-only">جستجو</span>
		</div>
	);
}

//________________________________________
//________________________________________
const buttonVariants = cva("peer", {
	variants: {
		type: {
			buttonInside:
				"text-muted-foreground hover:text-accent-foreground absolute inset-y-0 end-0",
			buttonOutside: "-me-px rounded-s-none shadow-none focus-visible:z-1",
		},
	},
});
type SearchButtonProps = {
	type: Exclude<SearchInputPureProps["type"], "noButton">;
	size: SearchInputPureProps["size"];
	onClick?: ComponentProps<"button">["onClick"];
};

function SearchButton({ type, size, onClick }: SearchButtonProps) {
	return (
		<Button
			variant={type === "buttonOutside" ? "outline" : "link"}
			size={size}
			// size="icon"
			className={buttonVariants({ type })}
		>
			<Search className={iconVariants({ size })} />
			<span className="sr-only">جستجو</span>
		</Button>
	);
}
