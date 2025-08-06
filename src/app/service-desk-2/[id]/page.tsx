import { fetchLicenseFormData } from "@/http/controller/servicesController";
import { notFound } from "next/navigation";
import { LicensesNormalized, LicenseType } from "@/models";
import { LicenseItem } from "@/app/service-desk-2/services/[id]/components/items/license-item";
import { TopBar } from "@/app/service-desk-2/services/[id]/components/top-bar";

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = params.id;

	const res = await fetch(`http://localhost:3000/api/licenses-data`, {
		cache: "force-cache",
	});
	const data = (await res.json()) as LicensesNormalized;
	const license = data.licenses[id];
	if (!license) {
		notFound();
	}

	const group = data.groups[license.groupId];

	return (
		<>
			<div className="inner-container">
				<TopBar />
				<div className="mt-12">
					<LicenseItem data={license} />
				</div>
			</div>
		</>
	);
}
