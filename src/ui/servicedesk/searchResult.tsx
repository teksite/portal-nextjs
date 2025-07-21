import GroupedLicenseListWrapper from "@/ui/components/license/groupedLicenseList";
import {advanceSearch} from "@/http/controller/licenseSearchController";
import {ShowExactMatch} from "@/ui/components/license/showExactMatch";

export default function SearchResult({search}: { search?: { title?: string } }) {

    if (!search?.title || !search.title.trim().length) return <GroupedLicenseListWrapper/>;

    const searchTerm = search.title ? decodeURIComponent(search.title).trim() : '';

    const results = advanceSearch(searchTerm);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">نتایج جستجو برای: {searchTerm}</h1>

            {results.exact.length > 0 && (
                <div className="mb-8">

                    <ul className="space-y-4">
                        {results.exact.map((license) => (
                            <li key={license.id}>
                               <ShowExactMatch license={license}/>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {results.titleContains.length || results.descriptionContains.length ?
                <h2 className="text-xl font-semibold mb-2">موارد مشابه</h2> :
                null
            }
            {results.titleContains.length > 0 && (
                <div className="mb-8">
                    <ul className="space-y-4">
                        {results.titleContains.map((license) => (
                            <li key={license.id} className="border p-4 rounded">
                                <h3 className="font-bold">{license.title}</h3>
                                <p>کد: {license.code}</p>
                                <p>گروه: {license.serviceGroupCaption}</p>
                                {license.description && <p>توضیحات: {license.description}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {results.descriptionContains.length > 0 && (
                <div className="mb-8">
                    <ul className="space-y-4">
                        {results.descriptionContains.map((license) => (
                            <li key={license.id} className="border p-4 rounded">
                                <h3 className="font-bold">{license.title}</h3>
                                <p>کد: {license.code}</p>
                                <p>گروه: {license.serviceGroupCaption}</p>
                                {license.description && <p>توضیحات: {license.description}</p>}
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