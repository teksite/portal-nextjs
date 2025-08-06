import { getRecentServices } from "@/http/controller/servicesController";
import { LicenseType } from "@/models";
import CertificateBox from "@/ui/components/certificate/certificateBox";

export async function CertificatesListWrapper() {
	try {
		const serviceList: LicenseType[] = (await getRecentServices()) ?? [];
		return <CertificateList data={serviceList} />;
	} catch (error) {
		return (
			<p className="text-xs text-center">
				در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.
			</p>
		);
	}
}

export function CertificateList({ data }: { data: LicenseType[] }) {
	return !data.length ? (
		<p className="text-center text-sm font-semibold">موردی ثبت نشده‌است</p>
	) : (
		<ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
			{data.map((item: LicenseType, index: number) => (
				<li key={index}>
					<CertificateBox certificate={item} />
				</li>
			))}
		</ul>
	);
}
