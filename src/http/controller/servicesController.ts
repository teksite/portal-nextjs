//import callApi from "@/helpers/callApi";
import {fetchApi} from "@/lib/";
import {licenseType} from "@/models/licenseModel";

const api = fetchApi();

export async function getServices(): Promise<licenseType[]> {
	// const res = await callApi().post('/GetServices');
	// return res.data;

	try {
		const { Services }: { Services: licenseType[] } = await api("GetServices", {
			method: "POST",
			next: { tags: ["GetServices"], revalidate: 120 },
		});
		return Services;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getRecentServices(): Promise<licenseType[]> {
	const services: licenseType[] = (await getServices()) ?? [];
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
