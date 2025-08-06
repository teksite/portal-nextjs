import React, { useEffect, useRef, useState } from "react";

export function useConstant<T>(factory: () => T): T {
	const ref = useRef<{ value?: T }>({});
	if (ref.current.value === undefined) {
		ref.current.value = factory();
	}
	return ref.current.value;
}
