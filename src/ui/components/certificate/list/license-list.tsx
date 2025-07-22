"use client";

import React, { useCallback, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LicenseType } from "@/models/licenseModel";
import { arrayToObjectByKey, cn } from "@/lib";
import { GenericItemCollapsedProps, GenericItemExpandedProps } from "./types";
import { useEscapeKey, useOutsideClick } from "@/hooks";

export type LicenseListProps = {
	expandedComponent: React.ComponentType<GenericItemExpandedProps>;
	collapsedComponent: React.ComponentType<GenericItemCollapsedProps>;
	data: LicenseType[];
	className?: string;
	overlayClassName?: string;
};
export const LicenseList = ({
	data,
	className = "grid gap-6 lg:grid-cols-2",
	expandedComponent,
	collapsedComponent,
	overlayClassName,
}: LicenseListProps) => {
	const ExpandedComponent = expandedComponent;
	const CollapsedComponent = collapsedComponent;

	const [activeId, setActiveId] = React.useState<string | null>();
	const dataDict = useMemo(() => arrayToObjectByKey(data, "id"), [data]);
	const closeHandler = useCallback(() => setActiveId(null), []);
	useEscapeKey(closeHandler);
	const handleExpand = useCallback(
		(expandedItemId: string) => setActiveId(expandedItemId),
		[]
	);

	const itemClickHandler = useCallback<React.MouseEventHandler<HTMLDivElement>>(
		(e) => {},
		[]
	);

	return (
		<>
			<AnimatePresence>
				{activeId && (
					<motion.div
						// ref={ref}
						onClick={closeHandler}
						className={cn(
							"fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm",
							overlayClassName
						)}
						dir="rtl"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={cardVariants}
						role="dialog"
						aria-labelledby={`${activeId}-title`}
						aria-describedby={`${activeId}-description`}
					>
						<ExpandedComponent id={activeId} data={dataDict[activeId]} />
					</motion.div>
				)}
			</AnimatePresence>
			<div className={cn("p-4", className)}>
				{data.length === 0 ? (
					<p className="text-center text-neutral-600 dark:text-neutral-400">
						هیچ کارتی برای نمایش وجود ندارد.
					</p>
				) : (
					data.map((card) => (
						<CollapsedComponent
							id={card.id}
							data={card}
							onExpand={handleExpand}
						/>
					))
				)}
			</div>
		</>
	);
};

const cardVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
	exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
};

function useShouldClose(
	callback: () => void
): React.RefObject<HTMLDivElement | null> {
	const ref = useRef<HTMLDivElement>(null);
	useEscapeKey(callback);
	useOutsideClick(ref, callback);
	return ref;
}
