import { InputProps } from "@/ui/atoms";

export type SearchInputProps = Pick<InputProps, "size" | "placeholder"> & {
	type?: "noButton" | "buttonInside" | "buttonOutside";
};
