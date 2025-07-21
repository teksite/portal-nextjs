import Image from "next/image";
import Link from "next/link";
import { env } from "@/lib";
import DarkMode from "@/ui/components/darkMode";

export default function Header() {
	const appName = env("APP_NAME");

	return (
		<header className="w-full bg-blue-950 px-3 py-1 sticky top-0 z-20 flex justify-between items-center">
			<figure className="flex items-center gap-3 justify-start text-zinc-50">
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
				<DarkMode />
			</div>
		</header>
	);
}
