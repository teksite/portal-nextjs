import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from "lucide-react";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/ui/atoms/command";

export function CommandDemo() {
	return (
		<Command className="rounded-lg border shadow-md md:min-w-[450px]">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<Calendar />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<Smile />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem disabled>
						<Calculator />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<User />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCard />
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<Settings />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	);
}

export function CommandDemo2() {
	return (
		<Command className="rounded-lg border shadow-md md:min-w-[450px]">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandItem>
					<Calendar />
					<span>Calendar</span>
				</CommandItem>
				<CommandItem>
					<Smile />
					<span>Search Emoji</span>
				</CommandItem>
				<CommandItem disabled>
					<Calculator />
					<span>Calculator</span>
				</CommandItem>
				<CommandSeparator />
				<CommandItem>
					<User />
					<span>Profile</span>
					<CommandShortcut>⌘P</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<CreditCard />
					<span>Billing</span>
					<CommandShortcut>⌘B</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<Settings />
					<span>Settings</span>
					<CommandShortcut>⌘S</CommandShortcut>
				</CommandItem>
			</CommandList>
		</Command>
	);
}

export function CommandDemo3() {
	return (
		<div>
			<Command className="rounded-lg border shadow-md md:min-w-[450px]">
				<CommandInput placeholder="Type a command or search..." />
				{/* <CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandItem>Calendar</CommandItem>
					<CommandItem>Search Emoji</CommandItem>
					<CommandItem>Profile</CommandItem>
					<CommandItem>Billing</CommandItem>
					<CommandItem>Settings</CommandItem>
					</CommandList> */}
			</Command>
			<div>
				<Command className="rounded-lg border shadow-md md:min-w-[450px]">
					<CommandList>
						<CommandEmpty>No resulsdsssts found.</CommandEmpty>
						<CommandItem>
							<Calendar />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<Smile />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem disabled>
							<Calculator />
							<span>Calculator</span>
						</CommandItem>
						<CommandSeparator />
						<CommandItem>
							<User />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCard />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandList>
				</Command>
			</div>
		</div>
	);
}
