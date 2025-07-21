import { LicenseType } from "@/models/licenseModel";
import { mockServiceList2 } from "@/mock";
import { normalizeText } from "@/lib";

const list = mockServiceList2;

export interface titleSearchItemType {
    id: string | number;
    title: string;
    slug: string;
    serviceGroupCaption?: string;
    icon?: string;
    highlightedTitle?: string;
}

const highlightTitle = (title: string, terms: string[]): string => {
    const words = title.split(/\s+/);
    const highlightedWords = words.map((word) => {
        const normalizedWord = normalizeText(word);
        if (terms.some((term) => normalizedWord.includes(term))) {
            return `<span class="font-bold text-red-600">${word}</span>`;
        }
        return word;
    });
    return highlightedWords.join(" ");
};

export function advanceSearch(searchTerm: string): {
    exact: LicenseType[];
    titleContains: LicenseType[];
    descriptionContains: LicenseType[];
} {
    if (!searchTerm) {
        return { exact: [], titleContains: [], descriptionContains: [] };
    }

    const normalizedTerm = normalizeText(searchTerm);
    const exact: LicenseType[] = [];
    const titleContains: LicenseType[] = [];
    const descriptionContains: LicenseType[] = [];

    const exactIds = new Set<string>();
    const titleIds = new Set<string>();

    list.forEach((license: LicenseType) => {
        const normalizedTitle = normalizeText(license.title);
        const normalizedCode = license.code ? normalizeText(license.code) : "";
        const normalizedDescription = license.description ? normalizeText(license.description) : "";

        if (normalizedTitle === normalizedTerm || normalizedCode === normalizedTerm) {
            exact.push(license);
            exactIds.add(license.id);
        } else if (normalizedTitle.includes(normalizedTerm) && !exactIds.has(license.id)) {
            titleContains.push(license);
            titleIds.add(license.id);
        } else if (
            normalizedDescription.includes(normalizedTerm) &&
            !exactIds.has(license.id) &&
            !titleIds.has(license.id)
        ) {
            descriptionContains.push(license);
        }
    });

    return { exact, titleContains, descriptionContains };
}

export function searchLicensesByTitle(searchTerm: string): titleSearchItemType[] {
    if (!searchTerm || searchTerm.length < 4) {
        return [];
    }

    const normalizedTerm = normalizeText(searchTerm);
    const terms = normalizedTerm.trim().split(/\s+/);
    const exact: titleSearchItemType[] = [];
    const startsWith: titleSearchItemType[] = [];
    const containsWords: titleSearchItemType[] = [];
    const descriptionContains: titleSearchItemType[] = [];


    const processedIds = new Set<string>();

    list.forEach((license: LicenseType) => {
        const normalizedTitle = normalizeText(license.title);
        const normalizedDescription = license.description ? normalizeText(license.description) : "";
        const originalTitle = license.title;

        // exact match
        if (normalizedTitle === normalizedTerm || (license.code && normalizeText(license.code) === normalizedTerm)) {
            exact.push({
                id: license.id,
                title: originalTitle,
                slug: license.slug,
                serviceGroupCaption: license.serviceGroupCaption,
                icon: license.icon,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
            return;
        }

        // title start with
        if (normalizedTitle.startsWith(normalizedTerm) && !processedIds.has(license.id)) {
            startsWith.push({
                id: license.id,
                title: originalTitle,
                slug: license.slug,
                serviceGroupCaption: license.serviceGroupCaption,
                icon: license.icon,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
            return;
        }

        // title include
        if (terms.every((term) => normalizedTitle.includes(term)) && !processedIds.has(license.id)) {
            containsWords.push({
                id: license.id,
                title: originalTitle,
                slug: license.slug,
                serviceGroupCaption: license.serviceGroupCaption,
                icon: license.icon,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
            return;
        }

        // description include
        if (
            normalizedDescription &&
            terms.every((term) => normalizedDescription.includes(term)) &&
            !processedIds.has(license.id)
        ) {
            descriptionContains.push({
                id: license.id,
                title: originalTitle,
                slug: license.slug,
                serviceGroupCaption: license.serviceGroupCaption,
                icon: license.icon,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
        }
    });

    return [...exact, ...startsWith, ...containsWords, ...descriptionContains];
}