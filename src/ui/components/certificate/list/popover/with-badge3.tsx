import { motion } from "motion/react";
import { LicenseIcon } from "@/ui/components/certificate/icons";
import { getServiceGroupInfo } from "@/http/controller/service-groups-controller";
import Link from "next/link";
import React from "react";
import { LicenseType } from "@/models/licenseModel";
import { BadgePresence } from "@/ui/components/certificate/list/popover/badge-presence";
import { BadgeCost } from "@/ui/components/certificate/list/popover/badge-cost";
import { BadgeElecrtonics } from "@/ui/components/certificate/list/popover/badge-elecrtonics";
import {colorMap} from "@/ui/components/certificate/list/shared";



export const WithBadge3 = ({ id, data }: { id: string; data: LicenseType }) => {
    const groupInfo = getServiceGroupInfo(data) || {
        icon: "Sayer",
        color: "gray",
        title: "Default",
    };

    const { bg, fill, border } = colorMap[groupInfo?.color] || {
        bg: "bg-gray-500",
        fill: "fill-gray-800",
        border: "border-gray-200",
    };

    return (
        <motion.div
            layoutId={`card-${id}`}
            className="w-full max-w-[500px] h-fit flex flex-col x-box p-0 overflow-hidden" >
            <div className="p-6">
                <div className="flex items-center gap-3 justify-start">
                    <motion.div layoutId={`image-${id}`}>
                        <LicenseIcon
                            name={groupInfo.icon ?? "Sayer"}
                            className={`p-1 ${bg} ${fill} size-12 rounded`}
                        />
                    </motion.div>
                    <div>
                        <motion.h3
                            id={`${id}-title`}
                            layoutId={`title-${id}`}
                            className="text-lg font-semibold mb-1"
                        >
                            {data.title}
                        </motion.h3>
                        <motion.span layoutId={`caption-${id}`} className="text-sm">
                            {data.serviceGroupCaption}
                        </motion.span>
                    </div>
                </div>

                <hr className="my-3 border-zinc-300 dark:border-zinc-600" />
                <div className="mb-3 max-h-[120px] h-[120px] overflow-y-auto">
                    <div className="text-sm">کد خدمت: {data.code}</div>
                    <p id={`${id}-description`} className="text-sm">
                        {data.description}
                    </p>
                </div>
                {data.avgTime && (
                    <p>
                        <span className="ps-2 text-sm">متوسط زمان اخذ خدمت: </span>
                        <span className="font-bold text-sm">{data.avgTime}</span>
                    </p>
                )}
                <ul className="mt-3 flex gap-3 flex-wrap items-center">
                    <li>
                        <BadgePresence needPresent={data.needPresence ?? false} />
                    </li>
                    <li>
                        <BadgeElecrtonics electronics={data.electronics ?? 1} />
                    </li>
                    <li>
                        <BadgeCost needCost={data.cost ?? false} />
                    </li>
                </ul>
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