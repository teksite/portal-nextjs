'use client';

import React, { useEffect, useId, useRef, useState } from 'react';

import Link from 'next/link';

import { useNormalizedData } from '@/app/service-desk/components/gallery';
import { GroupIcon } from '@/app/service-desk/components/group-icon';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { LicenseType } from '@/lib';
import { mockNormalizedLicenses } from '@/mock';

import { AnimatePresence, motion } from 'motion/react';

export function ExpandableCardDemoList2() {
   const { licenses, groups } = useNormalizedData();
   const [active, setActive] = useState<LicenseType | null>(null);
   const ref = useRef<HTMLDivElement>(null);
   const id = useId();
   useEffect(() => {
      function onKeyDown(event: KeyboardEvent) {
         if (event.key === 'Escape') {
            setActive(null);
         }
      }

      if (active && typeof active === 'object') {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }

      window.addEventListener('keydown', onKeyDown);

      return () => window.removeEventListener('keydown', onKeyDown);
   }, [active]);

   useOutsideClick(ref, () => setActive(null));

   return (
      <>
         <AnimatePresence>
            {active && typeof active === 'object' ? (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='fixed inset-0 z-[100] grid place-items-center bg-zinc-950/50 backdrop-blur-sm'
                  dir='rtl'>
                  <motion.div
                     layoutId={`card-${active.title}-${active.id}`}
                     ref={ref}
                     className='x-box flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white p-0 md:h-fit'>
                     <div className='p-6'>
                        <div className='mb-3'>
                           <div className='flex items-center justify-start gap-3'>
                              <motion.div layoutId={`image-${active.title}-${active.id}`}>
                                 <GroupIcon
                                    name={groups[active.groupId].name as any}
                                    className='size-12 text-blue-600'
                                 />
                              </motion.div>
                              <motion.span layoutId={`description-${active.serviceGroupCaption}-${active.id}`}>
                                 {active.serviceGroupCaption}
                              </motion.span>
                           </div>
                           <div>کد خدمت: {active.code}</div>
                        </div>
                        <motion.h3 layoutId={`title-${active.title}-${active.id}`} className=''>
                           {active.title}
                        </motion.h3>
                        <hr className='hr my-3' />
                        <p className='text-sm'>
                           {active.description ||
                              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی'}
                        </p>
                        <ul>
                           <li>
                              <span className='p'>نیاز به مراجعه حضوری دارد: </span>
                              <span className='p font-bold'>{active.needPresence ? 'دارد' : 'ندارد'}</span>
                           </li>
                           <li>
                              <span className='p'>نحوه ارائه خدمت: </span>
                              <span className='p font-bold'>
                                 {active.electronics == 1 ? 'الکترونیکی' : 'غیرالکترونیکی'}
                              </span>
                           </li>
                           <li>
                              <span className='p'>نیاز به پرداخت هزینه: </span>
                              <span className='p font-bold'>{active.cost ? 'دارد' : 'ندارد'}</span>
                           </li>
                           <li>
                              <span className='p'>متوسط زمان اخذ خدمت: </span>
                              <span className='p font-bold'>{active.avgTime ?? '-'}</span>
                           </li>
                        </ul>
                     </div>
                     <div className='flex divide-x divide-zinc-300 border-t border-zinc-300 dark:divide-zinc-600 dark:border-zinc-600'>
                        <Link
                           href=''
                           className='hover:shadow-innertext-sm block w-full p-3 text-center hover:bg-zinc-300 dark:hover:bg-zinc-600'>
                           جزئیات بیشتر
                        </Link>
                        <Link
                           href=''
                           className='hover:shadow-innertext-sm block w-full p-3 text-center hover:bg-zinc-300 dark:hover:bg-zinc-600'>
                           ثبت درخواست
                        </Link>
                     </div>
                  </motion.div>
               </motion.div>
            ) : null}
         </AnimatePresence>
         <div className='grid gap-6 lg:grid-cols-2'>
            {Object.values(licenses).map((card, index) => (
               <motion.div
                  layoutId={`card-${card.title}-${card.id}`}
                  key={`card-${card.title}-${card.id}`}
                  onClick={() => setActive(card)}
                  className='x-box flex items-center gap-3 rounded-lg border border-zinc-300 p-4'>
                  <motion.div layoutId={`image-${card.title}-${card.id}`}>
                     <GroupIcon name={groups[card.groupId].name as any} className='size-12 text-blue-600' />
                  </motion.div>
                  <div className=''>
                     <motion.h3
                        layoutId={`title-${card.title}-${card.id}`}
                        className='text-center font-medium text-neutral-800 md:text-left dark:text-neutral-200'>
                        {card.title}
                     </motion.h3>
                     <motion.span
                        layoutId={`description-${card.serviceGroupCaption}-${card.id}`}
                        className='text-center text-neutral-600 md:text-left dark:text-neutral-400'>
                        {card.serviceGroupCaption}
                     </motion.span>
                  </div>
               </motion.div>
            ))}
         </div>
      </>
   );
}
