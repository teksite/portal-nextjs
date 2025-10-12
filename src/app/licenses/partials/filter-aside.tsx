import { fetchApi } from "@/lib/utils";
import {FilterAsideClient} from "@/app/licenses/components/filter-aside-client";
import {FilterGroupType} from "@/types";

export async function FilterAside() {
    const filterItems: FilterGroupType = await fetchApi("licensesFilters");

    return <FilterAsideClient filterItems={filterItems} />;
}