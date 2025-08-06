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

}

export function Simple3({data}: ListColoredProps) {


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
        className="relative border border-zinc-300 rounded-md overflow-hidden cursor-pointer px-3 aspect-square bg-white hover:bg-slate-50 hover:shadow-lg duration-150 transition-all ease-linear "
      >
        <div className="flex flex-col py-3 ">

          <div className='px-3 py-1'>
            <motion.span
              id={`${id}-title`}
              layoutId={`title-${id}`}
              className={`block font-bold text mb-1 w-5/6 text-start text-sm`}
            >
              {license.title}
            </motion.span>
            <motion.span
              id={`${id}-group`}
              layoutId={`group-${id}`}
              className={`text-sm text-zinc-600`}
            >
              {license.serviceGroupCaption}
            </motion.span>
            <LicenseIcon
              name={groupInfo.icon ?? "Sayer"} size={32}
              className={`${fill} me-0 ms-auto absolute end-3 bottom-3`}/>
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
            className={`grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6`}
            expandedComponent={WithBadge2}
            collapsedComponent={CollapsedComponent}
            overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
          />
        </div>
      ))}
    </div>
  );
}