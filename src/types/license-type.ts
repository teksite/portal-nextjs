export interface BasicLicenseType {
    id: string;
    groupId: string;
    title: string;
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
    icon?: string;
}


export interface BasicGroupType {
    id: string;
    title: string;
}

export interface GroupType extends BasicGroupType {
    licenses: LicenseType[];
}

export interface FilterItemType {
    id: string;
    title: string;
}

export interface FilterGroupType {
    title: string;
    items: Record<string, FilterItemType>;
}

export type LicensesFiltersType = Record<string, FilterGroup>;

