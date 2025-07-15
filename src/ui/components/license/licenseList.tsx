import { getRecentServices } from "@/http/controller/servicesController";
import LicenseBox from "@/ui/components/license/licenseBox";
import {LicenseType} from "@/models/licenseModel";

export async function LicenseListWrapper() {
	try {
		const licenseList: LicenseType[] = (await getRecentServices()) ?? [];
		return <LicenseList data={licenseList} />;
	} catch (error) {
		return (
			<p className="text-xs text-center">
				در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.
			</p>
		);
	}
}

export function LicenseList({ data }: { data: LicenseType[] }) {
	return !data.length ? (
		<p className="text-center text-sm font-semibold">موردی ثبت نشده‌است</p>
	) : (
		<ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
			{data.map((item: LicenseType, index: number) => (
				<li key={index}>
					<LicenseBox license={item} />
				</li>
			))}
		</ul>
	);
}
