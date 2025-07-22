import React, { useEffect, useRef, useState } from "react";

export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement | null>,
	callback: Function
) => {
	const refCallback = useRef(callback);
	refCallback.current = callback;
	useEffect(() => {
		const listener = (event: any) => {
			// DO NOTHING if the element being clicked is the target element or their children
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			refCallback.current(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, []);
};
