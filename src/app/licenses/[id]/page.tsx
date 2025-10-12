import {fetchApi} from "@/lib/utils";
import {LicenseType} from "@/types";

export default async function ShowLicense({params}: { params: { id: string } }) {
    const {id} = await params;
    const {license}:{license: LicenseType} = await fetchApi('showLicences' ,id);
    return (
        <h1>
            Show License
        </h1>
    );
}