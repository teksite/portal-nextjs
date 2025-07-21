export interface LicenseType {
	id: string;
	slug: string;
	title: string;
	code: string;
	groupId: string;
	serviceGroupCaption?: string;
	avgTime?: string;
	cost?: boolean;
	description?: string;
	electronics?: string;
	needPresence?: boolean;
	serviceTime?: string;
}
