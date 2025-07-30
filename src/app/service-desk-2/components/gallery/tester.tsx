import { NormalizedDataProvider } from "./contexts";
import { mockNormalizedLicenses } from "@/app/mock/mock-normalized-licenses";

export function Tester({ children }: { children: React.ReactNode }) {
	return (
		<NormalizedDataProvider normalizedData={mockNormalizedLicenses}>
			{children}
		</NormalizedDataProvider>
	);
}
