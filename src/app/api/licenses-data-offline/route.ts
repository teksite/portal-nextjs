import { NextResponse } from 'next/server';

import { mockNormalizedLicenses } from '@/mock';

export const dynamic = 'force-static';

export async function GET() {
   return NextResponse.json(mockNormalizedLicenses);
}
