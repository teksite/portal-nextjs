"use client";

import {
	CollapsibleContent,
	CollapsibleTrigger,
	PlusGrid,
	SmallLogoImage,
} from "@/ui/atoms";

import { Bars2Icon } from "@heroicons/react/24/solid";
import { Collapsible } from "@radix-ui/react-collapsible";
import { motion } from "motion/react";
import Link from "next/link";

const links = [
	{ href: "/pricing", label: "درگاه شفافیت" },
	{ href: "/company", label: "درگاه شفافیت بیشتر" },
	{ href: "/login", label: "ورود به سیستم" },
];

export function Navbar({ banner }: { banner?: React.ReactNode }) {
	return (
		<Collapsible className="pt-12 sm:pt-16">
			<PlusGrid>
				<PlusGrid.Row className="relative flex justify-between">
					<div className="relative flex gap-6">
						<PlusGrid.Item className="py-3">
							<Link href="/" title="Home">
								<SmallLogoImage width={48} height={48} className="h-9" />
							</Link>
						</PlusGrid.Item>
						{banner && (
							<div className="relative hidden items-center py-3 lg:flex">
								{banner}
							</div>
						)}
					</div>
					<DesktopNav />
					<MobileNavButton />
				</PlusGrid.Row>
			</PlusGrid>
			<MobileNav />
		</Collapsible>
	);
}

function DesktopNav() {
	return (
		<nav className="relative hidden lg:flex">
			{links.map(({ href, label }) => (
				<PlusGrid.Item key={href} className="relative flex">
					<Link
						href={href}
						className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
					>
						{label}
					</Link>
				</PlusGrid.Item>
			))}
		</nav>
	);
}

function MobileNavButton() {
	return (
		<CollapsibleTrigger
			className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
			aria-label="Open main menu"
		>
			<Bars2Icon className="size-6" />
		</CollapsibleTrigger>
	);
}

function MobileNav() {
	return (
		<CollapsibleContent className="lg:hidden">
			<div className="flex flex-col gap-6 py-4">
				{links.map(({ href, label }, linkIndex) => (
					<motion.div
						initial={{ opacity: 0, rotateX: -90 }}
						animate={{ opacity: 1, rotateX: 0 }}
						transition={{
							duration: 0.15,
							ease: "easeInOut",
							rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
						}}
						key={href}
					>
						<Link href={href} className="text-base font-medium text-gray-950">
							{label}
						</Link>
					</motion.div>
				))}
			</div>
			<div className="absolute left-1/2 w-screen -translate-x-1/2">
				<div className="absolute inset-x-0 top-0 border-t border-black/5" />
				<div className="absolute inset-x-0 top-2 border-t border-black/5" />
			</div>
		</CollapsibleContent>
	);
}
