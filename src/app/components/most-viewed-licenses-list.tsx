'use client';

import { useCallback, useRef, useState, useLayoutEffect } from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { LicenseGroup, LicenseType } from '@/lib';
import { Card } from '../service-desk/components/gallery/card';
import { CardExpanded } from '../service-desk/components/gallery/card-expanded';
import { AnimatePresence, motion } from 'motion/react';
import { RemoveScroll } from 'react-remove-scroll';
import { useNormalizedData } from '@/app/service-desk/components/gallery';
import { mockNormalizedLicenses } from '@/mock';

function MostViewedLicenseItem({ license }: { license: LicenseType }) {
   const ref = useRef<HTMLDivElement>(null);
   const [expanded, setExpanded] = useState(false);
   const [popupWidth, setPopupWidth] = useState<number>(0);

   const close = useCallback(() => setExpanded(false), []);
   useOutsideClick(ref, close);

   const { groups } = mockNormalizedLicenses;

   const group: LicenseGroup = groups[license.groupId] || {
      id: 'unknown',
      name: 'Amoozesh',
      title: 'بدون گروه',
      color: 'gray',
      licenseIdList: [],
   };

   useLayoutEffect(() => {
      if (ref.current) {
         const width = ref.current.getBoundingClientRect().width;
         setPopupWidth(width);
      }
   }, []);

   const handleClick = () => setExpanded(true);

   return (
      <>
         {/* wrapper div بجای li */}
         <div onClick={handleClick} className="cursor-pointer" ref={ref}>
            <Card license={license} group={group} />
         </div>

         <AnimatePresence>
            {expanded && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] grid place-items-center bg-black/50 backdrop-blur-sm p-4"
               >
                  <RemoveScroll>
                     <CardExpanded
                        ref={ref}
                        license={license}
                        group={group}
                        close={close}
                        popupWidth={popupWidth}
                     />
                  </RemoveScroll>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}

export function MostViewedLicensesList({ licenses }: { licenses: LicenseType[] }) {
   return (
      <ul className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
         {licenses.map((license) => (
            <MostViewedLicenseItem key={license.id} license={license} />
         ))}
      </ul>
   );
}
