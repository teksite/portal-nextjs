import Image from 'next/image';
import Link from 'next/link';

import { ThemeSwitch } from './theme-switch';

export function NavigationBar() {
   const imageSize = 50;

   return (
      <div className='flex w-full justify-between gap-6 sm:w-auto sm:items-center'>
         <ThemeSwitch />
         <div>امید</div>
         <div>عبدالهی</div>
         <Link href='/public'>
            {/* prettier-ignore */}
            <Image src="/logo.png" alt={'لوگو'} width={imageSize} height={imageSize} />
         </Link>
      </div>
   );
}
