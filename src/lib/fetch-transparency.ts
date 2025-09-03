import { mockNormalizedTransparencies } from '@/mock';

export async function fetchTransparencyData() {
   return mockNormalizedTransparencies;
}

export async function fetchLicense(id: string) {
   const { transparencies } = mockNormalizedTransparencies;

   return transparencies[id];
}

export async function fetchGroup(id: string) {
   const { categories } = mockNormalizedTransparencies;

   return categories[id];
}
