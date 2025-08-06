import * as React from "react";
import type { SVGProps } from "react";
const SvgHonar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={48}
		height={48}
		fill="currentColor"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm86-157h429q9 0 13-8t-1-16L590-457q-5-6-12-6t-12 6L446-302l-81-111q-5-6-12-6t-12 6l-86 112q-6 8-2 16t13 8m74-293q21 0 35.5-14.5T390-620t-14.5-35.5T340-670t-35.5 14.5T290-620t14.5 35.5T340-570" />
	</svg>
);
export default SvgHonar;
