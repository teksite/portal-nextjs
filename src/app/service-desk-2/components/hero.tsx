import {Container, SearchInputSelectionValue} from "@/ui/atoms";
import { Gradient } from "./gradient";

import {GallerySearchSection} from "@/app/service-desk-2/components/gallery/gallery-search-section";
import {LicenseType} from "@/models";

export function Hero({
						 selection,
						 setSelection,
					 }: {
	selection: SearchInputSelectionValue<LicenseType> | undefined;
	setSelection: (value: SearchInputSelectionValue<LicenseType> | undefined) => void;
}) {

	return (
		<div className="relative  mb-12">
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
					<div className="bg-zinc-50 rounded-lg inner-container mt-3">
						<GallerySearchSection  onSelectChange={setSelection} />
					</div>
				</div>
			</Container>
		</div>
	);
}
