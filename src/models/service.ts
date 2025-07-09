export interface ServiceType {
    title: string;
    image?: string;
    group: string;
    description?: string | null;
    code: number | string;
}

export default class ServiceModel {
    private service?: ServiceType;

    constructor(service?: ServiceType) {
        this.service = service;
    }

    get<K extends keyof ServiceType>(term: K, defaultTerm?: ServiceType[K]): ServiceType[K] | undefined {
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