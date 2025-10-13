export interface BasicOpenDataType {
    id: string;
    title: string;
    groupId: string;
    groupTitle?: string;
    image?: string;

}
export interface OpenDataType extends BasicOpenDataType {


}

export interface BasicGroupType {
    id: string;
    title: string;
    image?: string;
}
export interface GroupWithOpenDataType extends BasicGroupType {
    opendata: Record<string, BasicOpenDataType>;
}


export interface FilterOpenDataItemType {
    id: string;
    title: string;
}
export interface FilterOpenDataGroupType {
    title: string;
    items: Record<string, FilterItemType>;
}


