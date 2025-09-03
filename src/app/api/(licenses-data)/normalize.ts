import { LicenseGroup, LicenseType, TailwindColor, normalizeFarsi, removeFalsyPropsFast } from '@/lib';

export function normalizeLicensesData(licenseList: LicenseType[]) {
   const licenses: Record<string, LicenseType> = {};
   const groups: Record<string, LicenseGroup> = {};
   const groupIdList: string[] = [];

   licenseList.forEach((item) => {
      if (licenses[item.slug]) return; //repetitive ids!
      const license = removeFalsyPropsFast(item) as LicenseType;
      correctFarsiChars(license);
      if (!isValid(license)) return;
      license.id = license.slug;
      licenses[license.id] = license;
      const { id, groupId } = license;
      if (!groups[groupId]) {
         const group = createGroupFromLicense(license);
         correctFarsiChars(group);
         groups[groupId] = group;
         groupIdList.push(groupId);
      }
      groups[groupId].licenseIdList.push(id);
   });

   return {
      licenses,
      groups,
      groupIdList: groupIdList.sort((a, b) => groupStaticData[a].order - groupStaticData[b].order)
   };
}

function createGroupFromLicense(license: LicenseType): LicenseGroup {
   const { groupId: id, serviceGroupCaption: title } = license;
   const group: LicenseGroup = {
      id,
      title: title || 'بدون عنوان',
      licenseIdList: [],
      name: groupStaticData[id].name,
      color: groupStaticData[id].color
   };

   return group;
}

function isValid({ id, groupId, title, serviceGroupCaption }: LicenseType): boolean {
   return !!(id && groupId && title && serviceGroupCaption);
}

function correctFarsiChars(obj: Record<string, any>) {
   Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'string') (obj as any)[key] = normalizeFarsi(obj[key]) as any;
   });
}

export const groupStaticData: Record<string, { name: string; color: TailwindColor; order: number }> = {
   '1233027780000000106': { name: 'Chap', color: 'lime', order: 0 },
   '1233027780000000109': { name: 'Moarefiname', color: 'sky', order: 1 },
   '1233027780000000119': { name: 'Film', color: 'orange', order: 2 },
   '1233027780000000102': { name: 'Honar', color: 'cyan', order: 3 },
   '1233027780000000120': { name: 'Resane', color: 'indigo', order: 4 },
   '1233027780000000101': { name: 'Amoozesh', color: 'purple', order: 5 },
   '1233027780000000115': { name: 'Bazi', color: 'yellow', order: 6 },
   '1233027780000000100': { name: 'Majazi', color: 'teal', order: 7 },
   '1233027780000000114': { name: 'Moassesat', color: 'blue', order: 8 },
   '1233027780000000116': { name: 'Sayer', color: 'green', order: 10 },
   '1152027780000000265': { name: 'Omoomi', color: 'rose', order: 9 }
};
