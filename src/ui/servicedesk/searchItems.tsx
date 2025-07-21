
import GroupedLicenseListWrapper from "@/ui/components/license/groupedLicenseList";
import {advanceSearch} from "@/http/controller/licenseSearchController";

export default function ServiceDeskPage({search}: { search ?: { title?: string } }) {

    if (!search?.title || !search.title.trim().length) return <GroupedLicenseListWrapper />;
``
    const searchTerm = search.title ? decodeURIComponent(search.title).trim() : '';

    const results = advanceSearch(searchTerm);


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