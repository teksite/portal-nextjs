import { LicenseType } from "@/models";

export type ListItemProps = {
	data: LicenseType;
	withBadge?: boolean;
	onShowRegister: (data: LicenseType) => void;
	onShowDetail: (data: LicenseType) => void;
	children?: React.ReactElement;
};

export const colorMap: { [key: string]: { bg: string; fill: string; border: string ; text: string } } = {
	cyan: { bg: "bg-cyan-100", fill: "fill-cyan-800", border: "border-cyan-800/30" ,text: "text-cyan-800" },
	purple: { bg: "bg-purple-100", fill: "fill-purple-800", border: "border-purple-800/30" ,text: "text-purple-800" },
	yellow: { bg: "bg-yellow-100", fill: "fill-yellow-800", border: "border-yellow-800/30" ,text: "text-yellow-800" },
	stone: { bg: "bg-stone-100", fill: "fill-stone-800", border: "border-stone-800/30" ,text: "text-stone-800" },
	red: { bg: "bg-red-100", fill: "fill-red-800", border: "border-red-800/30" ,text: "text-red-800" },
	amber: { bg: "bg-amber-100", fill: "fill-amber-800", border: "border-amber-800/30" ,text: "text-amber-800" },
	lime: { bg: "bg-lime-100", fill: "fill-lime-800", border: "border-lime-800/30" ,text: "text-lime-800" },
	emerald: { bg: "bg-emerald-100", fill: "fill-emerald-800", border: "border-emerald-800/30" ,text: "text-emerald-800" },
	slate: { bg: "bg-slate-100", fill: "fill-slate-800", border: "border-slate-800/30" ,text: "text-slate-800" },
	blue: { bg: "bg-blue-100", fill: "fill-blue-800", border: "border-blue-800/30" ,text: "text-blue-800" },
	green: { bg: "bg-green-100", fill: "fill-green-800", border: "border-green-800/30" ,text: "text-green-800" },
	fuchsia: { bg: "bg-fuchsia-100", fill: "fill-fuchsia-800", border: "border-fuchsia-800/30" ,text: "text-fuchsia-800" },
	rose: { bg: "bg-rose-100", fill: "fill-rose-800", border: "border-rose-800/30" ,text: "text-rose-800" },

};