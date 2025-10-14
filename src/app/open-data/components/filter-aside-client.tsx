'use client';

import {useState} from "react";
import {FilterOpenDataGroupType, FilterOpenDataItemType} from "@/types";

export function FilterAsideClient({filterItems}: { filterItems: FilterOpenDataGroupType }) {
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

    const handleFilterChange = (key: string, value: string) => {
        setActiveFilters(prev => ({...prev, [key]: value}));
    };

    const removeFilter = (key: string) => {
        setActiveFilters(prev => {
            const newFilters = {...prev};
            delete newFilters[key];
            return newFilters;
        });
    };

    return (
        <div>
            <div className="flex flex-wrap gap-2 my-3">
                {Object.entries(activeFilters).map(([key, value]) => (
                    <span key={key} className="bg-slate-300/50 px-2 py-1 rounded text-sm flex items-center gap-1">
                        {value}
                        <button onClick={() => removeFilter(key)} className="text-red-500">×</button>
                    </span>
                ))}
            </div>

            <hr className="my-3 w-11/12 border-zinc-300"/>

            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                <li>
                    <label className="mb-1 font-bold block text-sm">جستجو:</label>
                    <input
                        className="block w-full input-style"
                        type="text"
                        value={activeFilters['search'] || ''}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                    />
                </li>

                {Object.entries(filterItems).map(([groupKey, filterGroup]: [groupKey:string, filterGroup:FilterOpenDataGroupType]) => (
                    <li key={groupKey}>
                        <label className="mb-1 font-bold block text-sm" htmlFor={`filter[${groupKey}]`}>
                            {filterGroup.title}:
                        </label>
                        <select name={`filter[${groupKey}][]`} id={`filter[${groupKey}]`}
                                className="block w-full input-style"
                                value={activeFilters[groupKey] || ''}
                                onChange={(e) => handleFilterChange(groupKey, e.target.value)}
                        >
                            <option value="">انتخاب کنید...</option>
                            {Object.entries(filterGroup.items).map(([itemKey, item]: [string, FilterOpenDataItemType]) => (
                                <option key={itemKey} value={item.title}>
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
