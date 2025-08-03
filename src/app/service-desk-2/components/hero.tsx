import {Button, Container, SearchInputSelectionValue} from "@/ui/atoms";
import { Gradient } from "./gradient";
import { Navbar } from "./navbar";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import {GallerySearchSection} from "@/app/service-desk-2/components/gallery/gallery-search-section";

export function Hero() {

	return (
		<div className="relative">
			<Gradient className="absolute inset-2 bottom-0 rounded-lg ring-1 ring-black/5 ring-inset" />
			<Container className="relative">

				<div className="pt-16 pb-24 sm:pt-16 sm:pb-10 md:pt-20 md:pb-24 text-center">
					<h1 className="">
						{"درگاه خدمات و مجوزها"}
					</h1>
					<p className="mt-6 md:mt-7 lg:mt-8  text-center ">
						{
							"در این بخش می‌توانید خدمت مورد نظر خود را جستجو کرده و نسبت به ثبت درخواست اقدام کنید"
						}
					</p>
					<div className="bg-zinc-50 rounded-lg inner-container mt-12">
						<GallerySearchSection  />
					</div>

					<div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"></div>
				</div>
			</Container>
		</div>
	);
}
