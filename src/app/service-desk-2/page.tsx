import { LicensesNormalized, LicenseType } from "@/models";
import { NormalizedDataProvider } from "./components/gallery";
import { ServiceDesk2Client } from "@/app/service-desk-2/components/ServiceDesk2Client";

export const dynamic = "force-dynamic";

type ServiceDesk2PageProp = object;
export default async function ServiceDesk2Page() {
	const res = await fetch(`http://localhost:3000/api/licenses-data`, {
		cache: "force-cache",
	});
	const data = (await res.json()) as LicensesNormalized;

	return (
		<div className="">
			<NormalizedDataProvider normalizedData={data}>
				<ServiceDesk2Client />
			</NormalizedDataProvider>
		</div>
	);
}
