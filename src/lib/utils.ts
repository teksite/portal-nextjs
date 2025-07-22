import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function arrayToObjectByKey<T extends Record<string, any>>(
	array: T[],
	key: string
): Record<string, T> {
	return array.reduce((acc, item) => {
		acc[item[key]] = item;
		return acc;
	}, {} as Record<string, T>);
}
