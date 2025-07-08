import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {SolidButton, TextButton} from "../components/buttons";
import {getGroupServices} from "@/http/services";

interface searchParamsType{
    term?: string;
}
interface propsType{
    searchParams : Promise<searchParamsType>
}

const noOption = <option disabled={true}>موردی وجود ندارد</option>;

export default async function SearchService(props: propsType) {

    try {
        const searchParams = await props.searchParams;

        const groupResult = await getGroupServices();

        const groups = groupResult?.SGData ?? [];
        console.log(groups)
        const term =searchParams?.term ?? "";
        const groupsList = groups.length ?
            groups?.map((item) => (<option key={item.Slug} value={item.Id}>{item.Title}</option>))
            : noOption
        return (
            <div className="bg-white rounded-xl shadow-xl p-6 inner-container -mt-16">
                <form action="" className="grid gap-6 lg:grid-cols-4">
                    {/* search by name */}
                    <div className="relative lg:col-span-3">
                        <label htmlFor="search-title" className="sr-only label-style">
                            نام خدمت مورد نظر
                        </label>
                        <input id="search-title" title="جستجو بر اساس اسم" placeholder="جستجو بر اساس کلمه"
                               className="input-style"
                               defaultValue={term}
                            // onChange={(e) => handleSearch(e.target.value)}
                        />
                        <MagnifyingGlassIcon
                            className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                    </div>
                    {/* buttons */}
                    <div className="flex gap-3 items-center justify-end">
                        <SolidButton title="جستجو" size="md"/>
                        <TextButton title="حذف فیلتر" size="md"/>
                    </div>
                    {/* search by groups */}
                    <div className="relative">
                        <label htmlFor="search-group" className="label-style">
                            گروه خدمت
                        </label>
                        <select id="search-group" title="فیلتر کردن بر اساس  گروه خدمت" className="input-style"

                            // defaultValue={}
                            // onChange={(e) => handleSearch(e.target.value)}
                        >
                            <option disabled={true} value=""> همه </option>
                            {groupsList}
                        </select>
                    </div>
                    {/* search by organs */}
                    <div className="relative">
                        <label htmlFor="search-organ" className="label-style">
                            واحد سازمانی ارائه دهنده خدمت
                        </label>
                        <select id="search-organ" title="فیلتر کردن بر اساس  واحد سازمانی" className="input-style"
                            // defaultValue={searchParams.get('query')?.toString()}
                            // onChange={(e) => handleSearch(e.target.value)}
                        >
                            <option>
                                سازمان 1
                            </option>
                            <option>
                                سازمان 2
                            </option>
                            <option>
                                سازمان 3
                            </option>
                        </select>
                    </div>
                    {/* search by present */}
                    <div className="relative">
                        <label htmlFor="search-present" className="label-style">
                            نحوه ارائه خدمت
                        </label>
                        <select id="search-present" title="فیلتر کردن بر اساس  نحوه ارائه خدمت" className="input-style"
                            // defaultValue={searchParams.get('query')?.toString()}
                            // onChange={(e) => handleSearch(e.target.value)}
                        >
                            <option>
                                تکی
                            </option>
                            <option>
                                جمعی
                            </option>
                            <option>
                                ترکیبی
                            </option>
                        </select>
                    </div>
                    {/* search by demands */}
                    <div className="relative">
                        <label htmlFor="search-demands" className="label-style">
                            میزان تقاضا
                        </label>
                        <select id="search-demands" title="فیلتر کردن بر اساس  میزان تقاضا" className="input-style"
                            // defaultValue={searchParams.get('query')?.toString()}
                            // onChange={(e) => handleSearch(e.target.value)}
                        >
                            <option>
                               زیاد
                            </option>
                            <option>
                                کم
                            </option>

                        </select>
                    </div>

                </form>
            </div>
        );
    } catch (error) {
        console.error(error)
    }
}