import React, { MouseEventHandler } from 'react';

import { LicenseGroup, LicenseType, cn, tailwindColorValue } from '@/lib';

import { GroupIcon } from '../group-icon';
import { HighlightText } from './highlight-text';
import { motion } from 'motion/react';

export type CardProps = {
   license: LicenseType;
   group: LicenseGroup;
   query?: string;
   onClick?: MouseEventHandler<HTMLLIElement>;
};

export function Card({ license, group, onClick, query }: CardProps) {
   const id = license.id;
   const colorIcon = tailwindColorValue(group.color, 800, 70);

   return (
      <motion.li
         data-itemid={license.id}
         layoutId={`card-${id}`}
         onClick={onClick}
         className='cursor-pointer list-none overflow-hidden rounded-xl border border-zinc-300 px-6 py-3 shadow-xl transition-shadow hover:bg-slate-50 hover:shadow-sm'>
         <div>
            <motion.h4 layoutId={`title-${id}`} className='mb-1 truncate text-base font-medium text-zinc-900'>
               <HighlightText text={license.title} query={query} highlightClassName='font-semibold text-blue-700' />
            </motion.h4>
         </div>
         <div
            className={cn(
               'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
               'flex items-center gap-2'
            )}>
            <motion.div layoutId={`icon-${id}`}>
               <GroupIcon name={group.name as any} size={18} color={colorIcon} strokeWidth={1.5} />
            </motion.div>
            <motion.div layoutId={`group-${id}`} className={`text-xs font-medium text-zinc-900`}>
               {license.serviceGroupCaption || 'بدون گروه'}
            </motion.div>
         </div>
      </motion.li>
   );
}
