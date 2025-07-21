import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {mockServiceList1} from "@/mock";
import LicenseBox from "@/ui/components/license/licenseBox";

const meta = {
    title: "License/CardWithIcon/Single Card",
    component: LicenseBox,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    args: {},
} satisfies Meta<typeof LicenseBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {
        license: mockServiceList1[0],
    },
};
