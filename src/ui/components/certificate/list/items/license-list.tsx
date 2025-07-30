import { LicenseType, LicenseGroup } from "@/models";
import { LicenseIcon } from "@/ui/components/certificate/icons";
import { LicenseList } from "@/ui/components/certificate/list";
import { GenericItemCollapsedProps } from "@/ui/components/certificate/list/types";
import { colorMap } from "@/ui/components/certificate/list/shared";
import mockData from "@/mock/mock-all-licenses-data.json";
import { ItemText } from "@/ui/components/certificate/list/popover/item-text";
import { motion } from "motion/react";

interface ListColoredProps {
  column: 1 | 2 | 3 | 4;
}

export function ListLicense({ column }: ListColoredProps) {
  const licenses: Record<string, LicenseType> = mockData.licenses;
  const groups: Record<string, LicenseGroup> = mockData.groups;

  const colCount = Number(column);
  const gridClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2 lg:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[colCount] || "md:grid-cols-2 lg:grid-cols-2";

  const CollapsedComponent = ({ id, data: license, onExpand }: GenericItemCollapsedProps) => {
    const group = license.groupId && groups[license.groupId] ? groups[license.groupId] : { name: "Sayer", color: "gray" };
    const { fill } = colorMap[group.color ?? "gray"] || { fill: "fill-gray-800" };

    return (
      <motion.div
        layout
        layoutId={`card-${id}`}
        onClick={() => onExpand(id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onExpand(id)}
        className="flex flex-col justify-between gap-2 p-4 border border-zinc-300 rounded-lg shadow-md cursor-pointer bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 transition-all duration-200 ease-out"
        whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.h4
          layoutId={`title-${id}`}
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {license.title}
        </motion.h4>
        <div className="flex items-center gap-2">
          <motion.div layoutId={`image-${id}`}>
            <LicenseIcon name={group.name ?? "Sayer"} className={`w-6 h-6 ${fill}`} />
          </motion.div>
          <motion.span
            layoutId={`group-${id}`}
            className={`text-sm font-medium ${fill}`}
          >
            {license.serviceGroupCaption || "بدون گروه"}
          </motion.span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([groupId, group]) => {
        const groupLicenses = group.licenseIdList
          .map((licenseId) => licenses[licenseId])
          .filter((license): license is LicenseType => license !== undefined);

        if (groupLicenses.length === 0) return null;

        const { fill } = colorMap[group.color ?? "gray"] || { fill: "fill-gray-800" };

        return (
          <div key={groupId} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <LicenseIcon name={group.name ?? "Sayer"} className={`w-8 h-8 ${fill}`} />
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title || "بدون گروه"}
                </h2>
              </div>
              <hr className="flex-1 border-gray-300 dark:border-gray-600" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <LicenseList
                data={groupLicenses}
                className={`grid gap-4 ${gridClass}`}
                expandedComponent={ItemText}
                collapsedComponent={CollapsedComponent}
                overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}