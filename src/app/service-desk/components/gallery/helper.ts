import { useSearchParams } from 'next/navigation';

export function useLicenseQuery() {
   const searchParams = useSearchParams();
   const queryParam = searchParams.get('q') || '';

   return queryParam;
}
