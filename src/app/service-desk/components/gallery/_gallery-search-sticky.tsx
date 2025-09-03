'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib';

import { GallerySearch } from './gallery-search';

export function GallerySearchSticky() {
   const [showSticky, setShowSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         console.log(window.scrollY);
         setShowSticky(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div
         style={{ position: 'sticky' }}
         // className={`sticky top-14 z-50 bg-white`}
         className={cn(
            'sticky top-14 z-50 bg-white shadow-md duration-500',
            showSticky ? '-mt-36 opacity-100' : 'mt-0 opacity-0'
            // showSticky ? '-mt-36 translate-y-0 opacity-100' : 'mt-0 -translate-y-full opacity-0'
         )}>
         <div className='inner-container py-3'>
            <GallerySearch size='lg' />
         </div>
      </div>
   );
}
