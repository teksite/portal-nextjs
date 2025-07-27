"use client";

import {getServiceGroupInfo} from "@/http/controller/service-groups-controller";
import {LicenseType} from "@/models";
import {LicenseIcon} from "@/ui/components/certificate/icons";
import {LicenseList} from "@/ui/components/certificate/list";
import {WithBadge3} from "@/ui/components/certificate/list/popover/with-badge3";
import {GenericItemCollapsedProps} from "@/ui/components/certificate/list/types";
import {colorMap} from "@/ui/components/certificate/list/shared";
import {motion} from "motion/react";

interface ListColoredProps {
    data: LicenseType[];
    column: string | number;
}

export function ListSimple({data, column}: ListColoredProps) {
    const colCount = Number(column);
    const gridClass = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
    }[colCount] || "grid-cols-1";

    const CollapsedComponent = ({id, data: license, onExpand}: GenericItemCollapsedProps) => {
        const groupInfo = getServiceGroupInfo(license) || {
            icon: "Sayer",
            color: "gray",
            title: "Default",
        };

        const {bg, fill, border} = colorMap[groupInfo.color] || {
            bg: "bg-gray-500",
            fill: "fill-gray-800",
            border: "border-gray-200",
        };

        return (
            <motion.div
                layoutId={`card-${id}`}
                onClick={() => onExpand(id)}
                className={`border shadow-xl rounded-xl overflow-hidden cursor-pointer pt-3 hover:bg-slate-50  hover:shadow-sm duration-150 transition-all ease-linear ${border}`}
            >
                <div className="flex gap-3 items-stretch h-full">
                    <LicenseIcon
                        name={groupInfo.icon ?? "Sayer"}
                        className={`h-full py-1 px-2 ${fill}`}
                    />
                    <div className="p-3">
                        <motion.h4
                            id={`${id}-title`}
                            layoutId={`title-${id}`}
                            className="block"
                        >
                            {license.title}
                        </motion.h4>
                        <motion.span
                            id={`caption-${id}`}
                            layoutId={`caption-${id}`}
                            className="text-sm block"
                        >
                            {license.serviceGroupCaption}
                        </motion.span>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Group data by serviceGroupCaption
    const groupedData = data.reduce((acc, license) => {
        const caption = license.serviceGroupCaption || "بدون گروه";
        if (!acc[caption]) {
            acc[caption] = [];
        }
        acc[caption].push(license);
        return acc;
    }, {} as Record<string, LicenseType[]>);

    return (
        <div className="space-y-6">
            {Object.entries(groupedData).map(([caption, licenses]) => (
                <div key={caption}>
                  <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-semibold mb-0 text-sart min-w-fit w-fit">{caption}</h2>

                      <hr className="hr w-full"/>
                  </div>
                    <LicenseList
                        data={licenses}
                        className={`grid gap-6 ${gridClass}`}
                        expandedComponent={WithBadge3}
                        collapsedComponent={CollapsedComponent}
                        overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
                    />
                </div>
            ))}
        </div>
    );
}