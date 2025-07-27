import * as allIcons from "@/ui/components/certificate/icons/normal";

export interface LicenseGroupType {
    id?: string;
    title: string;
    color?: string;
    icon?: keyof typeof allIcons;
}
