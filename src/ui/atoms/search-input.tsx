import { useId } from "react";

import { Search, Filter, SearchIcon } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";

export const SearchInput = () => {
	const id = useId();

	return (
		<div className="flex flex-col gap-4">
			<div className="relative">
				<div className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
					<Search className="size-4" />
					<span className="sr-only">User</span>
				</div>
				<Input
					id={id}
					type="text"
					placeholder="Username"
					className="peer ps-9"
				/>
			</div>
			<div className="w-full max-w-xs space-y-2">
				<Label htmlFor={id}>Input with icon button</Label>
				<div className="flex rounded-md shadow-xs">
					<Input
						id={id}
						type="email"
						placeholder="Email address"
						className="-me-px rounded-e-none shadow-none focus-visible:z-1"
					/>
					<Button variant="outline" size="icon" className="rounded-s-none">
						<SearchIcon />
						<span className="sr-only">Download</span>
					</Button>
				</div>
			</div>
			<div className="w-full max-w-xs">
				<div className="flex rounded-md shadow-xs">
					<Input
						id={id}
						type="email"
						placeholder="Email address"
						className="-me-px rounded-e-none shadow-none focus-visible:z-1"
					/>
					<Button variant="outline" size="icon" className="rounded-s-none">
						<SearchIcon />
						<span className="sr-only">Download</span>
					</Button>
				</div>
			</div>
			<Button variant="outline">2234</Button>
			<Button variant="outline" size="lg">
				2234
			</Button>
			<Button variant="outline" size="sm">
				2234
			</Button>
			<Button variant="outline" size="icon">
				2234
			</Button>
		</div>
	);
};
