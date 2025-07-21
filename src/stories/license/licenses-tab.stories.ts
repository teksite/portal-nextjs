import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {mockServiceList1} from "@/mock";
import {Tabs} from "@/components/tab/horizontal-tab";


const meta = {
    title: "License/Tab",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {
        licenses: mockServiceList1,
    },
};
