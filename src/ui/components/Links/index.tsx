import Link from "next/link";
import {ReactNode} from "react";

interface ButtonType {
    href: string;
    title: string | ReactNode;
    color?: "blue" | "green" | "gray" | "red";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
}

const commonStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 ease-in-out focus:outline-none select-none";

const colorStyles = {
    blue: {
        solid: "border border-blue-800 bg-blue-800 hover:bg-blue-900 text-zinc-50 ",
        outline: "border border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-blue-300",
        disabled: "bg-blue-300 text-blue-100 cursor-not-allowed",
    },
    green: {
        solid: "border border-green-600 bg-green-600 hover:bg-green-900 text-zinc-50 ",
        outline: "border border-green-600 text-green-600 hover:bg-green-900 hover:text-green-300",
        disabled: "bg-green-300 text-green-100 cursor-not-allowed",
    },
    red: {
        solid: "border border-red-600 bg-red-600 hover:bg-red-900 text-zinc-50 ",
        outline: "border border-red-600 text-red-600 hover:bg-red-900 hover:text-red-300",
        disabled: "bg-red-300 text-red-100 cursor-not-allowed",
    },
    gray: {
        solid: "border border-gray-600 bg-gray-600 hover:bg-gray-900 text-zinc-50 ",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-900 hover:text-gray-300",
        disabled: "bg-gray-300 text-blue-100 cursor-not-allowed",
    },
};

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-1 text-base",
    lg: "px-4 py-2 text-lg",
};

export function SolidLink({href, title, color = "blue", size = "md", className, disabled = false,...rest}: ButtonType) {
    const styles = disabled
        ? `${commonStyles} ${sizeStyles[size]} ${colorStyles[color].disabled} ${className}`
        : `${commonStyles} ${sizeStyles[size]} ${colorStyles[color].solid} ${className}`;

    return (
        <Link href={disabled ? "#" : href} className={styles} aria-disabled={disabled} {...rest}>
            {title}
        </Link>
    );
}

export function OutlineLink({href, title, color = "blue", size = "md",className, disabled = false,...rest}:
                              ButtonType) {
    const styles = disabled
        ? `${commonStyles} ${sizeStyles[size]} ${colorStyles[color].disabled} ${className}`
        : `${commonStyles} ${sizeStyles[size]} ${colorStyles[color].outline} ${className}`;

    return (
        <Link href={disabled ? "#" : href} className={styles} aria-disabled={disabled} {...rest}>
            {title}
        </Link>
    );
}