'use client';

import React, { useContext, useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { LicenseType } from '@/lib';

import { useNormalizedData } from './contexts';
import { filterLogic } from './filter-logic';

export function GallerySearchContainer({ children }: { children: React.ReactNode }) {
   const normalizedData = useNormalizedData();
   const { licenses } = normalizedData;
   const searchParams = useSearchParams();
   const queryParam = searchParams.get('q') || '';
   const [text, setText] = useState<string>(queryParam);
   useEffect(() => {
      setText(queryParam);
   }, [queryParam]);

   const contextValue = useMemo<GallerySearchContextValue>(() => {
      const sorted = normalizedData.groupIdList.reduce<LicenseType[]>((total, id) => {
         const group = normalizedData.groups[id];
         group.licenseIdList.forEach((licenseId) => total.push(licenses[licenseId]));

         return total;
      }, []);
      const filtered = filterLogic(Object.values(sorted), text);

      return { list: filtered, text, setText };
   }, [normalizedData, text]);

   return <GallerySearchContext.Provider value={contextValue}>{children}</GallerySearchContext.Provider>;
}

type GallerySearchContextValue = {
   list: LicenseType[];
   text: string;
   setText: React.Dispatch<React.SetStateAction<string>>;
};
const GallerySearchContext = React.createContext<GallerySearchContextValue | undefined>(undefined);

export const useGallerySearch = () => useContext(GallerySearchContext) as GallerySearchContextValue;
