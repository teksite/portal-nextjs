import { motion } from "motion/react";
import { IconPicker } from "@/ui/components/icons/icon";
import Link from "next/link";
import React from "react";
import { LicenseType } from "@/models/licenseModel";
import { ListItemProps } from "./shared";
import { GenericItemCollapsedProps } from "./types";

export type ItemCollapsedProps = GenericItemCollapsedProps;

export const ItemCollapsed = ({
	id,
	data,
	onExpand,
}: GenericItemCollapsedProps) => {
	return (
		<motion.div
			data-id={id}
			layoutId={`card-${id}`}
			key={id}
			onClick={() => onExpand && onExpand(id)}
			className="flex gap-3 items-center x-box hover:shadow-md cursor-pointer transition-shadow duration-200"
			role="button"
			tabIndex={0}
			onKeyPress={(e) =>
				(e.key === "Enter" || e.key === " ") && onExpand && onExpand(id)
			}
		>
			<motion.div layoutId={`image-${id}`}>
				<IconPicker
					name={data.icon || "license"}
					className="fill-blue-600 size-12"
				/>
			</motion.div>
			<div>
				<motion.h3
					layoutId={`title-${id}`}
					className="font-medium text-neutral-800 dark:text-neutral-200"
				>
					{data.title}
				</motion.h3>
				<motion.span
					layoutId={`caption-${id}`}
					className="text-neutral-600 dark:text-neutral-400"
				>
					{data.serviceGroupCaption}
				</motion.span>
			</div>
		</motion.div>
	);
};
