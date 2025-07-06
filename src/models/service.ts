export interface ServiceType {
    title: string;
    group: string;
    description?: string | null;
    code: number | string;
}

export default class ServiceModel {
    service?: ServiceType;

    constructor(service?: ServiceType) {
        this.service = service;
    }

    get(term: "title" | "group" | "description" | "code" , defaultTerm?:string|null|number) {

        if (!this.service || !this.service[term]) {

            return defaultTerm;
        }
        return this.service[term];
    }
}