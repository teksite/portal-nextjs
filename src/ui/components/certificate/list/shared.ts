import { LicenseType } from "@/models";

export type ListItemProps = {
	data: LicenseType;
	withBadge?: boolean;
	onShowRegister: (data: LicenseType) => void;
	onShowDetail: (data: LicenseType) => void;
	children?: React.ReactElement;
};
