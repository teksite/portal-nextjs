import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const inputVariants = cva(
	// base styles (no fixed h-*, px-*, py-* here)
	[
		"file:text-foreground",
		"placeholder:text-muted-foreground",
		"selection:bg-primary",
		"selection:text-primary-foreground",
		"dark:bg-input/30",
		"border-input",
		"flex",
		"w-full",
		"min-w-0",
		"rounded-md",
		"border",
		"bg-transparent",
		"shadow-xs",
		"transition-[color,box-shadow]",
		"outline-none",
		"file:inline-flex",
		"file:h-7",
		"file:border-0",
		"file:bg-transparent",
		"file:text-sm",
		"file:font-medium",
		"disabled:pointer-events-none",
		"disabled:cursor-not-allowed",
		"disabled:opacity-50",
		"focus-visible:border-ring",
		"focus-visible:ring-ring/50",
		"focus-visible:ring-[3px]",
		"aria-invalid:ring-destructive/20",
		"dark:aria-invalid:ring-destructive/40",
		"aria-invalid:border-destructive",
	].join(" "),
	{
		variants: {
			size: {
				default: "h-9 px-3 py-1 text-base md:text-sm",
				sm: "h-8 px-2.5 py-1 text-sm",
				lg: "h-10 px-4 py-2 text-base",
				xl: "h-12 px-5 py-3 text-lg",
			},
		},
		defaultVariants: {
			size: "default",
		},
	}
);

export type InputProps = Omit<React.ComponentProps<"input">, "size"> &
	VariantProps<typeof inputVariants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = "text", size, ...props }, ref) => (
		<input
			// pass the ref through
			ref={ref}
			type={type}
			data-slot="input"
			className={cn(inputVariants({ size, className }))}
			{...props}
		/>
	)
);

// give it a displayName for better React DevTools output
Input.displayName = "Input";
