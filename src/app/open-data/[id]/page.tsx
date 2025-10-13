import {fetchApi} from "@/lib/utils";
import {LicenseType} from "@/types";

export default async function ShowOpenData({params}: { params: { id: string } }) {
    const {id} = await params;
    return (
        <h1>
            Show Open Data
        </h1>
    );
}