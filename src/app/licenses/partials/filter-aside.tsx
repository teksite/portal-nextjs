import { fetchApi } from "@/lib/utils";
import { LicensesFiltersType, FilterGroupType, FilterItemType } from "@/types";

export async function FilterAside() {
    const filterItems: LicensesFiltersType = await fetchApi("licensesFilters");

    return (
        <div className="sticky top-1 ">
            <h3>
                {'فیلتر'}
            </h3>
            <hr className="my-6 w-11/12 border-zinc-300"/>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                <li key={'searchFilter'} >
                    <label htmlFor={`filter-search-title`} className="select-none font-bold block text-sm">
                        {'خدمت یا مجوز خود را جستجو کنید'}:
                    </label>
                    <input id={`filter-search-title`} className="block w-full input-style" type="text"/>
                </li>
                {Object.entries(filterItems).map(([groupKey, filterGroup]: [string, FilterGroupType]) => (
                    <li key={groupKey} className="">
                        <label htmlFor={`filter-${groupKey}`} className="select-none font-bold block text-sm">
                            {filterGroup.title}:
                        </label>
                        <select id={`filter-${groupKey}`} className="block w-full input-style">
                            {Object.entries(filterGroup.items).map(([itemKey, item]: [string, FilterItemType]) => (
                                <option key={itemKey} value={item.id}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
}
