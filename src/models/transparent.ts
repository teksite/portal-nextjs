export interface TransparentItemType {
    id: string|number;
    title: string;
    slug?: string;
}

export interface TransparentGroupItemsType {
    id: string|number;
    title: string;
    image?: string;
    sub?: TransparentItemType[];
}

