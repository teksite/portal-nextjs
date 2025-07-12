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


/*
type ServiceListItem={
    id: string,
    slug: string,
    code:string,
    groupId:string,
    avgTime?:number,  //متوسط زمان اخذ خدمت
    cost?:number, // نیاز به پرداخت هزینه
    description?:string, //توضیحات
    electronic?:boolean, // نحوه ارائه خدمت
    needPresence?:boolean, //نیاز به مراجعه حضوری
    serviceTime?:string // زمان ارائه خدمت
}
*/
