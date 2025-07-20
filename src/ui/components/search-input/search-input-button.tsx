import React, { ComponentProps } from "react";

import { Search } from "lucide-react";
import { cva } from "class-variance-authority";
import { Button } from "@/ui/atoms";
import { SearchInputProps } from "./shared";

const buttonVariants = cva("peer", {
	variants: {
		type: {
			buttonInside:
				"text-muted-foreground hover:text-accent-foreground absolute inset-y-0 end-0",
			buttonOutside: "-me-px rounded-s-none shadow-none focus-visible:z-1",
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

type SearchButtonProps = {
	type: Exclude<SearchInputProps["type"], "noButton">;
	size: SearchInputProps["size"];
	onClick?: ComponentProps<"button">["onClick"];
};

export function SearchButton({ type, size, onClick }: SearchButtonProps) {
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
