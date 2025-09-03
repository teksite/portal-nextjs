import { LicenseType, normalizeFarsi } from '@/lib';

export function filterLogic(licenseList: LicenseType[], query?: string): LicenseType[] {
   if (!query || !query.trim()) return licenseList;
   const qq = query.trim().toLowerCase();
   if (!qq) return licenseList;
   const q = normalizeFarsi(qq);
   const terms = q.split(/\s+/);

   const beforeSort = licenseList
      .map((service) => {
         const title = service.title;
         const genre = service.serviceGroupCaption || '';
         const description = service.description || '';

         // require each term somewhere in title|genre|description
         if (!terms.some((t) => title.includes(t) || genre.includes(t) || description.includes(t))) {
            return null;
         }

         let score = 0;

         // --- Title-based scoring (very high priority) ---
         if (title === q) {
            score += 2000;
         }
         for (const term of terms) {
            if (title.startsWith(term)) {
               score += 600;
            }
            const titleWords = title.split(' ');
            if (titleWords.includes(term)) {
               score += 400;
            } else if (titleWords.some((w) => w.startsWith(term))) {
               score += 600;
            }
            const idx = title.indexOf(term);
            if (idx >= 0) {
               score += Math.max(100 - idx, 20);
            }
         }

         // --- Genre-based scoring (mid priority) ---
         // Genre typically 1–3 words, so exact/startsWith matter more
         for (const term of terms) {
            if (genre === term) {
               score += 500;
            } else if (genre.startsWith(term)) {
               score += 300;
            } else if (genre.includes(term)) {
               score += 150;
            }
         }

         // --- Description-based scoring (lower priority) ---
         for (const term of terms) {
            const idx = description.indexOf(term);
            if (idx >= 0) {
               // small boost decaying by position
               score += Math.max(50 - idx, 5);
            }
         }

         // --- Title-length bonus (small) ---
         score += Math.max(0, 20 - title.length);

         return { service, score };
      })
      .filter((x): x is { service: LicenseType; score: number } => x !== null);
   const result = beforeSort.sort((a, b) => b.score - a.score).map((x) => x.service);

   return result;
}
