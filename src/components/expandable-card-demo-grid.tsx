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
                        <motion.button
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
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full w-fit"
                            onClick={() => setActive(null)}
                        >
                            <XMarkIcon className="stroke-red-900 fill-none dark:stroke-red-600"/>
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]   flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div className="mb-1" layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={/*active?.src*/'https://assets.aceternity.com/demos/lana-del-rey.jpeg'}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div className="">
                                <div className="p-3">
                                    <motion.div className="py-1 flex items-center justify-between text-zinc-600">
                                        <span className="block">کد: {active.code}</span>
                                        <motion.span layoutId={`description-${active.serviceGroupCaption}-${id}`} className="block">گروه: {active.serviceGroupCaption}</motion.span>
                                    </motion.div>

                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="h3 text-center">
                                        {active.title}
                                    </motion.h3>
                                    <p

                                        className="text my-6">
                                        {active.description}
                                    </p>
                                    <div className="flex items-center justify-end p-3">
                                        {active.cost?<CurrencyDollarIcon className="stroke-green-900 size-6" />:''}
                                        {active.electronics?<PersonStandingIcon className="stroke-blue-900 size-6" />:''}
                                        {active.needPresence?<UserIcon className="stroke-purple-900 size-6" />:''}
                                        <span>{active?.avgTime}</span>
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
                                        بستن
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
                        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={/*active?.src*/'https://assets.aceternity.com/demos/lana-del-rey.jpeg'}
                                    alt={card.title}
                                    className="h-60 w-full rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.serviceGroupCaption}-${id}`}
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

const cards = mockServiceList1;
// const cards = [
// 	{
// 		description: "Lana Del Rey",
// 		title: "Summertime Sadness",
// 		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Lana Del Rey, an iconic American singer-songwriter, is celebrated for
// 					her melancholic and cinematic music style. Born Elizabeth Woolridge
// 					Grant in New York City, she has captivated audiences worldwide with
// 					her haunting voice and introspective lyrics. <br /> <br /> Her songs
// 					often explore themes of tragic romance, glamour, and melancholia,
// 					drawing inspiration from both contemporary and vintage pop culture.
// 					With a career that has seen numerous critically acclaimed albums, Lana
// 					Del Rey has established herself as a unique and influential figure in
// 					the music industry, earning a dedicated fan base and numerous
// 					accolades.
// 				</p>
// 			);
// 		},
// 	},
// 	{
// 		description: "Babbu Maan",
// 		title: "Mitran Di Chhatri",
// 		src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Babu Maan, a legendary Punjabi singer, is renowned for his soulful
// 					voice and profound lyrics that resonate deeply with his audience. Born
// 					in the village of Khant Maanpur in Punjab, India, he has become a
// 					cultural icon in the Punjabi music industry. <br /> <br /> His songs
// 					often reflect the struggles and triumphs of everyday life, capturing
// 					the essence of Punjabi culture and traditions. With a career spanning
// 					over two decades, Babu Maan has released numerous hit albums and
// 					singles that have garnered him a massive fan following both in India
// 					and abroad.
// 				</p>
// 			);
// 		},
// 	},
//
// 	{
// 		description: "Metallica",
// 		title: "For Whom The Bell Tolls",
// 		src: "https://assets.aceternity.com/demos/metallica.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Metallica, an iconic American heavy metal band, is renowned for their
// 					powerful sound and intense performances that resonate deeply with
// 					their audience. Formed in Los Angeles, California, they have become a
// 					cultural icon in the heavy metal music industry. <br /> <br /> Their
// 					songs often reflect themes of aggression, social issues, and personal
// 					struggles, capturing the essence of the heavy metal genre. With a
// 					career spanning over four decades, Metallica has released numerous hit
// 					albums and singles that have garnered them a massive fan following
// 					both in the United States and abroad.
// 				</p>
// 			);
// 		},
// 	},
// 	{
// 		description: "Lord Himesh",
// 		title: "Aap Ka Suroor",
// 		src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Himesh Reshammiya, a renowned Indian music composer, singer, and
// 					actor, is celebrated for his distinctive voice and innovative
// 					compositions. Born in Mumbai, India, he has become a prominent figure
// 					in the Bollywood music industry. <br /> <br /> His songs often feature
// 					a blend of contemporary and traditional Indian music, capturing the
// 					essence of modern Bollywood soundtracks. With a career spanning over
// 					two decades, Himesh Reshammiya has released numerous hit albums and
// 					singles that have garnered him a massive fan following both in India
// 					and abroad.
// 				</p>
// 			);
// 		},
// 	},
//
// 	{
// 		description: "Lana Del Rey1",
// 		title: "Summertime Sadness1",
// 		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Lana Del Rey, an iconic American singer-songwriter, is celebrated for
// 					her melancholic and cinematic music style. Born Elizabeth Woolridge
// 					Grant in New York City, she has captivated audiences worldwide with
// 					her haunting voice and introspective lyrics. <br /> <br /> Her songs
// 					often explore themes of tragic romance, glamour, and melancholia,
// 					drawing inspiration from both contemporary and vintage pop culture.
// 					With a career that has seen numerous critically acclaimed albums, Lana
// 					Del Rey has established herself as a unique and influential figure in
// 					the music industry, earning a dedicated fan base and numerous
// 					accolades.
// 				</p>
// 			);
// 		},
// 	},
// 	{
// 		description: "Babbu Maan1",
// 		title: "Mitran Di Chhatri1",
// 		src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Babu Maan, a legendary Punjabi singer, is renowned for his soulful
// 					voice and profound lyrics that resonate deeply with his audience. Born
// 					in the village of Khant Maanpur in Punjab, India, he has become a
// 					cultural icon in the Punjabi music industry. <br /> <br /> His songs
// 					often reflect the struggles and triumphs of everyday life, capturing
// 					the essence of Punjabi culture and traditions. With a career spanning
// 					over two decades, Babu Maan has released numerous hit albums and
// 					singles that have garnered him a massive fan following both in India
// 					and abroad.
// 				</p>
// 			);
// 		},
// 	},
//
// 	{
// 		description: "Metallica1",
// 		title: "For Whom The Bell Tolls1",
// 		src: "https://assets.aceternity.com/demos/metallica.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Metallica, an iconic American heavy metal band, is renowned for their
// 					powerful sound and intense performances that resonate deeply with
// 					their audience. Formed in Los Angeles, California, they have become a
// 					cultural icon in the heavy metal music industry. <br /> <br /> Their
// 					songs often reflect themes of aggression, social issues, and personal
// 					struggles, capturing the essence of the heavy metal genre. With a
// 					career spanning over four decades, Metallica has released numerous hit
// 					albums and singles that have garnered them a massive fan following
// 					both in the United States and abroad.
// 				</p>
// 			);
// 		},
// 	},
// 	{
// 		description: "Lord Himesh1",
// 		title: "Aap Ka Suroor1",
// 		src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
// 		ctaText: "Visit",
// 		ctaLink: "https://ui.aceternity.com/templates",
// 		content: () => {
// 			return (
// 				<p>
// 					Himesh Reshammiya, a renowned Indian music composer, singer, and
// 					actor, is celebrated for his distinctive voice and innovative
// 					compositions. Born in Mumbai, India, he has become a prominent figure
// 					in the Bollywood music industry. <br /> <br /> His songs often feature
// 					a blend of contemporary and traditional Indian music, capturing the
// 					essence of modern Bollywood soundtracks. With a career spanning over
// 					two decades, Himesh Reshammiya has released numerous hit albums and
// 					singles that have garnered him a massive fan following both in India
// 					and abroad.
// 				</p>
// 			);
// 		},
// 	},
// ];
