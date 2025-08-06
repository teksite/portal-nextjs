import Image from "next/image";
import React from "react";

export function SmallLogoImage(
	props: Omit<React.ComponentProps<typeof Image>, "src" | "alt">
) {
	return <Image {...props} src="/assets/images/logo/logo.png" alt="logo" />;
}
