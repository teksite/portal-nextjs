import Link from 'next/link';

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbSeparator
} from '@/registry/new-york-v4/ui/breadcrumb';

export function TopBar() {
   return (
      <div className='bg-white px-6 py-3 shadow-sm'>
         <div className='flex items-center justify-between gap-6'>
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>صفحه نخست</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/service-desk'>مجوزها</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  {/* <BreadcrumbItem>
                  <BreadcrumbLink href='/'>صفحه نخست</BreadcrumbLink>
               </BreadcrumbItem> */}
               </BreadcrumbList>
            </Breadcrumb>
            <Link href='/service-desk'>بازگشت</Link>
         </div>
      </div>
   );
}

{
   /* items={[
                  {
                     title: 'صفحه نخست',
                     href: '/'
                  },
                  {
                     title: 'همه مجوزها',
                     href: '/service-desk-2'
                  },
                  {
                     title: 'همه مجوزها'
                  }
               ]} 
                  */
}
