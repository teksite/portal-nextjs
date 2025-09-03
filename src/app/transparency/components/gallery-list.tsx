'use client';

import {
   TransparencyType,
   TransparencyCategoryType,
   TransparencyNormalized,
   LicenseGroup,
   tailwindColorValue
} from '@/lib';
import { mockNormalizedTransparencies } from '@/mock';
import { GalleryItem } from '@/app/transparency/components/gallery-item';
import React, { useMemo } from 'react';
import { GroupIcon } from '@/app/service-desk/components/group-icon';

export function GalleryList() {
    const { transparencies, categories, categoryIdList } = mockNormalizedTransparencies;

    return (
        <ul className='md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid gap-6'>
            {categoryIdList.reduce<React.ReactElement[]>((total, categoryId:string) => {
                const category = categories[categoryId];
                total.push(<CategoryHeader category={category} key={category.name} />);
                category.transparencyIdList.forEach((transparencyId:string) => {
                    const transparency:TransparencyType = transparencies[transparencyId];
                    total.push(
                        <GalleryItem key={transparency.id} transparency={transparency} category={category}/>
                    );
                });

return total;
            }, [])}
        </ul>
    )
}

function CategoryHeader({ category }: { category: TransparencyCategoryType }) {
   const color = category.color ||'zinc'
   const { colorIcon, colorBg, colorText } = useMemo(
      () => ({
         colorIcon: tailwindColorValue(color, 900, 80),
         colorBg: tailwindColorValue(color, 600, 10),
         colorText: tailwindColorValue(color, 900)
      }),
      []
   );

   return (
      <li className='col-span-full mt-12 mb-3 flex items-center gap-3 bg-white will-change-transform'>
         <div className='flex w-fit min-w-fit items-center gap-3'>
            <div className='rounded-sm p-1' style={{ backgroundColor: colorBg }}>
               <GroupIcon name={category.name as any} size={48} color={colorIcon} strokeWidth={1} />
            </div>
            <h2 className='mb-0 text-start text-2xl font-semibold' style={{ color: colorText }}>
               {category.title || 'بدون گروه'}
            </h2>
         </div>
         <hr className='w-full border-gray-300' />
      </li>
   );
}
