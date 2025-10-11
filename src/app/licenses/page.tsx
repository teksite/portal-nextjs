import {fetchApi} from "@/lib/utils";
import {GroupType, LicenseType} from "@/types";
import {GroupedLicenses} from "@/app/licenses/components/grouped-licenses";

export default async function ServicesIndexPage() {

    const groupedLicenses:GroupType[] | [] = await  fetchApi('allLicencesAndGroups');

    return (
       <>
           <h1>Licenses</h1>
           <GroupedLicenses groups={groupedLicenses} />
       </>
    );
}