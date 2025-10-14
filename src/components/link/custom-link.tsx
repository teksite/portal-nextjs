import Link from "next/link";
import {HTMLAttributes} from "react";

type Variant = "solid" | "outline";
type Color = "blue" | "red" | "green" | "gray" | "zinc";
type Size = "sm" | "md" | "lg" | "xl";

type LinkProps = {
    href?: string;
    color?: Color;
    size?: Size;
    variant?: Variant;
} & HTMLAttributes<HTMLAnchorElement>;

export function CustomLink({
                               href = "#",
                               color = "blue",
                               size = "md",
                               variant = "solid",
                               children,
                               className,
                               ...props
                           }: LinkProps) {

    const colorClasses: Record<Color, Record<Variant, string>> = {
        blue: {
            solid: "bg-blue-600 text-white hover:bg-blue-700",
            outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        },
        red: {
            solid: "bg-red-600 text-white hover:bg-red-700",
            outline: "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        },
        green: {
            solid: "bg-green-600 text-white hover:bg-green-700",
            outline: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
        },
        gray: {
            solid: "bg-gray-600 text-white hover:bg-gray-700",
            outline: "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
        },
        zinc: {
            solid: "bg-zinc-800 text-white hover:bg-zinc-900",
            outline: "border border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white"
        }
    };

    const sizeClasses: Record<Size, string> = {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-1.5",
        lg: "text-base px-4 py-2",
        xl: "text-lg px-5 py-2.5"
    };
    console.log(className)
    return (
        <Link href={href} className={`rounded-lg font-semibold transition-all
                     ${colorClasses[color][variant]} 
                     ${sizeClasses[size]} 
                     ${className}`}
              {...props} >
            {children}
        </Link>
    );
}
