import * as React from "react";
import type { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={48}
		height={48}
		fill="currentColor"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M235-333h340q9.21 0 13.1-8 3.9-8-1.1-16l-99-135q-2.29-3-5.33-4.5-3.05-1.5-6.86-1.5t-6.72 1.5T464-492l-82 109q-2 3-5.5 4t-6.5 1-6.5-1-5.5-4l-47-60q-2.45-2.86-5.73-3.93Q302-448 299-448t-6.5 1.5-5.5 4.5l-64 85q-5 8-1.1 16 3.89 8 13.1 8m-95 173q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v215l134-134q7-7 16.5-3.46T880-649v338q0 9.92-9.5 13.46T854-301L720-435v215q0 24-18 42t-42 18zm0-60h520v-520H140zm0 0v-520z" />
	</svg>
);
export default SvgFilm;
