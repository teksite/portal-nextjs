'use client';

import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { InputProps, SearchInput, SearchInputProps } from '@/components';
import { LicenseType, cn, tailwindColorValue } from '@/lib';

import { GroupIcon } from '../group-icon';
import { useGroupData } from './contexts';
import { useGallerySearch } from './gallery-search-container';
import { HighlightText } from './highlight-text';

export type GallerySearchProps = {
   className?: string;
   size?: InputProps['size'];
};
export function GallerySearch({ className, size = 'xl' }: GallerySearchProps) {
   const { list, text, setText } = useGallerySearch();

   const searchParams = useSearchParams();
   const router = useRouter();

   const getItemKey = useCallback((item: LicenseType) => item.id, []);
   const getItemLabel = useCallback((item: LicenseType) => item.title, []);

   return (
      <div className={cn('', className)}>
         <SearchInput<LicenseType>
            placeholder='جستجوی خدمات و مجوزها'
            size={size}
            type={'buttonInside'}
            data={list}
            text={text}
            onTextChange={(newText) => {
               setText(newText);
            }}
            onQueryChange={(newFilter) => {
               if (newFilter) {
                  const params = new URLSearchParams(searchParams);
                  params.set('q', newFilter);
                  router.push(`/service-desk/?${params.toString()}`);
               } else router.push(`/service-desk`);
            }}
            onSelectChange={(license) => {
               router.push(`/service-desk/${license.id}`);
            }}
            getItemLabel={getItemLabel}
            getItemKey={getItemKey}
            itemComponent={ListItem}
         />
      </div>
   );
}

function ListItem({ item: license, query }: { item: LicenseType; query?: string }) {
   const group = useGroupData(license.groupId);
   const iconColor = tailwindColorValue(group.color, 800, 40);
   const textColor = tailwindColorValue(group.color, 950, 80);
   const bgColor = tailwindColorValue(group.color, 100, 20);

   return (
      <div className='flex flex-col md:flex-row md:justify-between gap-1'>
         <span className='block mb-1'>
            {query ? (
               <HighlightText text={license.title} query={query} highlightClassName='font-bold text-blue-700' />
            ) : (
               license.title
            )}
         </span>
         <div
            className='inline-flex items-center  gap-1 rounded-lg '
            style={{ color: textColor}}>
            <GroupIcon name={group.name as any} size={18} color={iconColor} strokeWidth={1.7} />
            <div className={`text-xs font-medium`}>{license.serviceGroupCaption || 'بدون گروه'}</div>
         </div>
      </div>
   );
}

type GallerySearchContextValue = {
   list: LicenseType[];
};
