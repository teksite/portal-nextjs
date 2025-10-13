import {fetchApi} from "@/lib/utils";
import {FilterGroupType} from "@/types";
import {FilterAsideClient} from "@/app/open-data/components/filter-aside-client";
import Image from "next/image";

export async function FilterAside() {
    const filterItems: FilterGroupType = await fetchApi("openDataFilters");

    return (
        <div className="sticky top-1">
            <Image src={'/uploads/factory/open-data-logo.png'} alt={'درگاه داده باز'} width={240} height={148} property fetchPriority={'high'} decoding='sync' loading='eager' />
            <FilterAsideClient filterItems={filterItems}/>
        </div>);
}