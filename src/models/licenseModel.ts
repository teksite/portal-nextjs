export type LicenseType = {
	id: string;
	slug: string;
	title: string;
	code?: string;
	groupId: string;
	serviceGroupCaption?: string;
	avgTime?: string;
	cost?: boolean;
	description?: string | null;
	electronics?: string;
	needPresence?: boolean;
	serviceTime?: string | null;
	icon?: string;
};
export type LicenseGroup = {
	id: string;
	title?: string;
	color?: string;
	name?: string;
	licenseIdList: string[];
};

export type LicensesNormalized = {
	licenses: Record<string, LicenseType>;
	groups: Record<string, LicenseGroup>;
	groupIdList: string[];
};
