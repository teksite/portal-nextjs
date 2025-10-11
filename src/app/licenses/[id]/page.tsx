import {fetchApi} from "@/lib/utils";
import {LicenseType} from "@/types";
import {notFound} from "next/navigation";

export default async function ShowLicense({params}: { params: { id: string } }) {
    const {id} = params;
    const {license}:{license: LicenseType} = await fetchApi('showLicences' ,id);
    console.log(license)
    if (!license) return notFound();

    return (
        <h1>
            Show License
        </h1>
    );
}