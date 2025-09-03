import { mockNormalizedLicenses } from '@/mock';

export async function fetchLicensesData() {
   return mockNormalizedLicenses;
}

export async function fetchLicense(id: string) {
   const { licenses } = mockNormalizedLicenses;

   return licenses[id];
}

export async function fetchGroup(id: string) {
   const { groups } = mockNormalizedLicenses;

   return groups[id];
}
