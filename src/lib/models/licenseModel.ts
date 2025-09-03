import { TailwindColor } from '../tailwind-color';

export type LicenseType = {
   id: string;
   slug: string;
   title: string;
   code?: string;
   groupId: string;
   serviceGroupCaption?: string;
   avgTime?: string;
   cost?: boolean;
   description?: string | null;
   electronics?: number;
   needPresence?: boolean;
   serviceTime?: string | null;
   icon?: string;
};
export type LicenseGroup = {
   id: string;
   title: string;
   color: TailwindColor;
   name: string;
   licenseIdList: string[];
};

export type LicensesNormalized = {
   licenses: Record<string, LicenseType>;
   groups: Record<string, LicenseGroup>;
   groupIdList: string[];
};

export type LicenseGroupName = keyof typeof LicenseGroupName;

export const LicenseGroupName = {
   Amoozesh: 'Amoozesh',
   Bazi: 'Bazi',
   Chap: 'Chap',
   Film: 'Film',
   Honar: 'Honar',
   Majazi: 'Majazi',
   Omoomi: 'Omoomi',
   Moarefiname: 'Moarefiname',
   Moassesat: 'Moassesat',
   Resane: 'Resane',
   Sayer: 'Sayer'
};
