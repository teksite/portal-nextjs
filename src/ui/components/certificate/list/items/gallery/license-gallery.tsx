"use client";

import { LicenseType, LicenseGroup } from "@/models";
import { LicenseIcon } from "@/ui/components/certificate/icons";
import { LicenseList } from "@/ui/components/certificate/list";
import { GenericItemCollapsedProps } from "@/ui/components/certificate/list/types";
import { colorMap } from "@/ui/components/certificate/list/shared";
import { motion } from "motion/react";
import mockData from "@/mock/mock-all-licenses-data.json";
import {ItemText} from "@/ui/components/certificate/list/popover/item-text";
import CollapseItem from "@/ui/components/certificate/list/items/gallery/collapse/collapse"; // Import the JSON file

interface ListColoredProps {
  column: 1 | 2 | 3 | 4;
}

export function LicenseGallery({ column  }: ListColoredProps) {
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
              collapsedComponent={CollapseItem}
              overlayClassName="fixed inset-0 grid place-items-center z-[100] bg-zinc-950/50 backdrop-blur-sm"
            />
          </div>
        );
      })}
    </div>
  );
  }