import { SolidLink } from '@/components';
import { BadgeElectronics, BadgePresence } from '@/components/badges';
import { BadgeCost } from '@/components/badges/badge-cost';
import { LicenseType } from '@/lib';

export function LicenseItem4({ data }: { data: LicenseType }) {
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
            <table className='w-full'>
               <tbody>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>کد خدمت</th>
                     <td className='border border-zinc-300 p-3 text-center'>{data.id}</td>
                  </tr>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>مدت اخذ خدمت</th>
                     <td className='border border-zinc-300 p-3 text-center'>{data.avgTime}</td>
                  </tr>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>گروه خدمت</th>
                     <td className='border border-zinc-300 p-3 text-center'>{data.serviceGroupCaption}</td>
                  </tr>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>هزینه</th>
                     <td className='border border-zinc-300 p-3 text-center'>
                        <BadgeCost needCost={!!data.cost} />
                     </td>
                  </tr>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>نحوه اخذ خدمت</th>
                     <td className='border border-zinc-300 p-3 text-center'>
                        <BadgeElectronics electronics={data.electronics} />
                     </td>
                  </tr>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>نحوه مراجعه</th>
                     <td className='border border-zinc-300 p-3 text-center'>
                        <BadgePresence needPresent={!!data.needPresence} />
                     </td>
                  </tr>
                  <tr>
                     <th className='border border-zinc-300 p-3 text-center'>مدت زمان اعتبار</th>
                     <td className='border border-zinc-300 p-3 text-center'>{data.serviceTime ?? 'نامحدود'}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}
