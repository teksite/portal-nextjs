'use client';

import Link from 'next/link';

import {
   tailwindColorValue,
   OpenDataType,
   OpenDataTypeCategoryType
} from '@/lib';
import { GroupIcon } from '@/app/service-desk/components/group-icon';
import React from 'react';

export function GalleryItem({
                               data,
   category
}: {
   data: OpenDataType;
   category: OpenDataTypeCategoryType;
}) {
   const color = category.color ?? 'zinc';
   const colorIcon = tailwindColorValue(color, 900, 80);
   const colorBg = tailwindColorValue(color, 600, 10);
   const colorText = tailwindColorValue(color, 900);

   const filesList = typeof data.fileType === 'string' ?
      <li>{data.fileType}</li> :
      data.fileType.map((type: string, index: number) => (
         <li key={type}>{type}</li>
      )) ;

   return (
      <div className=' p-6 cursor-pointer list-none overflow-hidden rounded-xl border border-zinc-300 py-3 pe-6 shadow-xl transition-shadow hover:bg-slate-50 hover:shadow-sm' style={{backgroundColor:colorBg}}>

         <div className=''>
            <h4 id={`${data}-id`} className='text-center mb-3 truncate text-base font-medium text-zinc-900'>
               {data.title}
            </h4>
          <div className="flex gap-3 items-center">
             <span className="text-sm font-semibold">
                نوع فایل:
             </span>
             <ul className="flex items-center gap-1 text-sm">
                {filesList}
             </ul>
          </div>
            <hr className="my-1"/>
           <div className="flex justify-end">
              <Link href={data.link}>
                 مشاهده
              </Link>
           </div>
         </div>
      </div>
   );
}
