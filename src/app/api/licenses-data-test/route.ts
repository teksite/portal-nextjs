import { NextResponse } from 'next/server';

import { LicensesNormalized } from '@/lib';
import { mockNormalizedLicenses } from '@/mock';

export const dynamic = 'force-static';

export async function GET() {
   const idList: string[] = ['1233027790000000296'];
   const cloned = JSON.parse(JSON.stringify(mockNormalizedLicenses)) as LicensesNormalized;
   const result = idList.reduce<LicensesNormalized>(
      (total, id) => {
         const license = cloned.licenses[id];
         total.licenses[id] = license;
         if (!total.groups[license.groupId]) {
            total.groups[license.groupId] = cloned.groups[license.groupId];
            total.groups[license.groupId].licenseIdList = [id];
            total.groupIdList.push(license.groupId);
         } else {
            total.groups[license.groupId].licenseIdList.push(id);
         }

         return total;
      },
      { groupIdList: [], groups: {}, licenses: {} } as LicensesNormalized
   );

   return NextResponse.json(result);
}
