import { motion } from "motion/react";
import { LicenseIcon } from "@/ui/components/certificate/icons";
import { LicenseType } from "@/models";
import { LicenseGroupType } from "@/models/licenseGroupModel";
import { colorMap } from "@/ui/components/certificate/list/shared";
import { useGroupData } from "@/app/service-desk-2/components";
import { HighlightText } from "@/app/service-desk-2/components/gallery/highlight-text";

// Define props interface for better type safety and clarity
interface CollapseItemProps {
  id: string;
  license: LicenseType;
  group?: LicenseGroupType;
  query?: string;
}

export default function CollapseItem({ id, license, group, query }: CollapseItemProps) {
  const resolvedGroup = group ?? useGroupData(license.groupId);

  const { fill } = colorMap[resolvedGroup.color ?? "gray"] ?? { fill: "fill-gray-800" };

  return (
    <motion.div
      layoutId={`card-${id}`}
      className="flex flex-col justify-between gap-1 px-6 py-3 border border-zinc-300 shadow-xl rounded-xl overflow-hidden cursor-pointer hover:bg-slate-50 hover:shadow-sm transition-all duration-150 ease-linear"
    >
      <div className="flex items-center gap-3 mb-2">
        <motion.h3 layoutId={`title-${id}`} className="mb-1">
          {query ? (
            <HighlightText
              text={license.title}
              query={query}
              highlightClassName="text-blue-600 font-semibold"
            />
          ) : (
            license.title
          )}
        </motion.h3>
      </div>

      {/* Group Information Section */}
      <motion.div className="flex items-center gap-3" layoutId={`cap-${id}`}>
        <LicenseIcon name={resolvedGroup?.name ?? "Sayer"} className={`size-6 ${fill}`} />
        <span className="text-sm font-medium">
          {license.serviceGroupCaption ?? "بدون گروه"}
        </span>
      </motion.div>
    </motion.div>
  );
}