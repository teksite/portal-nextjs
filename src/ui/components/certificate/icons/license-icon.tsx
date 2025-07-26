import * as React from "react";
import { SVGProps } from "react";
import * as allIcons from "./normal";

type IconProps = {
	name: keyof typeof allIcons;
	size?: number;
	color?: string;
} & Omit<SVGProps<SVGSVGElement>, "name" | "width" | "height" | "fill">;

export function LicenseIcon({ name, size = 48, ...svgProps }: IconProps) {
	const SvgComponent = allIcons[name];
	if (!SvgComponent) {
		console.error(`Icon "${name}" not found in allIcons`);
		return (
			<svg width={size} height={size} {...svgProps}>
				<rect width={size} height={size} fill="gray" />
			</svg>
		); // Fallback SVG
	}
	return <SvgComponent width={size} height={size} {...svgProps} />;
}

export const licenseIconNames = Object.keys(allIcons) as any as (keyof typeof allIcons)[];