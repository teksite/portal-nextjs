import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {LicenseItem} from "@/app/service-desk-2/services/[id]/components/items/license-item";
import {mockAllServices} from "@/app/mock";
import {LicenseItem2} from "@/app/service-desk-2/services/[id]/components/items/license-item2";
import {LicenseItem3} from "@/app/service-desk-2/services/[id]/components/items/license-item3";
import {LicenseItem4} from "@/app/service-desk-2/services/[id]/components/items/license-item4";
import {LicenseItem5} from "@/app/service-desk-2/services/[id]/components/items/license-item5";
import {LicenseItem6} from "@/app/service-desk-2/services/[id]/components/items/license-item6";

const meta = {
    title: "License Details/items",

} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
    name: "sample 1",
    render: (args) => {
        return <LicenseItem data={mockAllServices[0]}/>;
    },
};
export const test2: Story = {
    name: "sample 2",
    render: (args) => {
        return <LicenseItem2 data={mockAllServices[0]}/>;
    },
};
export const test3: Story = {
    name: "sample 3",
    render: (args) => {
        return <LicenseItem3 data={mockAllServices[0]}/>;
    },
};
export const test4: Story = {
    name: "sample 4",
    render: (args) => {
        return <LicenseItem4 data={mockAllServices[0]}/>;
    },
};

export const test5: Story = {
    name: "sample 5",
    render: (args) => {
        return <LicenseItem5 data={mockAllServices[0]}/>;
    },
};

export const test6: Story = {
    name: "sample 6",
    render: (args) => {
        return <LicenseItem6 data={mockAllServices[0]}/>;
    },
};







