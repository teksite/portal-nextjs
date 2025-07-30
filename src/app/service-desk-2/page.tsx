import { LicensesNormalized } from "@/models";
import { Gallery, NormalizedDataProvider } from "./components/gallery";
import { Hero } from "./components";

// 1. Force static render for SEO
export const dynamic = "force-dynamic";
// 2. ISR: revalidate every hour
// export const revalidate = 3600;

type ServiceDesk2PageProp = object;
export default async function ServiceDesk2Page() {
	const res = await fetch(
		// `http://localhost:3000/api/licenses-data`,
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/licenses-data`,
		{
			cache: "force-cache",
		}
	);
	const data = (await res.json()) as LicensesNormalized;

	return (
		<div className="overflow-hidden">
			<Hero />
			<NormalizedDataProvider normalizedData={data}>
				<Gallery />
			</NormalizedDataProvider>
		</div>
	);
}
