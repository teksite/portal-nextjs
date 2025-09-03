import Image from 'next/image';
import Link from 'next/link';

import { env } from '@/lib';

import { Navbar } from './navbar';

export function Header() {
   const appName = env('APP_NAME') ?? 'وزارت فرهنگ و ارشاد اسلامی';

   return (
      <header className='sticky top-0 z-20 flex w-full items-center justify-between bg-white/70 px-3 py-1 shadow-sm backdrop-blur-2xl'>
         <figure className='flex items-center justify-start gap-3'>
            <Image src='/logo.png' alt={'وزارت فرهنگ و ارشاد اسلامی'} width={50} height={50} className='' />
            <figcaption>
               <Link href='/'>{appName}</Link>
            </figcaption>
         </figure>
         <div className='flex items-center justify-end gap-3'>
            <Navbar />
         </div>
      </header>
   );
}
