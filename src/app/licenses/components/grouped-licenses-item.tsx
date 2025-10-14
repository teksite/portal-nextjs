import {LicenseItem} from "@/app/licenses/components/license-item";
import {GroupWithLicenseType, LicenseType} from "@/types";

type GroupedLicensesProps = {
    groups: GroupWithLicenseType[];
}

export function GroupedLicenses({groups}: GroupedLicensesProps) {
    return (
        <ul>
            {Object.entries(groups).map(([id, group]: [key: string, group: GroupWithLicenseType]) => (
                    <li key={id} className="mt-12">
                        <h3 className="h4">
                            {group.title}
                        </h3>
                        <div className="mt-6">
                            <ul className={'grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch'}>
                                {Object.entries(group.licenses).map(([id, license]: [key: string, license: LicenseType]) => (
                                    <li key={id} className='h-full'>
                                       <LicenseItem license={license} group={group} />
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