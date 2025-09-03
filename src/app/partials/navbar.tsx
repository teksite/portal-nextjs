'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

import { motion } from 'motion/react';

const links = [
   { href: '/service-desk', label: 'درگاه مجوز‌ها' },
   { href: '/transparency', label: 'درگاه شفافیت' },
   { href: '/open-data', label: 'درگاه داده‌باز' },
   {
      href: '/login',
      label: 'ورود به سیستم',
      icon: '/login.svg',
      className: 'border border-zinc-300 py-0.5 ps-1 pe-2 rounded-lg'
   }
];

export function Navbar() {
   const [open, setOpen] = useState(false);

   return (
      <>
         <DesktopNav />
         <MobileNavButton open={open} setOpen={setOpen} />
         <MobileNav open={open} setOpen={setOpen} />
      </>
   );
}

function DesktopNav() {
   return (
      <nav className='hidden gap-4 lg:flex'>
         {links.map(({ href, label, icon, className }) => (
            <Link key={href} href={href} className={`flex items-center gap-1 text-sm ${className}`}>
               {icon && <Image src={icon} alt='ورود به حساب کاربری' height='30' width='30' />}
               {label}
            </Link>
         ))}
      </nav>
   );
}

function MobileNavButton({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
   return (
      <button
         onClick={() => setOpen(!open)}
         className='flex size-12 items-center justify-center rounded-lg bg-gray-100 lg:hidden'
         aria-label='Toggle menu'>
         {open ? <XMarkIcon className='h-6 w-6' /> : <Bars2Icon className='h-6 w-6' />}
      </button>
   );
}

function MobileNav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
   return (
      <>
         {open && (
            <div
               className='fixed inset-0 z-40 h-svh bg-black/50 backdrop-blur-sm lg:hidden'
               onClick={() => setOpen(false)}
            />
         )}

         <motion.div
            initial={{ x: '100%' }}
            animate={{ x: open ? '0%' : '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed inset-y-0 top-0 right-0 z-50 h-svh w-72 bg-white p-6 shadow-lg lg:hidden'>
            <div className='flex flex-col gap-3'>
               <figure className='flex items-center justify-start gap-3'>
                  <Image src='/logo.png' alt={'وزارت فرهنگ و ارشاد اسلامی'} width={50} height={50} className='' />
                  <figcaption>
                     <Link href='/public' className='text-sm font-bold'>
                        {'وزارت فرهنگ و ارشاد اسلامی'}
                     </Link>
                  </figcaption>
               </figure>
               <hr className='hr' />
               {links.map(({ href, label }) => (
                  <Link key={href} href={href} className='text-lg text-gray-900' onClick={() => setOpen(false)}>
                     {label}
                  </Link>
               ))}
            </div>
         </motion.div>
      </>
   );
}
