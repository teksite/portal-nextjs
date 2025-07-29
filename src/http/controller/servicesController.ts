//import callApi from "@/helpers/callApi";
import { fetchApi } from "@/lib/";
import { LicensesNormalized, LicenseType } from "@/models/licenseModel";
import { normalizeLicensesData } from "./normalize-license-data";

const api = fetchApi();

export async function getAllLicensesData(): Promise<LicensesNormalized> {
	try {
		const { Services: licenseList }: { Services: LicenseType[] } = await api(
			"GetServices",
			{
				method: "POST",
				next: { tags: ["GetServices"], revalidate: 120 },
			}
		);

		const normalized = normalizeLicensesData(licenseList);
		return normalized;
	} catch (error) {
		console.error(error);
		throw new Error("خطا در بازیابی لیست خدمات.");
	}
}

export async function getServices(): Promise<LicenseType[]> {
	// const res = await callApi().post('/GetServices');
	// return res.data;

	try {
		const { Services }: { Services: LicenseType[] } = await api("GetServices", {
			method: "POST",
			next: { tags: ["GetServices"], revalidate: 120 },
		});
		Services.map((license: LicenseType) => {
			switch (license.serviceGroupCaption) {
				case "فضاي مجازي":
					license.icon = "/assets/images/placeholder/virtual-env.jpg";
					break;
				default:
					license.icon = "/assets/images/placeholder/other-license.jpg";
			}
		});

		return Services;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getRecentServices(): Promise<LicenseType[]> {
	const services: LicenseType[] = (await getServices()) ?? [];
	return (services || [])?.slice(0, Number(9));
}

export async function getGroupServices() {
	// const res = await callApi().post('/GetServiceGroup');
	// return res.data;
	try {
		const { SGData }: { SGData: any } = await api("GetServiceGroup", {
			method: "POST",
			next: { tags: ["GetServiceGroup"], revalidate: 120 },
		});
		return SGData;
	} catch (error) {
		console.error(error);
		return [];
	}
}
