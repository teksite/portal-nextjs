import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
   return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function arrayToObjectByKey<T extends Record<string, any>>(array: T[], key: string): Record<string, T> {
   return array.reduce(
      (acc, item) => {
         acc[item[key]] = item;

         return acc;
      },
      {} as Record<string, T>
   );
}

export function removeFalsyPropsFast<T extends object>(obj: T): Partial<T> {
   const result = {} as Partial<T>;
   // “for…in” walks only the object’s own enumerable props
   for (const key in obj) {
      const value = obj[key as keyof T];
      if (value) {
         result[key as keyof T] = value;
      }
   }

   return result;
}
