export interface ServiceType {
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

export default class ServiceModel {
	service?: ServiceType;

	constructor(service?: ServiceType) {
		this.service = service;
	}

	get<K extends keyof ServiceType>(
		term: K,
		defaultTerm?: ServiceType[K]
	): ServiceType[K] | undefined {
		if (!this.service) {
			return defaultTerm;
		}

		const value = this.service[term];
		return value !== undefined ? value : defaultTerm;
	}

	hasService(): boolean {
		return !!this.service;
	}

	setService(service: ServiceType): void {
		this.service = service;
	}
}
