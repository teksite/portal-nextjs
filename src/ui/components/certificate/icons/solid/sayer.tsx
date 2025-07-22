import * as React from "react";
import type { SVGProps } from "react";
const SvgSayer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={48}
		height={48}
		fill="currentColor"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m289-572 167-267q5-7 11-10.5t14-3.5 14 3.5 11 10.5l167 267q5 8 4.5 16t-4.5 15-10.6 11-15.4 4H315q-8.91 0-15.6-4.13-6.69-4.12-10.4-10.87-4-7-4.5-15t4.5-16M706-80q-72.5 0-123.25-50.75T532-254t50.75-123.25T706-428t123.25 50.75T880-254t-50.75 123.25T706-80m-586-55v-244q0-12.75 8.63-21.38Q137.25-409 150-409h244q12.75 0 21.38 8.62Q424-391.75 424-379v244q0 12.75-8.62 21.37Q406.75-105 394-105H150q-12.75 0-21.37-8.63Q120-122.25 120-135" />
	</svg>
);
export default SvgSayer;
