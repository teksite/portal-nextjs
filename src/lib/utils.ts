import { AuthenticationException, ValidationException } from "@/exceptions";
import {mockGetLicensesAndGroups, mockGetLicensesFilters, mockLGetLicenses, mockLShowLicense} from "@/mock";

interface ApiErrorResponse {
    errors?: Record<string, string[]>;
    message?: string;
}

interface FetchConfig extends RequestInit {
    next?: {
        revalidate?: number | false;
        tags?: string[];
    };
}

// فقط برای sandbox
const mockData: Record<string, any> = {
    allLicences: mockLGetLicenses,
    showLicences: mockLShowLicense,
    allLicencesAndGroups: mockGetLicensesAndGroups,
    showLicenceGroups: mockLShowLicense,
    allLicenceGroups: mockLShowLicense,
    licensesFilters: mockGetLicensesFilters,
};

const sandbox = true; // true = استفاده از mock

export const fetchApi = async <T = any>(
    slugOrUrl?: string,
    param?: string,
    config: FetchConfig = {}
): Promise<T> => {

    if (sandbox) {
        const key = slugOrUrl as keyof typeof mockData;
        if (!slugOrUrl || !mockData[key]) throw new Error(`No mock data for: ${slugOrUrl}`);
        return mockData[key] as T;
    }

    const apiRoute = `/api/proxy?endpoint=${encodeURIComponent(slugOrUrl || "")}${param ? `&param=${param}` : ""}`;

    const defaultConfig: FetchConfig = {
        method: config.method ?? "GET",
        headers: {
            "Content-Type": "application/json",
            ...config.headers,
        },
        credentials: config.credentials ?? "include",
        body: config.body,
    };

    try {
        const response = await fetch(apiRoute, defaultConfig);

        if (!response.ok) {
            const data: ApiErrorResponse = await response.json().catch(() => ({}));
            if (response.status === 422) throw new ValidationException(data.errors || {});
            if (response.status === 403) throw new AuthenticationException(data.message || "Unauthorized");
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return (await response.json()) as T;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes("network")) {
            throw new Error("Network error occurred");
        }
        throw error;
    }
};
