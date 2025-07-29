import {motion} from "motion/react";
import Link from "next/link";
import React from "react";
import {LicenseType} from "@/models/licenseModel";
import {BadgePresence} from "@/ui/components/certificate/list/popover/badge-presence";
import {BadgeCost} from "@/ui/components/certificate/list/popover/badge-cost";
import {BadgeElecrtonics} from "@/ui/components/certificate/list/popover/badge-elecrtonics";
import {LicenseIcon} from "@/ui/components/certificate/icons";
import {getServiceGroupInfo} from "@/http/controller/service-groups-controller";
import {colorMap} from "@/ui/components/certificate/list/shared";

export const Simple5 = ({id, data,}: {
  id: string;
  data: LicenseType;
}) => {
  const groupInfo = getServiceGroupInfo(data) || {
    icon: "Sayer",
    color: "gray",
    title: "Default",
  };

  const {bg, fill, border, text} = colorMap[groupInfo?.color] || {
    bg: "bg-gray-500",
    fill: "fill-gray-800",
    border: "border-gray-200",
    text: "text-gray-900",
  };

  return (
    <motion.div
      layoutId={`card-${id}`}
      className={`w-full max-w-[500px] h-fit flex flex-col rounded-lg border ${border}`}>
      <div className="pt-3">

        <motion.div layoutId={`image-${id}`} className="-mt-8 mb-3">
          <LicenseIcon
            name={groupInfo.icon}
            className={`size-12 rounded-full ${bg} ${fill} mx-auto p-1 `}
          />
        </motion.div>
        <motion.h3
          id={`${id}-title`}
          layoutId={`title-${id}`}
          className={`font-semibold text-center `}>
          {data.title}
        </motion.h3>
        <hr className="hr"/>
        <div className="p-3">
          <div className="mb-3 max-h-[120px] h-[120px] overflow-y-auto px-3">
            <p id={`${id}-description`} className="text-sm">
              {data.description}
            </p>
            <div className="flex items-center gap-3 justify-start">
              <motion.span className="text-sm  mb-1" layoutId={`caption-${id}`}>
                گروه: {data.serviceGroupCaption}
              </motion.span>
            </div>
            <div className="text-sm">کد خدمت: {data.code}</div>
            {data.avgTime && (
              <p>
                <span className="text-sm">متوسط زمان اخذ خدمت: </span>
                <span className="font-bold text-sm">{data.avgTime}</span>
              </p>
            )}

            <ul className="my-3 flex gap-3 flex-wrap items-center">
              <li>
                <BadgePresence needPresent={data.needPresence ?? false}/>
              </li>
              <li>
                <BadgeElecrtonics electronics={data.electronics ?? 1}/>

              </li>
              <li>
                <BadgeCost needCost={data.cost ?? false}/>

              </li>
            </ul>
          </div>

        </div>
      </div>
      <div
        className="flex border-t border-zinc-300 divide-x divide-zinc-300 dark:border-zinc-600 dark:divide-zinc-600">
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
