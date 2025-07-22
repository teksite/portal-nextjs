import { useEffect, useRef } from "react";

/**
 * Calls `handler(event)` whenever the Escape key is pressed.
 */
export function useEscapeKey(handler: (event: KeyboardEvent) => void) {
	const handlerRef = useRef(handler);
	handlerRef.current = handler;

	useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (event.key === "Escape" || event.key === "Esc") {
				handlerRef.current(event);
			}
		};

		document.addEventListener("keydown", listener);
		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, []);
}
