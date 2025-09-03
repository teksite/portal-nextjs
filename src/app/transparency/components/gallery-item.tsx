'use client';

import Link from 'next/link';

import { TransparencyCategoryType, TransparencyType, tailwindColorValue } from '@/lib';
import { GroupIcon } from '@/app/service-desk/components/group-icon';
import React from 'react';

export function GalleryItem({
   transparency,
   category
}: {
   transparency: TransparencyType;
   category: TransparencyCategoryType;
}) {
   const color = category.color ?? 'zinc';
   const colorIcon = tailwindColorValue(color, 900, 80);
   const colorBg = tailwindColorValue(color, 600, 10);
   const colorText = tailwindColorValue(color, 900);

   return (
      <div className='cursor-pointer list-none overflow-hidden rounded-xl border border-zinc-300 py-3 pe-6 shadow-xl transition-shadow hover:bg-slate-50 hover:shadow-sm'>
         <div className='px-6 py-0.5 text-sm  min-w-fit w-1/2 mb-3 flex items-center gap-1' style={{ backgroundColor: colorBg }}>
            <GroupIcon name={category.name as any} size={25} color={colorIcon} strokeWidth={1} />
            {category.title}
         </div>
         <div className='ps-6'>
            <h4 id={`${transparency}-id`} className='mb-1 truncate text-base font-medium text-zinc-900'>
               {transparency.title}
            </h4>
            <hr className="my-1"/>
           <div className="flex justify-end">
              <Link href={transparency.link} className="after:content-['_↗']">
                 مشاهده
              </Link>
           </div>
         </div>
      </div>
   );
}
