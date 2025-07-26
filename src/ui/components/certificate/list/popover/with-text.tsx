import { motion } from "motion/react";
import { IconPicker } from "@/ui/components/icons/icon";
import Link from "next/link";
import React from "react";
import { LicenseType } from "@/models/licenseModel";

export const ItemExpandedSimple = ({
                                       id,
                                       data,
                                   }: {
    id: string;
    data: LicenseType;
}) => {
    return (
        <motion.div
            layoutId={`card-${id}`}
            className="w-full max-w-[500px] h-fit flex flex-col x-box p-0 overflow-hidden"
        >
            <div className="p-6">
                <div className="mb-3">

                </div>
                <motion.h3
                    id={`${id}-title`}
                    layoutId={`title-${id}`}
                    className="text-lg font-semibold"
                >
                    {data.title}
                </motion.h3>
                <div className="flex items-center gap-3 justify-between">
                    <div className="flex items-center gap-3 justify-start">
                        <motion.div layoutId={`image-${id}`}>
                            <IconPicker
                                name={data.icon || "license"}
                                className="bg-blue-600 fill-blue-300 size-6"
                            />
                        </motion.div>
                        <motion.span layoutId={`caption-${id}`} className="text-center">
                            {data.serviceGroupCaption}
                        </motion.span>
                    </div>
                    <div className="text-sm">کد خدمت: {data.code}</div>

                </div>
                <hr className="my-3 border-zinc-300 dark:border-zinc-600" />
                <p id={`${id}-description`} className="text-sm">
                    {data.description}
                </p>
                <ul className="mt-4 space-y-2">
                    <li>
                        <span className="pr-2">نیاز به مراجعه حضوری: </span>
                        <span className="font-bold">
							{data.needPresence ? "دراد" : "ندارد"}
						</span>
                    </li>
                    <li>
                        <span className="pr-2">نحوه ارائه خدمت: </span>
                        <span className="font-bold">
							{data.electronics ? "الکترونیکی" : "غیر الکترونیکی"}
						</span>
                    </li>
                    <li>
                        <span className="pr-2">نیاز به پرداخت هزینه: </span>
                        <span className="font-bold">{data.cost ? "دارد" : "ندارد"}</span>
                    </li>
                    <li>
                        <span className="pr-2">متوسط زمان اخذ خدمت: </span>
                        <span className="font-bold">{data.avgTime ?? "-"}</span>
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
