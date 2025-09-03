/**
 * Normalize mixed Persian/Arabic text to consistent Persian characters.
 * - Arabic Yeh (ي)u064A → Persian Yeh (ی)u06CC
 * - Arabic Kaf (ك)u0643 → Persian Kaf (ک)u06A9
 * - Arabic Alef with Hamza (أ)u0623 → Persian Alef (ا)u0627
 * - Remove Tatweel/Kashida (ـ)u0640
 * - Arabic-Indic digits (٠–٩) → Persian digits (۰–۹)
 * - Standardize zero-width non-joiner (U+200C)
 */
export function normalizeFarsi(text: string): string {
   // Mapping of individual characters
   const charMap: { [key: string]: string } = {
      '\u064A': '\u06CC', // ي → ی
      '\u0643': '\u06A9', // ك → ک
      '\u0623': '\u0627', // أ → ا
      '\u0640': '' // Tatweel/Kashida → (removed)
   };

   // Add mappings for digits ٠–٩ → ۰–۹
   for (let i = 0; i <= 9; i++) {
      const arabicIndic = String.fromCharCode(0x0660 + i); // U+0660–U+0669
      const persianDigit = String.fromCharCode(0x06f0 + i); // U+06F0–U+06F9
      charMap[arabicIndic] = persianDigit;
   }

   // Build a regex that matches any of the keys in charMap
   const pattern = new RegExp(Object.keys(charMap).join('|'), 'g');

   // Replace each occurrence via the mapping
   let normalized = text.replace(pattern, (matched) => charMap[matched]);

   // Normalize zero-width joiner (U+200D) to non-joiner (U+200C)
   normalized = normalized.replace(/\u200D/g, '\u200C');

   return normalized;
}
