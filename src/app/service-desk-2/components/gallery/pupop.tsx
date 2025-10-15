import Link from "next/link";
import { LicenseGroup, LicenseType } from "@/models";
import mockData from "@/mock/mock-all-licenses-data.json";
import { LicenseIcon } from "@/ui/components/certificate/icons";
import { colorMap } from "@/ui/components/certificate/list/shared";
import { motion } from "motion/react";
import { useGroupData, uselicenseData } from "@/app/service-desk-2/components";

export const Pupop = ({ id, data }: { id: string; data: LicenseType }) => {
	// const groups: Record<string, LicenseGroup> = mockData.groups;
	const license = uselicenseData(id);
	const groupId = license.groupId;
	const group = useGroupData(groupId);
	const { fill } = colorMap[group.color ?? "gray"] || { fill: "fill-gray-800" };

	return (
		<motion.div
			layout
			layoutId={`card-${id}`}
			className="w-full max-w-md flex flex-col rounded-lg shadow-lg bg-white dark:bg-zinc-800 overflow-hidden"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			<div className="p-6">
				<motion.h4
					layoutId={`title-${id}`}
					className="text-xl font-semibold text-center text-zinc-900 dark:text-zinc-100"
				>
					{license.title}
				</motion.h4>
				<div className="flex items-center justify-between mt-4">
					<motion.div
						className="flex items-center gap-3"
						layoutId={`cap-${id}`}
					>
						<LicenseIcon
							name={group.name ?? "Sayer"}
							className={`size-6 ${fill}`}
						/>
						<span className="text-sm font-medium">
							{license.serviceGroupCaption ?? "بدون گروه"}
						</span>
					</motion.div>
					<span className="text-sm text-zinc-600 dark:text-zinc-400">
						کد خدمت: {license.code}
					</span>
				</div>
				<hr className="my-3 border-zinc-300 dark:border-zinc-600" />
				<div className="max-h-[300px] overflow-y-auto space-y-3">
					<table className="w-full text-sm">
						<tbody>
							<tr className="border-b border-zinc-100">
								<td className="p-3 w-32">نحوه اخذ خدمت</td>
								<td className="p-3">
									<span
										className={`px-2 py-1 rounded ${
											license.needPresence
												? "text-red-600 bg-red-100"
												: "text-green-600 bg-green-100"
										}`}
									>
										{license.needPresence ? "حضوری" : "غیرحضوری"}
									</span>
								</td>
							</tr>
							<tr className="border-b border-zinc-100">
								<td className="p-3 w-32">هزینه</td>
								<td className="p-3">
									<span
										className={`px-2 py-1 rounded ${
											license.cost
												? "text-red-600 bg-red-100"
												: "text-green-600 bg-green-100"
										}`}
									>
										{license.cost ? "مشمول هزینه" : "رایگان"}
									</span>
								</td>
							</tr>
							<tr className="border-b border-zinc-100">
								<td className="p-3 w-32">نحوه ارائه خدمت</td>
								<td className="p-3">
									<span
										className={`px-2 py-1 rounded ${
											license.electronics == 0
												? "text-gray-600 bg-gray-100"
												: license.electronics == 1
												? "text-green-600 bg-green-100"
												: "text-blue-600 bg-blue-100"
										}`}
									>
										{license.electronics == 0
											? "غیرالکترونیکی"
											: license.electronics == 1
											? "الکترونیکی"
											: "ترکیبی"}
									</span>
								</td>
							</tr>
							<tr className="border-b border-zinc-100">
								<td className="p-3 w-32">مدت زمان اخذ خدمت</td>
								<td className="p-3">{license.avgTime ?? "-"}</td>
							</tr>
						</tbody>
					</table>
					{license.description && (
						<motion.p
							id={`${id}-description`}
							className="text-sm text-zinc-700 dark:text-zinc-300"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.2, delay: 0.3 }}
						>
							{license.description}
						</motion.p>
					)}
					<Link
						href={`/service-desk-2/${id}`}
						className="text-blue-600 hover:text-blue-800 text-sm inline-block"
					>
						جزئیات بیشتر
					</Link>
				</div>
			</div>
			<div className="flex border-t border-zinc-300 divide-x divide-zinc-300 dark:border-zinc-600 dark:divide-zinc-600">
				<button className="flex-1 p-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
					بستن
				</button>
				<Link
					href="#"
					className="flex-1 p-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-center"
				>
					ثبت درخواست
				</Link>
			</div>
		</motion.div>
	);
};
