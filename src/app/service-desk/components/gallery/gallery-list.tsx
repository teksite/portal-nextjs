'use client';

import React, { MouseEventHandler, useCallback, useMemo, useRef, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useOutsideClick } from '@/hooks/use-outside-click';
import { LicenseGroup, cn, tailwindColorValue } from '@/lib';
import { Button } from '@/registry/new-york-v4/ui/button';

import { GroupIcon } from '../group-icon';
import { Card } from './card';
import { CardExpanded } from './card-expanded';
import { useNormalizedData } from './contexts';
import { filterLogic } from './filter-logic';
import { FunnelX } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { RemoveScroll } from 'react-remove-scroll';

export function GalleryList() {
   const ref = useRef<HTMLDivElement>(null);
   const searchParams = useSearchParams();
   const query = searchParams.get('q') || '';

   const [activeId, setActiveId] = useState<string>();
   const [popupWidth, setPopupWidth] = useState<number>();
   const { groups, licenses } = useNormalizedData();
   const close = useCallback(() => setActiveId(undefined), []);
   useOutsideClick(ref, close);

   const handleItemClick = useCallback<MouseEventHandler<HTMLLIElement>>((e) => {
      const id = e.currentTarget.dataset['itemid'];
      const width = e.currentTarget.getBoundingClientRect().width;
      setActiveId(id);
      setPopupWidth(width);
   }, []);
   const active = activeId ? licenses[activeId] : undefined;

   return (
      <>
         <AnimatePresence>
            {active ? (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                     opacity: 0
                  }}
                  className='fixed inset-0 z-[100] grid place-items-center bg-black/50 backdrop-blur-sm'>
                  <RemoveScroll>
                     <CardExpanded
                        ref={ref}
                        key={active.id}
                        license={active}
                        group={groups[active.groupId]}
                        close={close}
                        popupWidth={popupWidth}
                     />
                  </RemoveScroll>
               </motion.div>
            ) : null}
         </AnimatePresence>
         {query ? (
            <FilteredList onItemClick={handleItemClick} query={query} />
         ) : (
            <CategorizedList onItemClick={handleItemClick} />
         )}
      </>
   );
}

function FilteredList({ query, onItemClick }: { query: string; onItemClick?: MouseEventHandler<HTMLLIElement> }) {
   const { groups, licenses } = useNormalizedData();
   const filteredList = useMemo(() => filterLogic(Object.values(licenses), query), [licenses, query]);

   return (
      <div>
         {filteredList.length === 0 ? (
            <div>آیتمی یافت نشد </div>
         ) : (
            <ul className={cn('lg:grid-cols-2 2xl:grid-cols-3', 'grid gap-6 p-4')}>
               <FilterGroupHeader query={query} />
               {filteredList.map((license) => (
                  <Card
                     query={query}
                     key={license.id + license.title}
                     license={license}
                     group={groups[license.groupId]}
                     onClick={onItemClick as any}
                  />
               ))}
            </ul>
         )}
      </div>
   );
}

function FilterGroupHeader({ query }: { query?: string }) {
   const router = useRouter();

   return (
      <h2 className='col-span-full mt-16 mb-8 flex items-center gap-3'>
         <div className='flex w-fit min-w-fit items-center gap-3'>
            <div className={cn('mb-0 flex gap-3 text-start text-2xl font-semibold text-zinc-900')}>
               <div>{`لیست فیلتر شده`}</div>
               <Button
                  className='flex gap-1'
                  variant={'outline'}
                  onClick={() => {
                     router.push(`/service-desk`);
                  }}>
                  <FunnelX className='stroke-zinc-800' stroke='1.5' />
                  <div>حذف فیلتر</div>
               </Button>
            </div>
         </div>
         <hr className='w-full border-gray-300' />
      </h2>
   );
}

function CategorizedList({ onItemClick }: { onItemClick?: MouseEventHandler<HTMLLIElement> }) {
   const { groupIdList, groups, licenses } = useNormalizedData();

   return (
      <ul className={cn('lg:grid-cols-2 2xl:grid-cols-3', 'grid gap-6')}>
         {groupIdList.reduce<React.ReactElement[]>((total, groupId) => {
            const group = groups[groupId];
            total.push(<CategoryHeader group={group} key={group.name} />);
            group.licenseIdList.forEach((licenseId) => {
               const license = licenses[licenseId];

               total.push(
                  <Card
                     key={license.id}
                     license={license}
                     group={groups[license.groupId]}
                     onClick={onItemClick as any}
                  />
               );
            });

            return total;
         }, [])}
      </ul>
   );
}

function CategoryHeader({ group }: { group: LicenseGroup }) {
   const { colorIcon, colorBg, colorText } = useMemo(
      () => ({
         colorIcon: tailwindColorValue(group.color, 900, 80),
         colorBg: tailwindColorValue(group.color, 600, 10),
         colorText: tailwindColorValue(group.color, 900)
      }),
      []
   );

   return (
      <li className='col-span-full mt-12 mb-3 flex items-center gap-3 bg-white will-change-transform'>
         <div className='flex w-fit min-w-fit items-center gap-3'>
            <div className='rounded-sm p-1' style={{ backgroundColor: colorBg }}>
               <GroupIcon name={group.name as any} size={48} color={colorIcon} strokeWidth={1} />
            </div>
            <h2 className='mb-0 text-start text-2xl font-semibold' style={{ color: colorText }}>
               {group.title || 'بدون گروه'}
            </h2>
         </div>
         <hr className='w-full border-gray-300' />
      </li>
   );
}
