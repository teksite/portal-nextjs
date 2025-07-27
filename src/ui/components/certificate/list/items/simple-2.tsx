"use client";

import {getServiceGroupInfo} from "@/http/controller/service-groups-controller";
import {LicenseType} from "@/models";
import {LicenseIcon} from "@/ui/components/certificate/icons";
import {LicenseList} from "@/ui/components/certificate/list";

import {GenericItemCollapsedProps} from "@/ui/components/certificate/list/types";
import {colorMap} from "@/ui/components/certificate/list/shared";
import {motion} from "motion/react";
import {WithBadge2} from "@/ui/components/certificate/list/popover/with-badge2";

interface ListColoredProps {
  data: LicenseType[];
  column: 1 | 2 | 3 | 4;
}

export function Simple2({data, column}: ListColoredProps) {
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

    const {bg, fill, border ,text} = colorMap[groupInfo.color] || {
      bg: "bg-gray-500",
      fill: "fill-gray-800",
      border: "border-gray-200",
      text: "text",
    };
    return (
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => onExpand(id)}
        className="border border-zinc-300 shadow-xl rounded-xl overflow-hidden cursor-pointer hover:bg-slate-50 hover:shadow-sm duration-150 transition-all ease-linear "
      >
        <div className="flex flex-col gap-3 justify-center py-3">
          <div className={`flex items-center gap-3 py-0.5 px-3 ${bg} ms-0 me-auto md:w-1/2 trapezoid-after relative`}>
            <LicenseIcon
              name={groupInfo.icon ?? "Sayer"} size={24}
              className={`${fill}`}/>
            <motion.span
              id={`${id}-group`}
              layoutId={`group-${id}`}
              className={`text-sm ${text}`}
            >
              {license.serviceGroupCaption}
            </motion.span>
          </div>
          <div className='px-3 py-1'>
            <motion.h4
              id={`${id}-title`}
              layoutId={`title-${id}`}
              className={`block font-bold text mb-1`}
            >
              {license.title}
            </motion.h4>

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
    <div className="space-y-12">
      {Object.entries(groupedData).map(([caption, licenses]) => (
        <div key={caption}>

          <LicenseList
            data={licenses}
            className={`grid gap-6 ${gridClass}`}
            expandedComponent={WithBadge2}
            collapsedComponent={CollapsedComponent}
            overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
          />
        </div>
      ))}
    </div>
  );
}