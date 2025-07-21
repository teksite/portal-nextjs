"use client";

import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useOutsideClick} from "@/hooks/use-outside-click";
import {mockServiceList1} from "@/mock";
import {PersonStandingIcon, UserIcon, XCircle} from "lucide-react";
import {CurrencyDollarIcon, XMarkIcon} from "@heroicons/react/16/solid";

export function ExpandableCardDemoGrid() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

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
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">

                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] relative flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.button
                                title="بستن"
                                key={`button-${active.title}-${id}`}
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
                                // style={{ backgroundColor: "aliceblue" }}
                                className="flex absolute top-2 right-2  items-center justify-center bg-white rounded-full w-6 h-6"
                                onClick={() => setActive(null)}
                            >
                                <XMarkIcon className="stroke-red-900 fill-none dark:stroke-red-600"/>
                            </motion.button>
                            <motion.div className="mb-1" layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.image}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div className="">
                                <div className="p-3">
                                    <motion.div className="py-1 flex items-center justify-between text-zinc-600">
                                        <span className="block">کد: {active.code}</span>
                                        <motion.span layoutId={`description-${active.serviceGroupCaption}-${active.id}`} className="block">گروه: {active.serviceGroupCaption}</motion.span>
                                    </motion.div>

                                    <motion.h3
                                        layoutId={`title-${active.title}-${active.id}`}
                                        className="h3 text-center">
                                        {active.title}
                                    </motion.h3>
                                    <p

                                        className="text my-6">
                                        {active.description}
                                    </p>
                                    <div className="flex items-center justify-end p-3">
                                        {active.cost?<span className="border p-1 rounded-full border-zinc-300 w-[30px] min-w-fit aspect-square"  title="هزینه"><CurrencyDollarIcon className="stroke-green-900 size-6" /></span>:''}
                                        {active.electronics?<span className="border p-1 rounded-full border-zinc-300 w-[30px] min-w-fit aspect-square"  title="نحوه ارائه: الکترونیکی"><PersonStandingIcon className="stroke-blue-900 size-6" /></span>:''}
                                        {active.needPresence?<span className="border p-1 rounded-full border-zinc-300 w-[30px] min-w-fit aspect-square"  title="نیاز به حضور: دارد"><UserIcon className="stroke-purple-900 size-6" /></span>:''}
                                        <span className="border p-1 rounded-full border-zinc-300 w-[30px] min-w-fit aspect-square" title="زمان">{active?.avgTime}</span>
                                    </div>
                                </div>
                                <motion.div
                                    className='flex border-t border-zinc-300 divide-x divide-zinc-300  dark:border-zinc-600  dark:divide-zinc-600'>
                                    <button
                                        className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"

                                    >
                                        جزئیات بیشتر
                                    </button>
                                    <button
                                        className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"

                                    >
                                        ثبت درخواست
                                    </button>

                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="x-box p-0 cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.image}
                                    alt={card.title}
                                    className="h-60 w-full rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${card.id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.serviceGroupCaption}-${card.id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.serviceGroupCaption}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
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
            stroke="stroke-red-600"
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

const cards = mockServiceList1;

