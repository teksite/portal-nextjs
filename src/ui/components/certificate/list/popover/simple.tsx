import {motion} from "motion/react";
import {LicenseIcon} from "@/ui/components/certificate/icons";
import {getServiceGroupInfo} from "@/http/controller/service-groups-controller";
import Link from "next/link";
import React from "react";
import {LicenseType} from "@/models/licenseModel";
import {BadgePresence} from "@/ui/components/certificate/list/popover/badge-presence";
import {BadgeCost} from "@/ui/components/certificate/list/popover/badge-cost";
import {BadgeElecrtonics} from "@/ui/components/certificate/list/popover/badge-elecrtonics";
import {colorMap} from "@/ui/components/certificate/list/shared";

export const Simple = ({id, data}: { id: string; data: LicenseType }) => {
  const groupInfo = getServiceGroupInfo(data) || {
    icon: "Sayer",
    color: "gray",
    title: "Default",
  };

  const {bg, fill} = colorMap[groupInfo?.color] || {
    bg: "bg-gray-500",
    fill: "fill-gray-800",
    border: "border-gray-200",
  };

  return (
    <motion.div
      layoutId={`card-${id}`}
      className="w-full max-w-[500px] h-fit flex flex-col x-box p-0 overflow-hidden">
      <div className="p-6">
        <div className="">
          <motion.div layoutId={`image-${id}`} className="">
            <LicenseIcon
              name={groupInfo.icon ?? "Sayer"}
              className={`p-1 ${bg} ${fill} size-12 rounded-full mx-auto mb-3`}
            />
          </motion.div>
          <div>
            <motion.h2
              id={`${id}-title`}
              layoutId={`title-${id}`}
              className="text-center font-semibold">
              {data.title}
            </motion.h2>
          </div>
        </div>

        <div className="mb-3 max-h-[120px] h-[120px] overflow-y-auto p-3 shadow-inner">

          <p id={`${id}-description`} className="text-sm">
            {data.description}
          </p>
          <motion.span layoutId={`caption-${id}`} className="text-sm block mb-3">
            {data.serviceGroupCaption}
          </motion.span>
          <span className="text-sm block  mb-3">کد خدمت: {data.code}</span>

          <ul className="mt-3 flex gap-3 flex-wrap items-center">
            <li>
              <BadgePresence needPresent={data.needPresence ?? false}/>
            </li>
            <li>
              <BadgeElecrtonics electronics={data.electronics ?? 1}/>
            </li>
            <li>
              <BadgeCost needCost={data.cost ?? false}/>
            </li>
            {
              data.avgTime && (
                <li>
                <span title="متوسط زمان اخذ خدمت:"
                      className="min-w-fit w-24 inline-block text-center text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl bg-fuchsia-600 ">{data.avgTime} روز</span>
                </li>
              )}
          </ul>
        </div>


      </div>
      <div className="flex border-t border-zinc-300 divide-x divide-zinc-300 dark:border-zinc-600 dark:divide-zinc-600">
        <Link
          href={`/details/${id}`}
          className="w-full text-center block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-sm"
        >
          جزیئات بیشتر
        </Link>
        <Link
          href={`/request/${id}`}
          className="w-full text-center block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-sm"
        >
          ثبت درخواست
        </Link>
      </div>
    </motion.div>
  );
};