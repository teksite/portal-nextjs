'use client';

import {
   TransparencyType,
   TransparencyCategoryType,
   tailwindColorValue
} from '@/lib';
import { mockNormalizedTransparencies } from '@/mock';
import { GalleryItem } from '@/app/transparency/components/gallery-item';
import React, { useMemo } from 'react';
import { GroupIcon } from '@/app/service-desk/components/group-icon';
import { GalleryItem2 } from '@/app/transparency/components/gallery-item-2';
export function GalleryList2() {
   const { transparencies, categories, categoryIdList } = mockNormalizedTransparencies;

   return (
      <div className="space-y-12">
         {categoryIdList.map((categoryId: string) => {
            const category = categories[categoryId];

return (
               <div
                  key={category.name}
                  className="grid md:grid-cols-[200px_1fr] gap-6 items-stretch"
               >
                  <CategoryHeader category={category} />

                  <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                     {category.transparencyIdList.map((transparencyId: string) => {
                        const transparency: TransparencyType =
                           transparencies[transparencyId];

                        return (
                           <GalleryItem2
                              key={transparency.id}
                              transparency={transparency}
                              category={category}
                           />
                        );
                     })}
                  </ul>
               </div>
            );
         })}
      </div>
   );
}

function CategoryHeader({ category }: { category: TransparencyCategoryType }) {
   const color = category.color || "zinc";
   const { colorIcon, colorBg, colorText } = useMemo(
      () => ({
         colorIcon: tailwindColorValue(color, 900, 80),
         colorBg: tailwindColorValue(color, 600, 10),
         colorText: tailwindColorValue(color, 900),
      }),
      [category.color]
   );

   return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-lg" style={{ backgroundColor: colorBg }}>

         <h2
            className="text-lg font-semibold text-center mb-0"
            style={{ color: colorText }} >
            {category.title || "بدون گروه"}
         </h2>
      </div>
   );
}
