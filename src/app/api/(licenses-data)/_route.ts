// import { NextResponse } from 'next/server';

// import { LicenseType, LicensesNormalized, globalConfig } from '@/lib';

// import { normalizeLicensesData } from './normalize';

// // Opt into static caching / ISR
// export const dynamic = 'force-static';
// // no revalidate here, because we’ll do it on the fetch call
// // export const revalidate = 3600;

// export async function GET() {
//    const upstream = globalConfig.API_CALL_URL;
//    const endpoint = 'GetServices';
//    const url = `${upstream}/${endpoint}`;

//    // Forward the GET request to our Portal remote POST endpoint
//    const res = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//          /* no payload */
//       }),
//       next: { revalidate: 3600 } // <-- cache the POST for 1h
//    });
//    const upstreamResult = (await res.json()) as LicenseType[];
//    const licenseList = (upstreamResult as any)?.Services as LicenseType[];
//    const normalized = normalizeLicensesData(licenseList) as LicensesNormalized;

//    return NextResponse.json(normalized);
// }
