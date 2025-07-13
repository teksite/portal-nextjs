'use client'

import React, {ReactNode} from "react";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    color?: "blue" | "green" | "gray" | "red";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
    children?: ReactNode;
}
const commonStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 ease-in-out focus:outline-none select-none cursor-pointer";

const colorButtonStyles = {
    blue: {
        text: "text-blue-800 hover:bg-blue-300 dark:text-blue-100",
        solid: "border border-blue-800 bg-blue-800 hover:bg-blue-900 text-zinc-50 dark:border-blue-300 dark:bg-blue-300 dark:text-blue-800 dark:hover:text-zinc-50",
        outline: "border border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-zinc-50 dark:text-blue-50 dark:border-blue-50",
        disabled: "bg-blue-300 text-blue-100 cursor-not-allowed",
    },
    green: {
        text: "text-green-800 hover:bg-green-300 dark:text-green-100",
        solid: "border border-green-800 bg-green-800 hover:bg-green-900 text-zinc-50 dark:border-green-300 dark:bg-green-300 dark:text-green-800 dark:hover:text-zinc-50",
        outline: "border border-green-800 text-green-800 hover:bg-green-900 hover:text-zinc-50 dark:text-green-50 dark:border-green-50",
        disabled: "bg-green-300 text-green-100 cursor-not-allowed",
    },
    red: {
        text: "text-red-800 hover:bg-red-300 dark:text-red-100",
        solid: "border border-red-800 bg-red-800 hover:bg-red-900 text-zinc-50 dark:border-red-300 dark:bg-red-300 dark:text-red-800 dark:hover:text-zinc-50",
        outline: "border border-red-800 text-red-800 hover:bg-red-900 hover:text-zinc-50 dark:text-red-50 dark:border-red-50",
        disabled: "bg-red-300 text-red-100 cursor-not-allowed",
    },
    gray: {
        text: "text-gray-600 hover:bg-gray-300",
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

export function SolidButton({title, color = "blue", size = "md", className, disabled = false, children, ...rest}: ButtonType) {
    const styles = disabled
        ? `${commonStyles} ${sizeStyles[size]} ${colorButtonStyles[color].solid} ${className}`
        : `${commonStyles} ${sizeStyles[size]} ${colorButtonStyles[color].solid} ${className}`;

    return (
        <button className={styles} aria-disabled={disabled} {...rest}>
            {children ?? title}
        </button>
    );
}

export function OutlineButton({title, color = "blue", size = "md", className, disabled = false, children, ...rest}: ButtonType) {
    const styles = disabled
        ? `${commonStyles} ${sizeStyles[size]} ${colorButtonStyles[color]?.disabled} ${className}`
        : `${commonStyles} ${sizeStyles[size]} ${colorButtonStyles[color]?.outline} ${className}`;

    return (
        <button className={styles} aria-disabled={disabled} {...rest}>
            {children ?? title}
        </button>
    );
}

export function TextButton({title, color = "blue", size = "md", className, disabled = false, children, ...rest}: ButtonType) {
    const styles = disabled
        ? `${commonStyles} ${sizeStyles[size]} ${colorButtonStyles[color]?.disabled} ${className}`
        : `${commonStyles} ${sizeStyles[size]} ${colorButtonStyles[color]?.text} ${className}`;

    return (
        <button className={styles} aria-disabled={disabled} {...rest}>
            {children ?? title}
        </button>
    );
}