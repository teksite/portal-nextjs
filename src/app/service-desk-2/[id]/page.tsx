import { notFound } from "next/navigation";
import { LicensesNormalized } from "@/models";
import { LicenseItem4 } from "./components/items/license-item4";

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
				<div className="mt-12">
					<LicenseItem4 data={license} />
				</div>
			</div>
		</>
	);
}
