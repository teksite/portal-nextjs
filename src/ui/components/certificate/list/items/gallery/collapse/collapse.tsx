
import {motion} from "motion/react";
import {LicenseIcon} from "@/ui/components/certificate/icons";
import {LicenseType} from "@/models";
import {LicenseGroupType} from "@/models/licenseGroupModel";
import {ReactElement} from "react";
import {colorMap} from "@/ui/components/certificate/list/shared";

export default function CollapseItem({ id, license, group , title}:{id:string , license:LicenseType , group?:LicenseGroupType , title?:string|ReactElement}) {
  const { fill } = colorMap[group.color ?? "gray"] || { fill: "fill-gray-800" };

  return (
    <motion.div
      layoutId={`card-${id}`}
      className="flex flex-col justify-between gap-1 px-6 py-3 border border-zinc-300 shadow-xl rounded-xl overflow-hidden cursor-pointer hover:bg-slate-50 hover:shadow-sm duration-150 transition-all ease-linear"
    >
      <div className="flex items-center gap-3 mb-2">
        <motion.h4
          layoutId={`title-${id}`}
          className="mb-1">
          {title ?? license.title}
        </motion.h4>
      </div>
      <motion.div className="flex items-center gap-3" layoutId={`cap-${id}`}>
        <div>
          <LicenseIcon name={group?.name ?? "Sayer"} className={`size-6 ${fill}`} />
        </div>
        <span
          className={`text-sm font-medium`} >
          {license.serviceGroupCaption || "بدون گروه"}
        </span>
      </motion.div>
    </motion.div>
  );
}