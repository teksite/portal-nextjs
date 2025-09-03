'use client';

import Link from 'next/link';

import { TransparencyCategoryType, TransparencyType, tailwindColorValue } from '@/lib';
import { GroupIcon } from '@/app/service-desk/components/group-icon';
import React from 'react';
import { ExternalLink } from 'lucide-react';

export function GalleryItem2({
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
      <div
         className="cursor-pointer list-none overflow-hidden rounded-xl border border-zinc-300 py-3 px-3 shadow-xl transition-shadow hover:bg-slate-50 hover:shadow-sm">
         <div className="flex items-center gap-1 justify-start overflow-hidden">
            <div className="min-w-fit w-fit">
               <GroupIcon name={category.name as any} size={40} color={colorIcon} strokeWidth={1} />
            </div>
            <div className=" ">
               <h5 className="min-w-fit ps-2 pe-6 py-0.5 text-xs mb-2  inline-block"
                   style={{ backgroundColor: colorBg }}>
                  {category.title}
               </h5>
               <h4 id={`${transparency}-id`}
                   className="!mb-0 ps-2 truncate text-base font-medium text-zinc-900  flex items-center gap-2">
               <span>
                   {transparency.title}
               </span>
               </h4>
            </div>
         </div>

         <div>
            <hr className="my-3"/>

            <Link href="#"  className="flex items-center justify-end gap-3 text-sm">
               مشاهده
               <ExternalLink className="-scale-x-100 stroke-black" strokeWidth="1" size="18" />
            </Link>
         </div>
      </div>
   );
}
