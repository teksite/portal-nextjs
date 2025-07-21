import {getServices} from "@/http/controller/servicesController";

import {searchParamsType} from "@/ui/servicedesk/searchService";
import {LicenseType} from "@/models/licenseModel";
import {LicenseList} from "@/ui/components/license/licenseList";

const groupingAndFilteringLicenses = (
	licenses: LicenseType[],
	search?: searchParamsType
) => {
	const filteredLicenses = licenses.filter((license: LicenseType) => {
		// Filter by title
		if (search?.title?.length && !license.title?.toLowerCase().includes(search.title.toLowerCase())) {
			return false;
		}

		// if (search?.group?.length && license.serviceGroupCaption !== search.group) {
		// 	return false;
		// }

		return true;
	});

	// Group filtered licenses by serviceGroupCaption
	return filteredLicenses.reduce(
		(acc: { [key: string]: LicenseType[] }, license: LicenseType) => {
			const group = license?.serviceGroupCaption || "سایر";
			if (!acc[group]) {
				acc[group] = [];
			}
			acc[group].push(license);
			return acc;
		},
		{}
	);
};

export default async function GroupedLicensesListWrapper({search}: { search?: searchParamsType }) {

	try {
		const licenses: LicenseType[] = await getServices() ?? [];
		if (!licenses.length) {
			return <p className="text-center text-sm font-semibold">موردی ثبت نشده‌است</p>
		}

		const groupedLicenses = groupingAndFilteringLicenses(licenses, search)

		return Object.entries(groupedLicenses).map(([name, items]) => {
			return (
				<section key={name}>
					<div className="flex items-center gap-3 mb-12">
						<h2 className="min-w-fit mb-0">{name}</h2>
						<hr className="w-full hr"/>
					</div>
					<LicenseList data={items}/>
				</section>
			);
		});
	} catch (e) {
		return (
			<p className="text-xs text-center">
				در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.
			</p>
		);
	}
}