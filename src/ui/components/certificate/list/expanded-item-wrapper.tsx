"use client";

import React, { useEffect, useId, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconPicker } from "@/ui/components/icons/icon";
import clsx from "clsx";
import { LicenseType } from "@/models/licenseModel";
import { ExpandedCardContent } from "@/components/popup-with-text";
import { ExpandedCardBadge } from "@/components/popup-with-badge";
import { ListItemProps } from "./shared";

export const ExpandedItemWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const id = useId();

	// Animation variants for performance
	const cardVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
		exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
	};

	return (
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
			{children}
		</motion.div>
	);
};

export const Expanded = ({
	data,
	withBadge,
	onShowRegister,
	onShowDetail,
}: ListItemProps) => {
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
			{!withBadge ? (
				<ExpandedCardContent active={active} id={id} ref={ref} />
			) : (
				<ExpandedCardBadge active={active} id={id} ref={ref} />
			)}
		</motion.div>
	);
};
