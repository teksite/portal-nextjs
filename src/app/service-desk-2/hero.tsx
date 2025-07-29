import { Button, Container } from "@/ui/atoms";
import { Gradient } from "./gradient";
import { Navbar } from "./navbar";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function Hero() {
	return (
		<div className="relative">
			<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
			<Container className="relative">
				<Navbar
					banner={
						<Link
							href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
							className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
						>
							خبر مهمی در مورد خدمات جدید ارائه شده در این وبسایت
							<ChevronLeftIcon className="size-4" />
						</Link>
					}
				/>
				<div className="pt-16 pb-24 sm:pt-16 sm:pb-10 md:pt-20 md:pb-24 text-center">
					<h1 className="font-display text-4xl/[1.1]  sm:text-5xl/[1.1] md:text-6xl/[1.1] lg:text-7xl/[1.1] font-bold tracking-tight text-balance text-gray-950">
						{"درگاه خدمات و مجوزها"}
					</h1>
					<p className="mt-6 md:mt-7 lg:mt-8 text-xl/7 md:text-2xl/8 font-medium text-center text-gray-950/75">
						{
							"در این بخش می‌توانید خدمت مورد نظر خود را جستجو کرده و نسبت به ثبت درخواست اقدام کنید"
						}
					</p>

					<div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"></div>
				</div>
			</Container>
		</div>
	);
}
