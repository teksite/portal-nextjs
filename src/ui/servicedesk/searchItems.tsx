import {LicenseType} from "@/models/licenseModel";
import {mockServiceList2} from "@/mock";
import GroupedLicenseListWrapper from "@/ui/components/license/groupedLicenseList";

export default function ServiceDeskPage({search}: { search ?: { title?: string } }) {
    if (!search?.title) return <GroupedLicenseListWrapper />;
    const searchTerm = search.title ? decodeURIComponent(search.title).trim() : '';

    // Function to normalize Persian text for search
    const normalizeText = (text: string) => {
        return text
            .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width characters
            .replace(/[آأإ]/g, 'ا') // Normalize alef variations
            .replace(/ي/g, 'ی') // Normalize yeh
            .replace(/ك/g, 'ک'); // Normalize kaf
    };

    // Search logic
    const searchServices = (term: string): {
        exact: LicenseType[],
        titleContains: LicenseType[],
        descriptionContains: LicenseType[]
    } => {
        if (!term) {
            return {exact: [], titleContains: [], descriptionContains: []};
        }

        const normalizedTerm = normalizeText(term);
        const exact: LicenseType[] = [];
        const titleContains: LicenseType[] = [];
        const descriptionContains: LicenseType[] = [];

        const exactIds = new Set<string>();
        const titleIds = new Set<string>();

        mockServiceList2.forEach((service) => {
            const normalizedTitle = normalizeText(service.title);
            const normalizedCode = service.code ? normalizeText(service.code) : '';
            const normalizedDescription = service.description ? normalizeText(service.description) : '';

            if (normalizedTitle === normalizedTerm || normalizedCode === normalizedTerm) {
                // Exact match on title or code
                exact.push(service);
                exactIds.add(service.id);
            } else if (normalizedTitle.includes(normalizedTerm) && !exactIds.has(service.id)) {
                // Partial match on title
                titleContains.push(service);
                titleIds.add(service.id);
            }else if (normalizedDescription.includes(normalizedTerm) && !exactIds.has(service.id) && !titleIds.has(service.id)) {
            // Partial match on description
                descriptionContains.push(service);
            }
        });

        return {exact, titleContains, descriptionContains};
    };

    const results = searchServices(searchTerm);

    if (!searchTerm) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">جستجوی خدمات</h1>
                <p>لطفاً عبارت مورد نظر خود را در نوار آدرس وارد کنید (پارامتر s).</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">نتایج جستجو برای: {searchTerm}</h1>

            {results.exact.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">تطابق دقیق</h2>
                    <ul className="space-y-4">
                        {results.exact.map((service) => (
                            <li key={service.id} className="border p-4 rounded">
                                <h3 className="font-bold">{service.title}</h3>
                                <p>کد: {service.code}</p>
                                <p>گروه: {service.serviceGroupCaption}</p>
                                {service.description && <p>توضیحات: {service.description}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {results.titleContains.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">تطابق در عنوان</h2>
                    <ul className="space-y-4">
                        {results.titleContains.map((service) => (
                            <li key={service.id} className="border p-4 rounded">
                                <h3 className="font-bold">{service.title}</h3>
                                <p>کد: {service.code}</p>
                                <p>گروه: {service.serviceGroupCaption}</p>
                                {service.description && <p>توضیحات: {service.description}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {results.descriptionContains.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">تطابق در توضیحات</h2>
                    <ul className="space-y-4">
                        {results.descriptionContains.map((service) => (
                            <li key={service.id} className="border p-4 rounded">
                                <h3 className="font-bold">{service.title}</h3>
                                <p>کد: {service.code}</p>
                                <p>گروه: {service.serviceGroupCaption}</p>
                                {service.description && <p>توضیحات: {service.description}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {results.exact.length === 0 && results.titleContains.length === 0 && results.descriptionContains.length === 0 && (
                <p>هیچ نتیجه‌ای یافت نشد.</p>
            )}
        </div>
    );
}