import {BasicOpenDataType, GroupWithOpenDataType} from "@/types/open-data-type";
import {OpenDataItem} from "@/app/open-data/components/open-data-item";

type GroupedOpenDataListProps = {
    groups: GroupWithOpenDataType[];
}

export function GroupedOpenDataList({groups}: GroupedOpenDataListProps) {
    return (
        <ul>
            {Object.entries(groups).map(([id, group]: [key: string, group: GroupWithOpenDataType]) => (
                    <li key={id} className="mt-12">
                        <h3 className="h4" id={group.id}>
                            {group.title}
                        </h3>
                        <div className="mt-6">
                            <ul className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch'}>
                                {Object.entries(group.opendata).map(([id, opendata]: [key: string, opendata: BasicOpenDataType]) => (
                                        <li key={id} className='h-full'>
                                            <OpenDataItem opendata={opendata}/>
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