import { LicensesNormalized } from "@/models";
import { Hero } from "./hero";

// 1. Force static render for SEO
export const dynamic = "force-static";
// 2. ISR: revalidate every hour
export const revalidate = 3600;

type ServiceDesk2PageProp = object;
export default async function ServiceDesk2Page() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/licenses-normalized`,
		{
			cache: "force-cache",
		}
	);
	const { groupIdList, groups, licenses } =
		(await res.json()) as LicensesNormalized;

	return (
		<div className="overflow-hidden">
			<Hero />
			<main></main>
		</div>
	);
}
