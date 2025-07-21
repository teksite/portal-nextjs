"use client";

import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useOutsideClick} from "@/hooks/use-outside-click";
import {IconPicker} from "@/ui/components/icons/icon";
import Link from "next/link";
import {LicenseType} from "@/models/licenseModel";

export function ExpandableCardDemoList({cards ,className="grid gap-6 lg:grid-cols-2"}:{cards:LicenseType[] ,className ?: string}) {
    const [active, setActive] = useState<null|LicenseType|boolean>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence >
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm" dir="rtl">
                        <motion.button
                            key={`button-${active.title}-${active.id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black rounded-full h-6 w-6"
                            onClick={() => setActive(null)}>
                            <CloseIcon/>
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${active.id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit flex flex-col x-box p-0 overflow-hiddenr">
                            <div className="p-6">
                                <div className=" mb-3">
                                    <div className="flex items-center gap-3 justify-start">
                                        <motion.div layoutId={`image-${active.title}-${active.id}`}>
                                            <IconPicker name={active.icon || "license"} className="fill-blue-600 size-12"/>
                                        </motion.div>
                                        <motion.span
                                            layoutId={`description-${active.serviceGroupCaption}-${active.id}`}>
                                            {active.serviceGroupCaption}
                                        </motion.span>

                                    </div>
                                    <div>
                                        کد خدمت: {active.code}
                                    </div>
                                </div>
                                <motion.h3
                                    layoutId={`title-${active.title}-${active.id}`}
                                    className="">
                                    {active.title}
                                </motion.h3>
                                <hr className="hr my-3"/>
                                <p className="text-sm">
                                    {active.description || 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی'}
                                </p>
                                <ul>
                                    <li>
                                        <span className="p">نیاز به مراجعه حضوری دارد: </span>
                                        <span className="p font-bold">{active.needPresence ? 'دارد' : 'ندارد'}</span>
                                    </li>
                                    <li>
                                        <span className="p">نحوه ارائه خدمت: </span>
                                        <span
                                            className="p font-bold">{active.electronics == 1 ? 'الکترونیکی' : 'غیرالکترونیکی'}</span>
                                    </li>
                                    <li>
                                        <span className="p">نیاز به پرداخت هزینه: </span>
                                        <span className="p font-bold">{active.cost ? 'دارد' : 'ندارد'}</span>
                                    </li>
                                    <li>
                                        <span className="p">متوسط زمان اخذ خدمت: </span>
                                        <span className="p font-bold">{active.avgTime ?? '-'}</span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className='flex border-t border-zinc-300 divide-x divide-zinc-300  dark:border-zinc-600  dark:divide-zinc-600'>
                                <Link href=""
                                      className="w-full text-center block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm">
                                    جزئیات بیشتر
                                </Link>
                                <Link href=""
                                      className="w-full text-center block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm">
                                    ثبت درخواست
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className={className}>
                {cards?.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${card.id}`}
                        key={`card-${card.title}-${card.id}`}
                        onClick={() => setActive(card)}
                        className="x-box flex gap-3 items-center  transition  duration-200 hover:shadow-sm ease-linea">
                        <motion.div layoutId={`image-${card.title}-${card.id}`}>
                            <IconPicker name={card.icon || "license"} className=" fill-blue-600 size-12" />
                        </motion.div>
                        <div className="">
                            <motion.h3
                                layoutId={`title-${card.title}-${card.id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                                {card.title}
                            </motion.h3>
                            <motion.span
                                layoutId={`description-${card.serviceGroupCaption}-${card.id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                            >
                                {card.serviceGroupCaption}
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6l-12 12"/>
            <path d="M6 6l12 12"/>
        </motion.svg>
    );
};

