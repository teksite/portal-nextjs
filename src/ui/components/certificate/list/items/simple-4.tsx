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

export function Simple4({data, column}: ListColoredProps) {
  const colCount = Number(column);
  const gridClass = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2 xl:grid-cols-2",
    3: "sm:grid-cols-2 xl:grid-cols-3",
    4: "sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
  }[colCount] || "grid-cols-1";

  const CollapsedComponent = ({id, data: license, onExpand}: GenericItemCollapsedProps) => {
    const groupInfo = getServiceGroupInfo(license) || {
      icon: "Sayer",
      color: "gray",
      title: "Default",
    };

    const {fill} = colorMap[groupInfo.color] || {
      fill: "fill-gray-800",
    };

    return (
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => onExpand(id)}
        className="border border-zinc-300 shadow-xl rounded-xl overflow-hidden cursor-pointer hover:bg-slate-50 hover:shadow-sm duration-150 transition-all ease-linear "
      >
        <div className="flex items-center gap-3 p-3">
          <LicenseIcon
            name={groupInfo.icon ?? "Sayer"}
            className={`h-full ${fill}`}/>
          <div>
            <motion.h4
              id={`${id}-title`}
              layoutId={`title-${id}`}
              className={`block font-bold text mb-1`}
            >
              {license.title}
            </motion.h4>
            <motion.span
              id={`${id}-group`}
              layoutId={`group-${id}`}
              className={`text-sm text`}
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
            expandedComponent={WithBadge2}
            collapsedComponent={CollapsedComponent}
            overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
          />
        </div>
      ))}
    </div>
  );
}