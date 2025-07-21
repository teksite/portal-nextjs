import GroupedLicenseListWrapper from "@/ui/components/license/groupedLicenseList";
import { searchLicensesByTitle, searchItemType } from "@/http/controller/licenseSearchController";
import { ShowExactMatch } from "@/ui/components/license/showExactMatch";

interface ResultSectionProps {
    title: string;
    items: searchItemType[];
}

const ResultSection: React.FC<ResultSectionProps> = ({ title, items }) => (
    <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <ul className="space-y-3">
            {items.map((license) => (
                <li key={license.id} className="border p-3 rounded">
                    <h3 className="font-bold">{license.title}</h3>
                    <p>کد: {license.code}</p>
                    <p>گروه: {license.serviceGroupCaption}</p>
                    {license.description && <p>توضیحات: {license.description}</p>}
                </li>
            ))}
        </ul>
    </div>
);

export default function SearchResult({ search }: { search?: { title?: string } }) {
    if (!search?.title || !search.title.trim().length) return <GroupedLicenseListWrapper />;

    const searchTerm = search.title ? decodeURIComponent(search.title).trim() : '';
    const { exact, startsWith, containsWords, descriptionContains } = searchLicensesByTitle(searchTerm);

    return (
        <div className="container mx-auto p-3">
            <h1 className="text-2xl font-bold mb-3">نتایج جستجو برای: {searchTerm}</h1>

            {exact.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">تطابق دقیق</h2>
                    <ul className="space-y-4">
                        {exact.map((license) => (
                            <li key={license.id}>
                                <ShowExactMatch license={license} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {(startsWith.length > 0 || containsWords.length > 0 || descriptionContains.length > 0) && (
                <h2 className="text-xl font-semibold mb-3">موارد مشابه</h2>
            )}

            {startsWith.length > 0 && <ResultSection title="عنوان شروع شده با عبارت" items={startsWith} />}
            {containsWords.length > 0 && <ResultSection title="عنوان شامل عبارت" items={containsWords} />}
            {descriptionContains.length > 0 && (
                <ResultSection title="توضیحات شامل عبارت" items={descriptionContains} />
            )}

            {exact.length === 0 &&
                startsWith.length === 0 &&
                containsWords.length === 0 &&
                descriptionContains.length === 0 && (
                    <p>هیچ نتیجه‌ای یافت نشد.</p>
                )}
        </div>
    );
}