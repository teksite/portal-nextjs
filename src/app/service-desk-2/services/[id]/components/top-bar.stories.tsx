import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {LicenseItem} from "@/app/service-desk-2/services/[id]/components/items/license-item";
import {mockAllServices} from "@/app/mock";
import {LicenseItem2} from "@/app/service-desk-2/services/[id]/components/items/license-item2";
import {LicenseItem3} from "@/app/service-desk-2/services/[id]/components/items/license-item3";
import {LicenseItem4} from "@/app/service-desk-2/services/[id]/components/items/license-item4";
import {LicenseItem5} from "@/app/service-desk-2/services/[id]/components/items/license-item5";
import {LicenseItem6} from "@/app/service-desk-2/services/[id]/components/items/license-item6";
import {TopBar} from "@/app/service-desk-2/services/[id]/components/top-bar";

const meta = {
    title: "License Details/Top Bar",

} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
    render: (args) => {
        return <TopBar />;
    },
};







