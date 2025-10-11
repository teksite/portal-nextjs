import { fetchApi } from "@/lib/utils";
import { LicensesFiltersType } from "@/types";
import {FilterAsideClient} from "@/app/licenses/components/filter-aside-client";

export async function FilterAside() {
    const filterItems: LicensesFiltersType = await fetchApi("licensesFilters");

    return <FilterAsideClient filterItems={filterItems} />;
}