"use client";

import React, { useEffect, useId, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconPicker } from "@/ui/components/icons/icon";
import clsx from "clsx";
import { LicenseType } from "@/models/licenseModel";
import { ExpandedCardContent } from "@/components/popup-with-text";
import { ExpandedCardBadge } from "@/components/popup-with-badge";

export const ExpandableCardDemoList = React.memo(
	({
		cards,
		className = "grid gap-6 lg:grid-cols-2",
		withBadge = true,
	}: {
		cards: LicenseType[];
		className?: string;
		withBadge: boolean;
	}) => {
		const [active, setActive] = React.useState<LicenseType | null>(null);
		const ref = useRef<HTMLDivElement>(null);
		const id = useId();

		const handleKeyDown = useCallback((event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActive(null);
			}
		}, []);

		// Add keydown listener only once
		useEffect(() => {
			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		}, [handleKeyDown]);

		useOutsideClick(ref, () => setActive(null));

		const handleCardClick = useCallback((card: LicenseType) => {
			setActive(card);
		}, []);

		// Animation variants for performance
		const cardVariants = {
			hidden: { opacity: 0, scale: 0.95 },
			visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
			exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
		};

		return (
			<>
				<AnimatePresence>
					{active && (
						<motion.div
							className="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
							dir="rtl"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={cardVariants}
							role="dialog"
							aria-labelledby={`${id}-title`}
							aria-describedby={`${id}-description`}
						>
							<motion.button
								key={`button-${active.id}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.1 } }}
								className="absolute top-2 right-2 lg:hidden flex items-center justify-center bg-black rounded-full h-6 w-6"
								onClick={() => setActive(null)}
								aria-label="بستن"
							>
								<CloseIcon />
							</motion.button>
							{!withBadge ? (
								<ExpandedCardContent active={active} id={id} ref={ref} />
							) : (
								<ExpandedCardBadge active={active} id={id} ref={ref} />
							)}
						</motion.div>
					)}
				</AnimatePresence>
				<div className={clsx("p-4", className)}>
					{cards.length === 0 ? (
						<p className="text-center text-neutral-600 dark:text-neutral-400">
							هیچ کارتی برای نمایش وجود ندارد.
						</p>
					) : (
						cards.map((card) => (
							<motion.div
								layoutId={`card-${card.id}`}
								key={card.id}
								onClick={() => handleCardClick(card)}
								className="flex gap-3 items-center x-box hover:shadow-md cursor-pointer transition-shadow duration-200"
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleCardClick(card);
									}
								}}
							>
								<motion.div layoutId={`image-${card.id}`}>
									<IconPicker
										name={card.icon || "license"}
										className="fill-blue-600 size-12"
									/>
								</motion.div>
								<div>
									<motion.h3
										layoutId={`title-${card.id}`}
										className="font-medium text-neutral-800 dark:text-neutral-200"
									>
										{card.title}
									</motion.h3>
									<motion.span
										layoutId={`caption-${card.id}`}
										className="text-neutral-600 dark:text-neutral-400"
									>
										{card.serviceGroupCaption}
									</motion.span>
								</div>
							</motion.div>
						))
					)}
				</div>
			</>
		);
	}
);

export const CloseIcon = React.memo(() => (
	<motion.svg
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0, transition: { duration: 0.1 } }}
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
));
