import {fetchApi} from "@/lib/";
import {LicenseType} from "@/models/licenseModel";
import {LicenseGroupType} from "@/models/licenseGroupModel";
import {mockAllGroup} from "@/app/mock";


export function getServiceGroupInfo(license: LicenseType): LicenseGroupType | undefined {
	//todo change to api mode
	return mockAllGroup.find((group : LicenseGroupType) => group.title === license.serviceGroupCaption);
}