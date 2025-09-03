import { mockNormalizedLicenses } from '@/mock/mock-normalized-licenses';

import { NormalizedDataProvider } from './contexts';

export function Tester({ children }: { children: React.ReactNode }) {
   return <NormalizedDataProvider normalizedData={mockNormalizedLicenses}>{children}</NormalizedDataProvider>;
}
