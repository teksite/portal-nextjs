import {motion} from "motion/react";
import {IconPicker} from "@/ui/components/icons/icon";
import Link from "next/link";
import React from "react";
import {LicenseType} from "@/models/licenseModel";


interface ExpandedCardContentProps {
    active: LicenseType;
    id: string;
}

export const ExpandedCardBadge = React.forwardRef<HTMLDivElement, ExpandedCardContentProps>(
    ({active, id}, ref) => {
        return (
            <motion.div
                layoutId={`card-${active.id}`}
                ref={ref}
                className="w-full max-w-[500px] h-fit flex flex-col x-box p-0 overflow-hidden"
            >
                <div className="p-6">
                    <div className="mb-3">
                        <div className="flex items-center gap-3 justify-start">
                            <motion.div layoutId={`image-${active.id}`}>
                                <IconPicker
                                    name={active.icon || "license"}
                                    className="fill-blue-600 size-12"
                                />
                            </motion.div>
                            <motion.span layoutId={`caption-${active.id}`}>
                                {active.serviceGroupCaption}
                            </motion.span>
                        </div>
                        <div>کد خدمت: {active.code}</div>
                    </div>
                    <motion.h3
                        id={`${id}-title`}
                        layoutId={`title-${active.id}`}
                        className="text-lg font-semibold"
                    >
                        {active.title}
                    </motion.h3>
                    <hr className="my-3 border-zinc-300 dark:border-zinc-600"/>
                    <p id={`${id}-description`} className="text-sm">
                        {active.description}
                    </p>
                    {active.avgTime &&
                        <p>
                            <span className="pr-2">متوسط زمان اخذ خدمت: </span>
                            <span className="font-bold">{active.avgTime}</span>
                        </p>
                    }
                    <ul className="mt-3 flex gap-3 flex-wrap items-center">
                        <li>
                            <span title="نیاز به مراجعه حضوری"
                                  className={`text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${active.needPresence ? 'bg-zinc-600' : 'bg-green-950'}`}>
                                {active.needPresence ? 'مراجعه حضوری' : 'مراجعه غیرحضوری'}
                            </span>
                        </li>
                        <li>
                            <span title="نحوه ارائه خدمت"
                                  className={`text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${active.electronics ? 'bg-zinc-600' : 'bg-green-950'}`}>
                                {active.electronics ? 'الکترونیکی' : 'غیرالکترونیکی'}
                            </span>
                        </li>
                        <li>
                            <span title="پرداخت هزینه"
                                  className={`text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${active.cost ? 'bg-zinc-600' : 'bg-green-950'}`}>
                                {active.cost ? 'رایگان' : 'مشمول هزینه'}
                            </span>
                        </li>
                    </ul>
                </div>
                <div
                    className="flex border-t border-zinc-300 divide-x divide-zinc-300 dark:border-zinc-600 dark:divide-zinc-600">
                    <Link
                        href={`/details/${active.id}`}
                        className="w-full text-center block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-sm"
                    >
                        جزیئات بیشتر
                    </Link>
                    <Link
                        href={`/request/${active.id}`}
                        className="w-full text-center block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-sm"
                    >
                        ثبت درخواست
                    </Link>
                </div>
            </motion.div>
        );
    }
);

// Set display name for better debugging
ExpandedCardBadge.displayName = "ExpandedCardBadge";