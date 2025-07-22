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
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0 0v-600zm86-97h429q8.5 0 12.75-8t-.75-16L590-457q-5-6-12-6t-12 6L446-302l-81-111q-5-6-12-6t-12 6l-86 112q-6 8-1.75 16t12.75 8m74.12-293q20.88 0 35.38-14.62t14.5-35.5-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5" />
	</svg>
);
export default SvgHonar;
