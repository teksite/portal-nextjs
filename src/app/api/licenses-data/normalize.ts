import { normalizeFarsi, removeFalsyPropsFast } from "@/lib";
import { LicenseGroup, LicenseType } from "@/models";

export function normalizeLicensesData(licenseList: LicenseType[]) {
	const licenses: Record<string, LicenseType> = {};
	const groups: Record<string, LicenseGroup> = {};
	const groupIdList: string[] = [];

	licenseList.forEach((item) => {
		const license = removeFalsyPropsFast(item) as LicenseType;
		correctFarsiChars(license);
		if (!isValid(license)) return;
		license.id = license.slug;
		licenses[license.id] = license;
		const { id, groupId } = license;
		if (!groups[groupId]) {
			const group = createGroupFromLicense(license);
			correctFarsiChars(group);
			groups[groupId] = group;
			groupIdList.push(groupId);
		}
		groups[groupId].licenseIdList.push(id);
	});
	return { licenses, groups, groupIdList };
}

function createGroupFromLicense(license: LicenseType): LicenseGroup {
	const { groupId: id, serviceGroupCaption: title } = license;
	const group: LicenseGroup = {
		id,
		title,
		licenseIdList: [],
		name: groupData[id].name,
		color: groupData[id].color,
	};
	return group;
}

function isValid({
	id,
	groupId,
	title,
	serviceGroupCaption,
}: LicenseType): boolean {
	return !!(id && groupId && title && serviceGroupCaption);
}

function correctFarsiChars(obj: Record<string, any>) {
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === "string")
			(obj as any)[key] = normalizeFarsi(obj[key]) as any;
	});
}

const groupData: Record<string, { name: string; color: string }> = {
	"1233027780000000101": { name: "Amoozesh", color: "orange" },
	"1233027780000000115": { name: "Bazi", color: "amber" },
	"1233027780000000106": { name: "Chap", color: "lime" },
	"1233027780000000119": { name: "Film", color: "green" },
	"1233027780000000102": { name: "Honar", color: "teal" },
	"1233027780000000100": { name: "Majazi", color: "cyan" },
	"1233027780000000109": { name: "Moarefiname", color: "sky" },
	"1233027780000000114": { name: "Moassesat", color: "blue" },
	"1233027780000000120": { name: "Resane", color: "indigo" },
	"1233027780000000116": { name: "Sayer", color: "violet" },
	"1152027780000000265": { name: "Omoomi", color: "fuchsia" },
};
