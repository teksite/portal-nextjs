import {GroupWithLicenseType, LicenseType} from "@/types";
import {LicenseItem} from "@/app/licenses/components/license-item";

type GroupedLicensesProps = {
    groups: GroupWithLicenseType[];
}

export function GroupedLicensesList({groups}: GroupedLicensesProps) {
    return (
        <ul>
            {Object.entries(groups).map(([id, group]: [key: string, group: GroupWithLicenseType]) => (
                    <li key={id} className="mt-12">
                        <h3 className="h4">
                            {group.title}
                        </h3>
                        <div className="mt-6">
                            <ul className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch'}>
                                {Object.entries(group.licenses).map(([id, license]: [key: string, license: LicenseType]) => (
                                    <li key={id} className='h-full'>
                                       <LicenseItem license={license}/>
                                    </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </li>
                )
            )}
        </ul>
    );

}