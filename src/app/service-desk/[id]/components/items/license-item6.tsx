import { SolidLink } from '@/components';
import { BadgeElectronics, BadgePresence } from '@/components/badges';
import { BadgeCost } from '@/components/badges/badge-cost';
import { LicenseType } from '@/lib';

export function LicenseItem6({ data }: { data: LicenseType }) {
   return (
      <>
         <div className='x-box overflow-x-auto'>
            <div className='flex items-center justify-between gap-6'>
               <h1 className='mb-0 w-fit min-w-fit'>{data.title}</h1>
               <hr className='hr w-full border-dotted' />
               <SolidLink href='#' color='green' size='sm' className='inline-block w-fit min-w-fit'>
                  ثبت درخواست
               </SolidLink>
            </div>
            <hr className='hr my-6 w-full' />

            {data.description && <p>{data.description}</p>}
            <div className='md:columns-2'>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>کد خدمت</div>
                  <div className='p-3 text-center'>{data.id}</div>
               </div>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>مدت اخذ خدمت</div>
                  <div className='p-3 text-center'>{data.avgTime}</div>
               </div>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>گروه خدمت</div>
                  <div className='p-3 text-center'>{data.serviceGroupCaption}</div>
               </div>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>هزینه</div>
                  <div className='p-3 text-center'>
                     <BadgeCost needCost={!!data.cost} />
                  </div>
               </div>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>نحوه اخذ خدمت</div>
                  <div className='p-3 text-center'>
                     <BadgeElectronics electronics={data.electronics} />
                  </div>
               </div>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>نحوه مراجعه</div>
                  <div className='p-3 text-center'>
                     <BadgePresence needPresent={!!data.needPresence} />
                  </div>
               </div>
               <div className='flex items-center justify-between gap-3 border-b border-zinc-200'>
                  <div className='p-3 text-center'>مدت زمان اعتبار</div>
                  <div className='p-3 text-center'>{data.serviceTime ?? 'نامحدود'}</div>
               </div>
            </div>
         </div>
      </>
   );
}
