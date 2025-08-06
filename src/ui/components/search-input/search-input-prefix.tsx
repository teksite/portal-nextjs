import React from "react";

import { Search } from "lucide-react";
import { cva } from "class-variance-authority";
import { InputProps } from "@/ui/atoms";

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
export function SearchPrefix({ size }: { size: InputProps["size"] }) {
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
