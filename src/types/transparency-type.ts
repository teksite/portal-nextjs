export interface BasicTransparencyCategoryType {
    id: string;
    title: string;
    image?: string;
}
export interface BasicTransparencyGroupType {
    id: string;
    title: string;
    image?: string;
}
export interface TransparencyCategoryWithGroupType  extends BasicTransparencyCategoryType {
    groups: Record<string, BasicTransparencyGroupType>;
}
export interface TransparencyGroupWithTransparencyType  extends BasicTransparencyCategoryType {
    transparencies: Record<string, BasicTransparencyType>;
}

export interface BasicTransparencyType {
    id: string;
    title: string;
    image?: string;
    status?: string;
}
export interface TransparencyType extends BasicTransparencyType {
    description?: string;
    code?: string;
    ValidityPeriod?: string;
    IssueDate ?:string
    StartDate ?:string
    EndDate ?:string
    province?:string
    city?:string
    franchisee?:string
}



