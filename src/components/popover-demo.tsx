import {
	Button,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/ui/atoms";
import { useRef, useState } from "react";

export function PopoverDemo() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div>
			<Input />
			<Button>open</Button>
			<Popover onOpenChange={setOpen} open={open}>
				<PopoverTrigger asChild>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-80"
					onOpenAutoFocus={(e) => e.preventDefault()}
					onCloseAutoFocus={(e) => e.preventDefault()}
					onFocusOutside={(e) => e.preventDefault()}
					onInteractOutside={(e) => e.preventDefault()}
					onPointerDownOutside={(e) => e.preventDefault()}
					// onEscapeKeyDown={(e) => e.preventDefault()}
				>
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="leading-none font-medium">Dimensions</h4>
							<p className="text-muted-foreground text-sm">
								Set the dimensions for the layer.
							</p>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
