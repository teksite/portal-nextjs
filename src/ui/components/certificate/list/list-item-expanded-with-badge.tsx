import { motion } from "motion/react";
import { IconPicker } from "@/ui/components/icons/icon";
import Link from "next/link";
import React from "react";
import { LicenseType } from "@/models/licenseModel";
import { ListItemProps } from "./shared";

export type ExpandedWithBadgeProps = ListItemProps;

export const ExpandedWithBadge = React.forwardRef<
	HTMLDivElement,
	ExpandedWithBadgeProps
>(({ data }, ref) => {
	const { id } = data;
	return (
		<motion.div
			layoutId={`card-${id}`}
			ref={ref}
			className="w-full max-w-[500px] h-fit flex flex-col x-box p-0 overflow-hidden"
		>
			<div className="p-6">
				<div className="mb-3">
					<div className="flex items-center gap-3 justify-start">
						<motion.div layoutId={`image-${id}`}>
							<IconPicker
								name={data.icon || "license"}
								className="fill-blue-600 size-12"
							/>
						</motion.div>
						<motion.span layoutId={`caption-${id}`}>
							{data.serviceGroupCaption}
						</motion.span>
					</div>
					<div>کد خدمت: {data.code}</div>
				</div>
				<motion.h3
					id={`${id}-title`}
					layoutId={`title-${id}`}
					className="text-lg font-semibold"
				>
					{data.title}
				</motion.h3>
				<hr className="my-3 border-zinc-300 dark:border-zinc-600" />
				<p id={`${id}-description`} className="text-sm">
					{data.description}
				</p>
				{data.avgTime && (
					<p>
						<span className="pr-2">متوسط زمان اخذ خدمت: </span>
						<span className="font-bold">{data.avgTime}</span>
					</p>
				)}
				<ul className="mt-3 flex gap-3 flex-wrap items-center">
					<li>
						<span
							title="نیاز به مراجعه حضوری"
							className={`text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${
								data.needPresence ? "bg-zinc-600" : "bg-green-950"
							}`}
						>
							{data.needPresence ? "مراجعه حضوری" : "مراجعه غیرحضوری"}
						</span>
					</li>
					<li>
						<span
							title="نحوه ارائه خدمت"
							className={`text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${
								data.electronics ? "bg-zinc-600" : "bg-green-950"
							}`}
						>
							{data.electronics ? "الکترونیکی" : "غیرالکترونیکی"}
						</span>
					</li>
					<li>
						<span
							title="پرداخت هزینه"
							className={`text-xs text-zinc-50 font-bold py-1 px-2 rounded-xl ${
								data.cost ? "bg-zinc-600" : "bg-green-950"
							}`}
						>
							{data.cost ? "رایگان" : "مشمول هزینه"}
						</span>
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
});
