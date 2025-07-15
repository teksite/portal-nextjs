import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {RegisterBtn} from "@/ui/components/license/registerBtn";
import {mockServiceList1} from "@/mock";



const meta = {
    title: "License/RegisterButton",
    component: RegisterBtn,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    args: {},
} satisfies Meta<typeof RegisterBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {
        license: mockServiceList1[0],
    },
};
