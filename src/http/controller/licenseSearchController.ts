import { LicenseType } from "@/models/licenseModel";
import { mockServiceList2 } from "@/mock";
import { normalizeText } from "@/lib";

const list = mockServiceList2;

export interface searchItemType extends LicenseType {
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

export function searchLicensesByTitle(searchTerm: string): {
    exact: searchItemType[];
    startsWith: searchItemType[];
    containsWords: searchItemType[];
    descriptionContains: searchItemType[];
} {
    if (!searchTerm || searchTerm.length < 4) {
        return { exact: [], startsWith: [], containsWords: [], descriptionContains: [] };
    }

    const normalizedTerm = normalizeText(searchTerm);
    const terms = normalizedTerm.trim().split(/\s+/);
    const exact: searchItemType[] = [];
    const startsWith: searchItemType[] = [];
    const containsWords: searchItemType[] = [];
    const descriptionContains: searchItemType[] = [];

    const processedIds = new Set<string>();

    list.forEach((license: LicenseType) => {
        const normalizedTitle = normalizeText(license.title);
        const normalizedDescription = license.description ? normalizeText(license.description) : "";
        const originalTitle = license.title;

        // Exact match
        if (normalizedTitle === normalizedTerm || (license.code && normalizeText(license.code) === normalizedTerm)) {
            exact.push({
                ...license,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
            return;
        }

        // Title starts with
        if (normalizedTitle.startsWith(normalizedTerm) && !processedIds.has(license.id)) {
            startsWith.push({
                ...license,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
            return;
        }

        // Title includes
        if (terms.every((term) => normalizedTitle.includes(term)) && !processedIds.has(license.id)) {
            containsWords.push({
                ...license,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
            return;
        }

        // Description includes
        if (
            normalizedDescription &&
            terms.every((term) => normalizedDescription.includes(term)) &&
            !processedIds.has(license.id)
        ) {
            descriptionContains.push({
                ...license,
                highlightedTitle: highlightTitle(originalTitle, terms),
            });
            processedIds.add(license.id);
        }
    });

    return { exact, startsWith, containsWords, descriptionContains };
}