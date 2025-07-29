import { LicensesNormalized, LicenseType } from "@/models";
import { NextResponse } from "next/server";
import { normalizeLicensesData } from "./normalize";
import { globalConfig } from "@/lib";

// Opt into static caching / ISR
export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
	const upstream = globalConfig.API_CALL_URL;
	const endpoint = "GetServices";
	const url = `${upstream}/${endpoint}`;

	// Forward the GET request to our Portal remote POST endpoint
	const res = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			/* no payload */
		}),
		// Note: this fetch itself is server-side only
	});
	const upstreamResult = (await res.json()) as LicenseType[];
	const licenseList = (upstreamResult as any)?.Services as LicenseType[];
	const normalized = normalizeLicensesData(licenseList) as LicensesNormalized;
	return NextResponse.json(normalized);
}
