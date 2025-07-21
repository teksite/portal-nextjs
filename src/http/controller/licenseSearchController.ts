import {LicenseType} from "@/models/licenseModel";
import {mockServiceList2} from "@/mock";
import {normalizeText} from "@/lib";

const list = mockServiceList2;

export interface titleSearchItemType {
    id: string|number,
    title: string,
    slug: string,
    serviceGroupCaption?: string
    icon?: string,
}

export function advanceSearch(searchTerm: string): {
    exact: LicenseType[],
    titleContains: LicenseType[],
    descriptionContains: LicenseType[]
} {
    if (!searchTerm) {
        return {exact: [], titleContains: [], descriptionContains: []};
    }

    const normalizedTerm = normalizeText(searchTerm);
    const exact: LicenseType[] = [];
    const titleContains: LicenseType[] = [];
    const descriptionContains: LicenseType[] = [];

    const exactIds = new Set<string>();
    const titleIds = new Set<string>();

    list.forEach((license: LicenseType) => {
        const normalizedTitle = normalizeText(license.title);
        const normalizedCode = license.code ? normalizeText(license.code) : '';
        const normalizedDescription = license.description ? normalizeText(license.description) : '';

        if (normalizedTitle === normalizedTerm || normalizedCode === normalizedTerm) {
            // Exact match on title or code
            exact.push(license);
            exactIds.add(license.id);
        } else if (normalizedTitle.includes(normalizedTerm) && !exactIds.has(license.id)) {
            // Partial match on title
            titleContains.push(license);
            titleIds.add(license.id);
        } else if (normalizedDescription.includes(normalizedTerm) && !exactIds.has(license.id) && !titleIds.has(license.id)) {
            // Partial match on description
            descriptionContains.push(license);
        }
    });

    return {exact, titleContains, descriptionContains};
}

export function searchLicensesByTitle(searchTerm: string) {

    console.log(searchTerm)

    const normalizedTerm = normalizeText(searchTerm);

    const result:titleSearchItemType[] = [];

    list.forEach((license: LicenseType) => {
        const normalizedTitle = normalizeText(license.title);
        if (normalizedTitle.includes(normalizedTerm)) {
            result.push({
                id: license.id,
                title: license.title,
                slug: license.slug,
                serviceGroupCaption: license.serviceGroupCaption,
                icon: license.icon,
            });
        }
    });

    return result;


}