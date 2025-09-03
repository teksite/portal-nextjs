import { fetchLicensesData } from '@/lib/fetch-license';
import { MostViewedLicensesList } from './most-viewed-licenses-list';

export default async function MostViewedLicenses({ count}: { count?: number }) {
   const { licenses } = await fetchLicensesData()
   const mostViewed = Object.values(licenses).slice(0, count)

   return <MostViewedLicensesList licenses={mostViewed} />
}
