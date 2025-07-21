//import callApi from "@/helpers/callApi";
import { mockAllServices } from "@/app/mock/mock-all-services";
import fetchApi from "@/helpers/fetchApi";
import { ServiceType } from "@/models/serviceModel";

const api = fetchApi();

export async function getServices(): Promise<ServiceType[] | undefined> {
	// const res = await callApi().post('/GetServices');
	// return res.data;

	try {
		const { Services }: { Services: ServiceType[] } = await api("GetServices", {
			method: "POST",
			next: { tags: ["GetServices"], revalidate: 120 },
		});
		return Services;
	} catch (error) {
		console.error(error);
	}
}

export async function getRecentServices(): Promise<ServiceType[]> {
	const services: ServiceType[] = (await getServices()) ?? [];
	const certificatesList = (services || [])?.slice(0, Number(9));
	return certificatesList;
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
	}
}

export async function getAllServicesMock(): Promise<ServiceType[]> {
	await wait();
	return mockAllServices;
}

function wait(delay: number = 500): Promise<void> {
	return new Promise<void>((resolve) => setTimeout(() => resolve(), delay));
}

const wait3 = (delay: number = 500): Promise<void> =>
	new Promise<void>((resolve) => setTimeout(resolve, delay));
