import { NextRequest, NextResponse } from "next/server";

const dictionaryUrls: Record<string, string> = {
    allLicences: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-licenses",
    showLicences: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-licenses",
    allLicencesAndGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-groups-lincenses",
    showLicenceGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-all-groups",
    allLicenceGroups: "http://localhost:5000/api2/GetAppForCrm/0.1/get-groups",
    licensesFilters: "http://localhost:5000/api2/GetAppForCrm/0.1/get-license-filters",
};

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;
        const endpoint = searchParams.get("endpoint");
        const param = searchParams.get("param");

        if (!endpoint) return NextResponse.json({ message: "Missing endpoint" }, { status: 400 });

        const url = dictionaryUrls[endpoint] ? dictionaryUrls[endpoint] + (param ? `/${param}` : "") : endpoint;

        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;
        const endpoint = searchParams.get("endpoint");
        const param = searchParams.get("param");

        if (!endpoint) return NextResponse.json({ message: "Missing endpoint" }, { status: 400 });

        const url = dictionaryUrls[endpoint] ? dictionaryUrls[endpoint] + (param ? `/${param}` : "") : endpoint;

        const body = await req.json();

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Internal Server Error" }, { status: 500 });
    }
}
