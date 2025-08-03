import Image from "next/image";
import Link from "next/link";
import { env } from "@/lib";
import DarkMode from "@/ui/components/darkMode";
import {Navbar} from "@/app/service-desk-2/components/navbar";

export default function Header() {
	const appName = env("APP_NAME") ?? 'وزارت فرهنگ و ارشاد اسلامی';

	return (
		<header className="w-full  px-3 py-1 sticky top-0 z-20 flex justify-between items-center bg-white/70 backdrop-blur-2xl shadow-sm">
			<figure className="flex items-center gap-3 justify-start ">
				<Image
					src="/assets/images/logo/logo.png"
					alt={"وزارت فرهنگ و ارشاد اسلامی"}
					width={50}
					height={50}
					className=""
				/>
				<figcaption>
					<Link href="/">{appName}</Link>
				</figcaption>
			</figure>
			<div className="flex items-center gap-3 justify-end">
				<Navbar />
				<DarkMode />
			</div>
		</header>
	);
}
