export interface BasicLicenseType {
    id: string;
    title: string;
    groupId: string;
    groupTitle?: string;
}
export interface LicenseType extends BasicLicenseType {
    code?: string;
    avgTime?: string;
    cost?: boolean;
    description?: string | null;
    electronics?: number;
    needPresence?: boolean;
    serviceTime?: string | null;
    image?: string;
}

export interface BasicGroupType {
    id: string;
    title: string;
    image?: string;
}
export interface GroupWithLicenseType extends BasicGroupType {
    licenses: Record<string, LicenseType>;
}


export interface FilterItemType {
    id: string;
    title: string;
}
export interface FilterGroupType {
    title: string;
    items: Record<string, FilterItemType>;
}


