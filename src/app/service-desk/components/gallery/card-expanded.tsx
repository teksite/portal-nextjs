import React, { RefObject, useMemo } from 'react';

import Link from 'next/link';

import { LicenseGroup, LicenseType, cn, tailwindColorValue } from '@/lib';
import { DataList, DataListItem, DataListLabel, DataListValue } from '@/registry/new-york-v4/ui/data-list';

import { GroupIcon } from '../group-icon';
import { motion } from 'motion/react';

export type CardExpandedProps = {
   license: LicenseType;
   group: LicenseGroup;
   query?: string;
   close: () => void;
   popupWidth?: number;
   ref?: RefObject<HTMLDivElement | null>;
};
export function CardExpanded({ license, ref, group, close, popupWidth }: CardExpandedProps) {
   const { colorIcon, colorBg, colorText } = useMemo(
      () => ({
         colorIcon: tailwindColorValue(group.color, 800, 70),
         colorBg: tailwindColorValue(group.color, 50),
         colorText: tailwindColorValue(group.color, 800)
      }),
      []
   );

   const id = license.id;

   return (
      <motion.div
         ref={ref}
         style={{ maxWidth: '90vw', width: popupWidth ? popupWidth + ((popupWidth * 0.2) | 0) : undefined }} //add 20%/ bitwise technique is used
         layoutId={`card-${id}`}
         className={cn(
            // 'px-6 py-3',
            'pointer-events-auto flex flex-col overflow-hidden rounded-xl border border-zinc-500 bg-white shadow-xl md:h-fit'
         )}
         onClick={(e) => e.stopPropagation()}>
         <div>
            <div className='px-6 py-3'>
               <motion.h4 layoutId={`title-${id}`} className='text-xl font-semibold text-zinc-900'>
                  {license.title}
               </motion.h4>
            </div>
            <div className='flex items-center gap-2 px-6'>
               <motion.div layoutId={`icon-${id}`} className={`rounded-sm p-1`} style={{ backgroundColor: colorBg }}>
                  <GroupIcon name={group.name as any} size={22} color={colorIcon} strokeWidth={1.5} />
               </motion.div>
               <motion.div layoutId={`group-${id}`} className={`text-sm font-normal`} style={{ color: colorText }}>
                  {license.serviceGroupCaption || 'بدون گروه'}
               </motion.div>
               <motion.div className={`ms-auto text-sm font-normal text-zinc-800`}>
                  <span className=''>کد خدمت: {license.code}</span>
               </motion.div>
            </div>
         </div>
         <hr className='my-3 border-zinc-300' />
         <DataListSection license={license} />
         <ButtonSection license={license} close={close} />
      </motion.div>
      // </div>
   );
}

function DataListSection({ license }: { license: LicenseType }) {
   return (
      <div>
         <DataList orientation='horizontal' size='sm' className='gap-3 px-6 text-start'>
            <DataListItem>
               <DataListLabel className='flex-1'>{'نحوه اخذ خدمت:'}</DataListLabel>
               <DataListValue className='flex-1'>{license.needPresence ? 'حضوری' : 'غیرحضوری'}</DataListValue>
            </DataListItem>
            <DataListItem>
               <DataListLabel className='flex-1'>{'هزینه:'}</DataListLabel>
               <DataListValue className='flex-1'>{license.cost ? 'مشمول هزینه' : 'رایگان'}</DataListValue>
            </DataListItem>
            <DataListItem>
               <DataListLabel className='flex-1'>{'نحوه ارائه خدمت:'}</DataListLabel>
               <DataListValue className='flex-1'>
                  {license.electronics == 0 ? 'غیر الکترونیکی' : license.electronics == 1 ? 'الکترونیکی' : 'ترکیبی'}
               </DataListValue>
            </DataListItem>
            <DataListItem>
               <DataListLabel className='flex-1'>{'مدت زمان اخذ خدمت:'}</DataListLabel>
               <DataListValue className='flex-1'>{license.avgTime ?? '-'}</DataListValue>
            </DataListItem>
            <DataListItem>
               <DataListLabel className='flex-1'>{'توضیحات:'}</DataListLabel>
            </DataListItem>
            <DataListValue className='mb-4'>{license.description}</DataListValue>
            <DataListValue className='mb-4'>
               <Link
                  href={`/service-desk/${license.id}`}
                  className='w-full p-3 text-sm text-blue-600 hover:text-blue-900'>
                  جزیئات بیشتر
               </Link>
            </DataListValue>
         </DataList>
      </div>
   );
}

function ButtonSection({ license, close }: { license: LicenseType; close: () => void }) {
   return (
      <div className='flex divide-x divide-zinc-300 border-t border-zinc-300'>
         <button
            onClick={close}
            className='flex-1 p-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100'>
            بستن
         </button>
         <Link
            href={`/request/${license.id}`}
            className='flex-1 p-3 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100'>
            ثبت درخواست
         </Link>
      </div>
   );
}
