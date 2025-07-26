import React from "react";

export const BadgePresence = ({needPresent}: { needPresent: boolean }) => {
    return (
        <span
            title="نیاز به مراجعه حضوری"
            className={`min-w-fit w-24 inline-block text-center text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${
                needPresent ? "bg-yellow-600" : "bg-indigo-800"
            }`}>
				{needPresent ? "مراجعه حضوری" : "مراجعه غیرحضوری"}
		</span>
    );
};
