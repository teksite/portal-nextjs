'use client';

import React, { useMemo } from 'react';

import { GroupIcon } from '@/app/service-desk/components/group-icon';
import { OpenDataType, OpenDataTypeCategoryType, tailwindColorValue } from '@/lib';
import { mockNormalizedOpenData } from '@/mock';

import { GalleryItem } from './gallery-item';

export function GalleryList() {
   const { openData, categories, categoriesIdList } = mockNormalizedOpenData;

   return (
      <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
         {categoriesIdList.reduce<React.ReactElement[]>((total, categoryId: string) => {
            const category = categories[categoryId];
            total.push(<CategoryHeader category={category} key={`cat-${category.id}`} />);
            category.openDataIdList.forEach((openDataId: string) => {
               const data: OpenDataType = openData[openDataId];
               total.push(<GalleryItem key={`data-${data.id}`} data={data} category={category} />);
            });

return total;
         }, [])}
      </ul>
   );
}

function CategoryHeader({ category }: { category: OpenDataTypeCategoryType }) {
   const color = category.color || 'zinc';
   const { colorIcon, colorBg, colorText } = useMemo(
      () => ({
         colorIcon: tailwindColorValue(color, 900, 80),
         colorBg: tailwindColorValue(color, 600, 10),
         colorText: tailwindColorValue(color, 900)
      }),
      []
   );

   return (
      <li className='w-full col-span-full mt-12 mb-3 flex items-center gap-3 bg-white will-change-transform'>

            <div className="flex items-center justify-center gap-1 w-full ">
               <hr className='w-full border-gray-300' />

               <h2 className='w-fit min-w-fit px-1 mb-0 text-2xl font-semibold' style={{ color: colorText }}>
                  {category.title || 'بدون گروه'}
               </h2>
               <hr className='w-full border-gray-300' />
            </div>
      </li>
   );
}
