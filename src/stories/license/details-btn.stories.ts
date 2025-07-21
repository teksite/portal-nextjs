import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {mockServiceList1} from "@/mock";
import {CatalogBtn} from "@/ui/components/license/catalogBtn";

const meta = {
    title: "License/CardWithIcon/DetailButton",
    component: CatalogBtn,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    args: {},
} satisfies Meta<typeof CatalogBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {
        license: mockServiceList1[0],
    },
};
