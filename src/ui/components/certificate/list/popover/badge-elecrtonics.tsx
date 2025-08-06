import React from "react";

export const BadgeElecrtonics = ({electronics}: { electronics?: number|string }) => {
    return (
        <span
            title="ارائه نحوه "
            className={`min-w-fit w-24 inline-block text-center text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${electronics ? "bg-cyan-600" : "bg-slate-800"}`}
        >
		{electronics ? "الکترونیکی" : "غیرالکترونیکی"}
		</span>
    );
};
