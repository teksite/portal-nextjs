export interface LicenseType {
	id: string;
	slug: string;
	title: string;
	code: string;
	groupId: string;
	serviceGroupCaption?: string;
	avgTime?: string;
	cost?: boolean;
	description?: string|null;
	electronics?: number;
	needPresence?: boolean;
	serviceTime?: string|null;
	icon?:string;
}
