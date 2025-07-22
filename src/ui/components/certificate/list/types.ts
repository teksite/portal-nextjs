import { LicenseType } from "@/models";

export type GenericItemCollapsedProps = {
	id: string;
	data: LicenseType;
	onExpand?: (id: string) => void;
};

export type GenericItemExpandedProps = {
	id: string;
	data: LicenseType;
};

// type ParentProps = {
// 	// “component” must be a React component taking exactly { name: string }
// 	component: React.ComponentType<GreetingProps>;
// };

// export function Parent({ component: Component }: ParentProps) {
// 	return <Component name="Alice" />;
// }
