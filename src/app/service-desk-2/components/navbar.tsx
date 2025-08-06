"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const links = [
	{ href: "/pricing", label: "درگاه شفافیت" },
	{ href: "/company", label: "درگاه شفافیت بیشتر" },
	{ href: "/login", label: "ورود به سیستم" , icon: '/assets/images/svg/login.svg' , className: "border border-zinc-300 p-0.5 pe-1 rounded-lg" },
];

export function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<DesktopNav />
			<MobileNavButton open={open} setOpen={setOpen} />
			<MobileNav open={open} setOpen={setOpen} />
		</>
	);
}

function DesktopNav() {
	return (
		<nav className="hidden lg:flex gap-4">
			{links.map(({ href, label, icon , className }) => (
				<Link key={href} href={href} className={` text-sm flex items-center gap-1 ${className}`}>
					{icon && <Image src={icon} alt="ورود به حساب کاربری" height="30" width="30"/> }
					{label}
				</Link>
			))}
		</nav>
	);
}

function MobileNavButton({
							 open,
							 setOpen,
						 }: {
	open: boolean;
	setOpen: (v: boolean) => void;
}) {
	return (
		<button
			onClick={() => setOpen(!open)}
			className="flex size-12 items-center justify-center rounded-lg bg-gray-100 lg:hidden"
			aria-label="Toggle menu"
		>
			{open ? (
				<XMarkIcon className="w-6 h-6" />
			) : (
				<Bars2Icon className="w-6 h-6" />
			)}
		</button>
	);
}

function MobileNav({
					   open,
					   setOpen,
				   }: {
	open: boolean;
	setOpen: (v: boolean) => void;
}) {
	return (
		<>
			{open && (
				<div
					className="fixed h-svh inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
					onClick={() => setOpen(false)}
				/>
			)}

			<motion.div
				initial={{ x: "100%" }}
				animate={{ x: open ? "0%" : "100%" }}
				transition={{ type: "tween", duration: 0.3 }}
				className="fixed top-0 right-0 z-50 h-svh w-72  shadow-lg lg:hidden p-6 bg-white inset-y-0"
			>
				<div className="flex flex-col gap-3 ">
					<figure className="flex items-center gap-3 justify-start ">
						<Image
							src="/assets/images/logo/logo.png"
							alt={"وزارت فرهنگ و ارشاد اسلامی"}
							width={50}
							height={50}
							className=""
						/>
						<figcaption>
							<Link href="/" className="text-sm font-bold">{"وزارت فرهنگ و ارشاد اسلامی"}</Link>
						</figcaption>
					</figure>
					<hr className="hr"/>
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="text-gray-900 text-lg"
							onClick={() => setOpen(false)}
						>
							{label}
						</Link>
					))}
				</div>
			</motion.div>
		</>
	);
}
