import { cn } from "@/lib";

export function Gradient({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div
			{...props}
			className={cn(
				className,
				"bg-gradient-to-br from-cyan-300  to-cyan-700"
			)}
		/>
	);
}

export function GradientBackground() {
	return (
		<div className="relative mx-auto max-w-7xl">
			<div
				className={cn(
					"absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0",
					"bg-gradient-to-br from-cyan-300  to-cyan-700",
					"rotate-[-10deg] rounded-full blur-3xl"
				)}
			/>
		</div>
	);
}
