import { fetchLicenseFormData } from "@/http/controller/servicesController";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = params.id;
	const formData = await fetchLicenseFormData(id);
	if (!formData) {
		notFound();
	}

	return <main></main>;
}
