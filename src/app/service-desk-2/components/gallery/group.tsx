import {cn} from "@/lib";

import {useGroupData, useNormalizedData} from "./contexts";
import {LicenseIcon} from "@/ui/components/certificate/icons";
import {LicenseList} from "@/ui/components/certificate/list";
import CollapseItem from "@/app/service-desk-2/components/gallery/collapse";
import {Pupop} from "@/app/service-desk-2/components/gallery/pupop";

export type GroupProps = {
  id: string;
};

export function Group({id}: GroupProps) {
  return (
    <div
      id={id}
      className={cn(
        "mb-12",
      )}
    >
      <GroupHeader id={id}/>
      <GroupContent id={id}/>
    </div>
  );
}

export function GroupHeader({id}: GroupProps) {
  const group = useGroupData(id);
  return <div className="flex items-center justify-start mb-6 gap-3">
    <LicenseIcon name={group?.name ?? "Sayer"} className={`size-8`}/>
    <h2 className="text-2xl font-semibold mb-0 text-start">{group.title || "بدون گروه"}</h2>
  </div>;
}

export function GroupContent({id}: GroupProps) {
  const group = useGroupData(id);
  const { licenses } = useNormalizedData();
  const licenseData = group.licenseIdList.map((id) => licenses[id]);

  return (
     <LicenseList className="grid gap-6 md:grid-cols-2"
       data={licenseData}
       collapsedComponent={({ id, data, onExpand }) => (
         <div onClick={() => onExpand(id)}>
           <CollapseItem id={id} license={data} group={group} />
         </div>
       )}
       expandedComponent={Pupop}
     />

  );
}
