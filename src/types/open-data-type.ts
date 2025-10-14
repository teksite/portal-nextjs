export interface BasicOpenDataType {
    id: string;
    title: string;
    groupId: string;
    groupTitle?: string;
    image?: string;

}
export interface OpenDataType extends BasicOpenDataType {
    code?:string;

}

export interface BasicOpenDataGroupType {
    id: string;
    title: string;
    image?: string;
}
export interface GroupWithOpenDataType extends BasicOpenDataGroupType {
    opendata: Record<string, BasicOpenDataType>;
}


export interface FilterOpenDataItemType {
    id: string;
    title: string;
}
export interface FilterOpenDataGroupType {
    title: string;
    items: Record<string, FilterOpenDataItemType>;
}


