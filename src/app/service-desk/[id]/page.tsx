import { notFound } from 'next/navigation';

import { LicensesNormalized } from '@/lib';
import { fetchLicense } from '@/lib/fetch-license';

import { LicenseItem4 } from './components/items/license-item4';
import { TopBar } from './components/top-bar';

export default async function Page(props: { params: Promise<{ id: string }> }) {
   const params = await props.params;
   const id = params.id;

   // const res = await fetch(`http://localhost:3000/api/licenses-data-offline`, {
   //    cache: 'force-cache'
   // });
   // const data = (await res.json()) as LicensesNormalized;
   // const license = data.licenses[id];

   const license = await fetchLicense(id);

   if (!license) {
      notFound();
   }

   return (
      <>
         <div className='inner-container'>
            <TopBar />
            <div className='mt-12'>
               <LicenseItem4 data={license} />
            </div>
         </div>
      </>
   );
}
