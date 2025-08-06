"use client";

import { LicenseType, LicenseGroup } from "@/models";
import { LicenseIcon } from "@/ui/components/certificate/icons";
import { LicenseList } from "@/ui/components/certificate/list";
import { GenericItemCollapsedProps } from "@/ui/components/certificate/list/types";
import { colorMap } from "@/ui/components/certificate/list/shared";
import { motion } from "motion/react";
import mockData from "@/mock/mock-all-licenses-data.json";
import {ItemText} from "@/ui/components/certificate/list/popover/item-text"; // Import the JSON file

interface ListColoredProps {
  column: 1 | 2 | 3 | 4;
}

export function ListLicense({ column }: ListColoredProps) {
  // Extract licenses and groups from the JSON file
  const licenses: Record<string, LicenseType> = mockData.licenses;
  const groups: Record<string, LicenseGroup> = mockData.groups;

  const colCount = Number(column);
  const gridClass = {
    1: "grid-cols-1",
    2: "lg:grid-cols-2 xl:grid-cols-2",
    3: "lg:grid-cols-2 xl:grid-cols-3",
    4: "lg:grid-cols-2 xl:grid-cols-4",
  }[colCount] || "lg:grid-cols-2 xl:grid-cols-2";

  const CollapsedComponent = ({ id, data: license, onExpand }: GenericItemCollapsedProps) => {
    const group = license.groupId && groups[license.groupId] ? groups[license.groupId] : null;
    const { fill } = colorMap[group?.color ?? 'gray'] || {
      fill: "fill-gray-800",
    };

    return (
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => onExpand(id)}
        className="flex flex-col justify-between gap-1 px-6 py-3 border border-zinc-300 shadow-xl rounded-xl overflow-hidden cursor-pointer hover:bg-slate-50 hover:shadow-sm duration-150 transition-all ease-linear"
      >
          <div className="flex items-center gap-3 mb-2">
            <motion.h4
              layoutId={`title-${id}`}
              className="mb-1">
              {license.title}
            </motion.h4>
          </div>
          <motion.div className="flex items-center gap-2" layoutId={`cap-${id}`}>
            <div>
              <LicenseIcon name={group?.name ?? "Sayer"} className={`size-6 ${fill}`} />
            </div>
            <span

              className={`text-sm font-medium ${fill}`} >
              {license.serviceGroupCaption || "بدون گروه"}
            </span>
          </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-12">
      {Object.entries(groups).map(([groupId, group]) => {

        const groupLicenses = group.licenseIdList
          .map((licenseId) => {
            if (!licenses[licenseId]) return undefined;
            return licenses[licenseId];
          })
          .filter((license): license is LicenseType => license !== undefined);
        if (groupLicenses.length === 0) return null;
        const { fill } = colorMap[group.color ?? "gray"] || {
          fill: "fill-gray-800",
        };

        return (
          <div key={groupId}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3 w-fit min-w-fit">
                <LicenseIcon name={group.name ?? "Sayer"} className={`size-8 ${fill}`} />
                <h2 className="text-2xl font-semibold mb-0 text-start">{group.title || "بدون گروه"}</h2>
              </div>
              <hr className="w-full border-gray-300" />
            </div>
            <LicenseList
              data={groupLicenses}
              className={`grid gap-6 ${gridClass}`}
              expandedComponent={ItemText}
              collapsedComponent={CollapsedComponent}
              overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
            />
          </div>
        );
      })}
    </div>
  );
}