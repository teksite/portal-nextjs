'use client';

import { ReactNode, useEffect, useState } from 'react';

import DarkModeToggle from '@/app/partials/tools/darkmode-controller';
import HideImagesToggle from '@/app/partials/tools/hide-image-controller';
import ZoomControl from '@/app/partials/tools/zoom-controller';

import FontSizeControl from './tools/font-controller';
import GrayscaleToggle from './tools/grayscale-controller';

interface ThemeChangerProviderProps {
   position: 'right' | 'left';
   children: ReactNode;
}

export default function ThemeChangerProvider({ position = 'left', children }: ThemeChangerProviderProps) {
   const [fontSize, setFontSize] = useState(16);
   const [grayscale, setGrayscale] = useState(false);
   const [hideImages, setHideImages] = useState(false);
   const [zoom, setZoom] = useState(100);
   const [darkMode, setDarkMode] = useState(false);

   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const savedFont = localStorage.getItem('fontSize');
      if (savedFont) setFontSize(parseInt(savedFont));

      const savedGray = localStorage.getItem('grayscale');
      if (savedGray) setGrayscale(savedGray === 'true');

      const savedHide = localStorage.getItem('hideImages');
      if (savedHide) setHideImages(savedHide === 'true');

      const savedZoom = localStorage.getItem('zoom');
      if (savedZoom) setZoom(parseInt(savedZoom));

      const savedDark = localStorage.getItem('darkMode');
      if (savedDark) setDarkMode(savedDark === 'true');
   }, []);

   const handleResetAll = () => {
      setFontSize(16);
      setZoom(100);
      setGrayscale(false);
      setHideImages(false);
      setDarkMode(false);
   };
   const positionClass = position === 'left' ? 'left-6' : 'right-6 ';

   return (
      <>
         <div
            className={`transition-all duration-300 ${grayscale ? 'grayscale filter' : ''} ${hideImages ? 'hide-images' : ''}`}>
            {children}
         </div>

         <button
            className={`${positionClass} fixed  bottom-6 z-50 rounded-full bg-sky-900 p-3 text-white shadow-lg transition hover:bg-blue-700`}
            onClick={() => setIsOpen(!isOpen)}>
            {hideImages ? 'تنظیمات':'⚙'}️
         </button>

         <div
            className={`fixed top-0 left-0 z-40 h-full w-80 transform rounded-s-2xl bg-white shadow-lg transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex h-full flex-col p-6'>
               <h2 className='mb-4 text-lg font-bold'>تنظیمات سایت</h2>

               <FontSizeControl fontSize={fontSize} setFontSize={setFontSize} />
               <GrayscaleToggle grayscale={grayscale} setGrayscale={setGrayscale} />
               <HideImagesToggle hideImages={hideImages} setHideImages={setHideImages} />
               <ZoomControl zoom={zoom} setZoom={setZoom} />
               <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

               <button
                  onClick={handleResetAll}
                  className='mb-4 rounded bg-gray-200 px-4 py-2 text-gray-800 transition hover:bg-gray-300'>
                  بازنشانی تنظیمات
               </button>

               <div className='mt-auto'>
                  <button className='mt-4 text-red-500' onClick={() => setIsOpen(false)}>
                     بستن
                  </button>
               </div>
            </div>
         </div>

         {isOpen && <div className='fixed inset-0 z-30 bg-black/30' onClick={() => setIsOpen(false)} />}

         <style jsx global>{`
            .hide-images img,
            .hide-images svg {
               display: none !important;
            }
         `}</style>
      </>
   );
}
