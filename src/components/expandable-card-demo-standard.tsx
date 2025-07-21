"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {mockServiceList1} from "@/mock";

export function ExpandableCardDemoStandard() {
	const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
		null
	);
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
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0 grid place-items-center z-[100]">
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
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${active.id}`}
							ref={ref}
							className="w-full max-w-[500px] h-full md:h-fit  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
						>
							<motion.div layoutId={`image-${active.title}-${active.id}`}>
								<img
									width={200}
									height={200}
									src={active.image}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-stretch p-3 gap-3">
									<div className="w-full">
										<motion.h3
											layoutId={`title-${active.title}-${active.id}`}
											className="font-bold text-neutral-700 dark:text-neutral-200"
										>
											{active.title}
										</motion.h3>
										<div className="space-y-3">
											<motion.div
												layoutId={`title-${active.serviceGroupCaption}-${active.id}`}
												className=" text-neutral-700 dark:text-neutral-200"
											>
												({active.serviceGroupCaption})
											</motion.div>
											<div className="text-neutral-700 dark:text-neutral-200">
												کد خدمت :{active.code}
											</div>
											{active.cost ? <div className="text-neutral-700 dark:text-neutral-200">
												هزینه اخذ خدمت :{active.cost}
												</div> : ''}
											<div className="text-neutral-700 dark:text-neutral-200">
												نیاز به مراجعه حضوری :{active.needPresence ? 'دارد':'ندارد'}
											</div>
											<div className="text-neutral-700 dark:text-neutral-200">
												نحوه ارائه مجوز :{active.electronics ? 'الکترونیکی':'فیزیکی'}
											</div>

											<div className="text-neutral-700 dark:text-neutral-200">
												زمان مجوز :{active.avgTime}
											</div>
										</div>
										<hr className="my-6"/>
										<motion.p
											layoutId={`description-${active.description}-${active.id}`}
											className="p"
										>
											{active.description}
										</motion.p>
									</div>

									<div className="min-w-fit w-fit flex justify-start flex-col p-3 border-s border-zinc-300">
										<motion.a
											layoutId={`button-${active.title}-${active.id}`}
											href="#"
											target="_blank"
											className="block text-center p-3 text-blue-900 font-bold "
										>
											جزئیات
										</motion.a>
										<hr className="hr"/>
										<motion.a
											layoutId={`button-${active.title}-${active.id}-d`}
											href="#"
											target="_blank"
											className="block text-center p-3 text-green-900 font-bold "
										>
											ثبت
										</motion.a>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className="max-w-2xl mx-auto w-full gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${card.id}`}
						key={`card-${card.title}-${card.id}`}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
					>
						<div className="flex gap-4 flex-col md:flex-row ">
							<motion.div layoutId={`image-${card.title}-${card.id}`}>
								<img
									width={100}
									height={100}
									src={card.image}
									alt={card.title}
									className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
								/>
							</motion.div>
							<div className="">
								<motion.h3
									layoutId={`title-${card.title}-${card.id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
								>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.serviceGroupCaption}-${card.id}`}
									className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
								>
									{card.serviceGroupCaption}
								</motion.p>
							</div>
						</div>
						<motion.button
							layoutId={`button-${card.title}-${card.id}`}
							className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
						>
							جزئیات
						</motion.button>
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
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};

const cards = mockServiceList1;
