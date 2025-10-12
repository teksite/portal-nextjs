import { NextRequest, NextResponse } from "next/server";

const dictionaryUrls = {
    allLicences: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-licenses",
    showLicences: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-licenses",
    allLicencesAndGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-groups-lincenses",

    allLicenceGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-groups",

    licensesFilters: "http://localhost:5000/api2/GetAppForCrm/0.1/get-license-filters",
} as const;

type EndpointKey = keyof typeof dictionaryUrls;

function handleError(error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message }, { status: 500 });
}

async function handleRequest(req: NextRequest, method: "GET" | "POST") {
    try {
        const { searchParams } = req.nextUrl;
        const endpoint = searchParams.get("endpoint") as EndpointKey | string | null;
        const param = searchParams.get("param");

        if (!endpoint) {
            return NextResponse.json({ message: "Missing endpoint" }, { status: 400 });
        }

        // Auto-detect if endpoint is known or custom URL
        const baseUrl = (endpoint in dictionaryUrls)
            ? dictionaryUrls[endpoint as EndpointKey]
            : endpoint;

        const url = param ? `${baseUrl}/${param}` : baseUrl;

        const fetchOptions: RequestInit = { method };

        if (method === "POST") {
            const body = await req.json();
            fetchOptions.headers = { "Content-Type": "application/json" };
            fetchOptions.body = JSON.stringify(body);
        }

        const response = await fetch(url, fetchOptions);
        const data = await response.json();

        return NextResponse.json(data, { status: response.status });
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function GET(req: NextRequest) {
    return handleRequest(req, "GET");
}

export async function POST(req: NextRequest) {
    return handleRequest(req, "POST");
}
