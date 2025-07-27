import { Gradient } from "./gradient";

export function Header() {
	return (
		<div className="relative">
			<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
			<div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
						درگاه خدمات و مجوزها
					</h2>
					<h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
						وزارت فرهنگ و ارشاد اسلامی
					</h2>
					<p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
						{
							"در این بخش می‌توانید خدمت مورد نظر خود را جستجو کرده و نسبت به ثبت درخواست اقدام کنید"
						}
					</p>
				</div>
			</div>
		</div>
	);
}
