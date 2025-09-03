'use client';

import React, { useContext } from 'react';

import { TransparencyNormalized } from '@/lib';

const NormalizedDataContext = React.createContext<TransparencyNormalized>({
   categoryIdList: [],
   categories: {},
   transparencies: {}
} as TransparencyNormalized);
export const useNormalizedTransparenciesData = () => useContext(NormalizedDataContext);
export const useCategoryData = (id: string) => {
   const { categories } = useNormalizedTransparenciesData();

   return categories[id];
};

export function NormalizedDataProvider({
   normalizedData,
   children
}: {
   normalizedData: TransparencyNormalized;
   children?: React.ReactNode;
}) {
   return <NormalizedDataContext.Provider value={normalizedData}>{children}</NormalizedDataContext.Provider>;
}
