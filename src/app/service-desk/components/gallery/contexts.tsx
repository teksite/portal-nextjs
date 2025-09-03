'use client';

import React, { MouseEventHandler, createContext, useContext } from 'react';

import { LicensesNormalized } from '@/lib';

const NormalizedDataContext = React.createContext<LicensesNormalized>({
   groupIdList: [],
   groups: {},
   licenses: {}
} as LicensesNormalized);
export const useNormalizedData = () => useContext(NormalizedDataContext);
export const useGroupData = (id: string) => {
   const { groups } = useNormalizedData();

   return groups[id];
};
export function NormalizedDataProvider({
   normalizedData,
   children
}: {
   normalizedData: LicensesNormalized;
   children?: React.ReactNode;
}) {
   return <NormalizedDataContext.Provider value={normalizedData}>{children}</NormalizedDataContext.Provider>;
}
//__________________________________________
//__________________________________________

type GalleryHandlers = {
   onItemClick: MouseEventHandler<HTMLDivElement>;
};
export const GalleryHandlersContext = createContext<GalleryHandlers>({
   onItemClick: () => {}
});
export const useGalleyHandlers = () => useContext(GalleryHandlersContext);

//__________________________________________
//__________________________________________

// const GroupsContext = createContext<LicensesNormalized["groups"]>(
// 	{} as LicensesNormalized["groups"]
// );
// export const useGroups = () => useContext(GroupsContext);

// export function GroupsContextProvider({
// 	groups,
// 	children,
// }: {
// 	groups: LicensesNormalized["groups"];
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<GroupsContext.Provider value={groups}>{children}</GroupsContext.Provider>
// 	);
// }
