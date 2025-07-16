"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { SolidButton, TextButton } from "../components/buttons";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import Form from "next/form";
import { getGroupServices } from "@/http/controller/servicesController";

export interface searchParamsType {
	title?: string;
}

const noOption = <option disabled={true}>موردی وجود ندارد</option>;

export default function SearchService() {
	const searchParams = useSearchParams();
	const pathname = usePathname();

	try {
		const term = searchParams.get("title") ?? "";

		console.log(term);
		// const groupsList = groups.length ?
		//     groups?.map((item) => (<option key={item.Slug} value={item.Id}>{item.Title}</option>))
		//     : noOption;
		const groupsList: any = [];

		const clearFiltersHandler = async () => {
			redirect(pathname);
		};

		return (
			<div className="x-box inner-container -mt-16">
				<Form className="grid gap-6 lg:grid-cols-4" action="/servicedesk">
					{/* search by name */}
					<div className="relative lg:col-span-3">
						<label htmlFor="search-title" className="sr-only label-style">
							نام خدمت مورد نظر
						</label>
						<input
							id="search-title"
							title="جستجو بر اساس اسم"
							placeholder="جستجو بر اساس کلمه"
							name="title"
							className="input-style"
							defaultValue={term}
							// onChange={(e) => handleSearch(e.target.value)}
						/>
						<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
					</div>
					{/* buttons */}
					<div className="flex gap-3 items-center justify-end order-last lg:order-2">
						<SolidButton title="جستجو" size="md" />
						<TextButton
							type="button"
							title="حذف فیلتر"
							size="md"
							onClick={clearFiltersHandler}
						/>
					</div>
					{/* search by groups */}
					<div className="relative lg:order-3">
						<label htmlFor="search-group" className="label-style">
							گروه خدمت
						</label>
						<select
							id="search-group"
							title="فیلتر کردن بر اساس  گروه خدمت"
							className="input-style"
							name="group"

							// defaultValue={}
							// onChange={(e) => handleSearch(e.target.value)}
						>
							<option disabled={true} value="">
								{" "}
								همه
							</option>
							{groupsList}
						</select>
					</div>
					{/* search by organs */}
					<div className="relative lg:order-4">
						<label htmlFor="search-organ" className="label-style">
							واحد سازمانی ارائه دهنده خدمت
						</label>
						<select
							id="search-organ"
							title="فیلتر کردن بر اساس  واحد سازمانی"
							className="input-style"
							name="organ"
							// defaultValue={searchParams.get('query')?.toString()}
							// onChange={(e) => handleSearch(e.target.value)}
						>
							<option>سازمان 1</option>
							<option>سازمان 2</option>
							<option>سازمان 3</option>
						</select>
					</div>
					{/* search by present */}
					<div className="relative lg:order-5">
						<label htmlFor="search-present" className="label-style">
							نحوه ارائه خدمت
						</label>
						<select
							id="search-present"
							title="فیلتر کردن بر اساس  نحوه ارائه خدمت"
							className="input-style"
							name="present"
							// defaultValue={searchParams.get('query')?.toString()}
							// onChange={(e) => handleSearch(e.target.value)}
						>
							<option>تکی</option>
							<option>جمعی</option>
							<option>ترکیبی</option>
						</select>
					</div>
					{/* search by demands */}
					<div className="relative lg:order-6">
						<label htmlFor="search-demands" className="label-style">
							میزان تقاضا
						</label>
						<select
							id="search-demands"
							title="فیلتر کردن بر اساس  میزان تقاضا"
							className="input-style"
							name="demands"
							// defaultValue={searchParams.get('query')?.toString()}
							// onChange={(e) => handleSearch(e.target.value)}
						>
							<option>زیاد</option>
							<option>کم</option>
						</select>
					</div>
				</Form>
			</div>
		);
	} catch (error) {
		console.error(error);
	}
}
