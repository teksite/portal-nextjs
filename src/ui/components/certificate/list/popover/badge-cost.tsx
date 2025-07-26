import React from "react";

export const BadgeCost = ({needCost}: { needCost: boolean }) => {
    return (
        <span
            title="هزینه"
            className={`min-w-fit w-24 inline-block text-center text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${needCost ? "bg-red-900" : "bg-green-800"}`}
        >
		{needCost ? "مشمول هزینه" : "رایگان"}
		</span>
    );
};
