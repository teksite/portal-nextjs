import { fetchLicenseFormData } from "@/http/controller/servicesController";
import { notFound } from "next/navigation";
import {LicenseType} from "@/models";
import {LicenseItem} from "@/app/service-desk-2/services/[id]/components/items/license-item";
import {TopBar} from "@/app/service-desk-2/services/[id]/components/top-bar";

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = params.id;
	const formData = await fetchLicenseFormData(id) as LicenseType[];
	const license = formData.find((item:LicenseType) => item.slug === id);
	if (!formData || !license) {
		notFound();
	}

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
