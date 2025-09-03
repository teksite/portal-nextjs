import { SolidLink } from '@/components';
import { BadgeElectronics, BadgePresence } from '@/components/badges';
import { BadgeCost } from '@/components/badges/badge-cost';
import { LicenseType } from '@/lib';

export function LicenseItem2({ data }: { data: LicenseType }) {
   return (
      <>
         <h1 className='text-center'>{data.title}</h1>
         <div className='x-box'>
            {data.description && <p>{data.description}</p>}
            <table className='w-full'>
               <thead>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>کد خدمت</th>
                     <th className='border border-zinc-300 p-3 text-center'>گروه خدمت</th>
                     <th className='border border-zinc-300 p-3 text-center'>مدت اخذ خدمت</th>
                     <th className='border border-zinc-300 p-3 text-center'>هزینه</th>
                     <th className='border border-zinc-300 p-3 text-center'>نحوه اخذ خدمت</th>
                     <th className='border border-zinc-300 p-3 text-center'>نحوه مراجعه</th>
                     <th className='border border-zinc-300 p-3 text-center'>مدت زمان اعتبار</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className='border border-zinc-300 p-3 text-center'>{data.id}</td>
                     <td className='border border-zinc-300 p-3 text-center'>{data.avgTime}</td>
                     <td className='border border-zinc-300 p-3 text-center'>{data.serviceGroupCaption}</td>
                     <td className='border border-zinc-300 p-3 text-center'>
                        <BadgeCost needCost={!!data.cost} />
                     </td>
                     <td className='border border-zinc-300 p-3 text-center'>
                        <BadgeElectronics electronics={data.electronics} />
                     </td>
                     <td className='border border-zinc-300 p-3 text-center'>
                        <BadgePresence needPresent={!!data.needPresence} />
                     </td>
                     <td className='border border-zinc-300 p-3 text-center'>{data.serviceTime ?? 'نامحدود'}</td>
                  </tr>
               </tbody>
            </table>
            <div className='mt-6 text-center'>
               <p className='text-center'>{'جهت ثبت درخواست اخذ این مجوز روی دکمه زیر کلیک کنید'}</p>
               <SolidLink href='#' color='green' size='sm'>
                  ثبت درخواست
               </SolidLink>
            </div>
         </div>
      </>
   );
}
