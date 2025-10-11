import {AuthenticationException, ValidationException} from "@/exceptions";
import {mockGetLicensesAndGroups, mockLGetLicenses, mockLShowLicense} from "@/mock";

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

const dictionaryUrls: Record<string, string> = {
    allLicences: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-licenses",
    showLicences: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-licenses",
    allLicencesAndGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-groups-lincenses",
    showLicenceGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-groups",
    allLicenceGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-groups",
};

const sandbox = true;

const mockData: Record<string, any> = {
    allLicences: mockLGetLicenses,
    showLicences: mockLShowLicense,
    allLicencesAndGroups: mockGetLicensesAndGroups,
    showLicenceGroups: mockLShowLicense,
    allLicenceGroups: mockLShowLicense,
};


export const fetchApi = async <T = any>(
    slugOrUrl?: string,
    param?: string,
    config: FetchConfig = {}
): Promise<T> => {

    if (sandbox) {
        const key = slugOrUrl as keyof typeof mockData;
        if (!slugOrUrl || !mockData[key]) {
            throw new Error(`No mock data found for key: ${slugOrUrl}`);
        }
        return mockData[key] as T;
    }

    let baseUrl = slugOrUrl ? dictionaryUrls[slugOrUrl] ?? slugOrUrl : "";
    if (!baseUrl) throw new Error("fetchApi called without a valid slug or url");

    if (param) baseUrl = `${baseUrl}/${param}`;

    const finalUrl = `${baseUrl}`;

    const defaultConfig: FetchConfig = {
        method: config.method ?? "GET",
        headers: {
            "Content-Type": "application/json",
            ...config.headers,
        },
        credentials: config.credentials ?? "include",
        cache: config.cache ?? "force-cache",
        next: config.next,
        body: config.body,
    };

    try {
        const response = await fetch(finalUrl, defaultConfig);

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
