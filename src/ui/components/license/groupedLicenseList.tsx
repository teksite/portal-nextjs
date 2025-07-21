import {getServices} from "@/http/controller/servicesController";

import {searchParamsType} from "@/ui/servicedesk/searchBox";
import {LicenseType} from "@/models/licenseModel";
import {LicenseList} from "@/ui/components/license/licenseList";
import Link from "next/link";

const groupingAndFilteringLicenses = (
    licenses: LicenseType[],
    search?: searchParamsType
) => {
    const filteredLicenses = licenses.filter((license: LicenseType) => {
        // Filter by title
        return !(search?.title?.length && !license.title?.toLowerCase().includes(search.title.toLowerCase()));

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
        const listedNav = Object.entries(groupedLicenses).map(([name]) => {
            return (
               <li key={name}>
                   <Link className="text-blue-900 text-sm font-semibold" href={`#${name.replace(/\\s/g, "_")}`}  scroll={true} >
                       {name}
                   </Link>
               </li>
            );
        });
        const listedLicenses = Object.entries(groupedLicenses).map(([name, items]) => {
            return (

                <section key={name} id={name.replace(/\s/g, "_")}>
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="min-w-fit mb-0">{name}</h2>
                        <hr className="w-full hr"/>
                    </div>
                    <LicenseList data={items}/>
                </section>
            );
        });

        return (
            <>
                <nav className="flex items-center gap-6 flex-wrap">
                    <span className="font-bold text">گروه ها:</span>
                    <ul className="flex item-wrapper items-center gap-6">
                        {listedNav}
                    </ul>
                </nav>
                {listedLicenses}
            </>

        )
            ;
    } catch (e) {
        return (
            <p className="text-xs text-center">
                در بازآوری مشکلی بوجود آمده است لطفا دوباره تلاش کنید.
            </p>
        );
    }
}