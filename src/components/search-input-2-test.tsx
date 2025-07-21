import { mockUsStates } from "@/app/mock";
import { SearchInput2 } from "@/ui/components/search-input";
import { useCallback, useMemo, useState } from "react";

export function SearchInput2Test() {
	const data = mockUsStates;
	const [filter, setFilter] = useState<string>();
	const [selection, setSelection] = useState<{
		filter?: string;
		item?: string;
	}>();

	const filteredData = useMemo(() => {
		if (!filter) return data;
		return data.filter((item) =>
			item.toLowerCase().includes(filter.toLowerCase())
		);
	}, [data, filter]);

	const getItemLabel = useCallback((item: string) => item, []);
	const renderItem = useCallback((item: string, highlighted?: boolean) => {
		return item;
	}, []);

	return (
		<div className="flex flex-col ">
			<div>{`Filter: ${filter}`}</div>
			<div>{`Selection filter: ${selection?.filter}`}</div>
			<div>{`Selection item: ${selection?.item}`}</div>
			<SearchInput2
				data={filteredData}
				onFilterChange={setFilter}
				getItemLabel={getItemLabel}
				renderItem={renderItem}
				onSelectChange={(option) => {
					setSelection(option);
				}}
			/>
		</div>
	);
}
