import { LicensesNormalized, LicenseType } from "@/models";
import { NextResponse } from "next/server";
import { globalConfig } from "@/lib";
import { mockNormalizedLicenses } from "@/app/mock/mock-normalized-licenses";

// Opt into static caching / ISR
export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
	const normalized = mockNormalizedLicenses as LicensesNormalized;
	return NextResponse.json(normalized);
}
