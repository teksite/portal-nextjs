//import callApi from "@/helpers/callApi";
import {fetchApi} from "@/lib/";
import {LicenseType} from "@/models/licenseModel";

const api = fetchApi();

export async function getServices(): Promise<LicenseType[]> {
	// const res = await callApi().post('/GetServices');
	// return res.data;

	try {
		const { Services }: { Services: LicenseType[] } = await api("GetServices", {
			method: "POST",
			next: { tags: ["GetServices"], revalidate: 120 },
		});
		Services.map((license:LicenseType)=>{
			switch (license.serviceGroupCaption){
				case 'فضاي مجازي':
					license.image='/assets/images/placeholder/virtual-env.jpg';
					break;
				default:
					license.image='/assets/images/placeholder/other-license.jpg';

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
