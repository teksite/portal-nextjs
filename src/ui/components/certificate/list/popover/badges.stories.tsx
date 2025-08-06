import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BadgePresence } from "@/ui/components/certificate/list/popover/badge-presence";
import { BadgeCost } from "@/ui/components/certificate/list/popover/badge-cost";
import {BadgeElecrtonics} from "@/ui/components/certificate/list/popover/badge-elecrtonics";

const meta = {
    title: "License List/Popover/Badges",
} satisfies Meta<typeof BadgePresence | typeof BadgeCost | typeof BadgeElecrtonics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NeedPresent: Story = {
    name: "Need Present",
    argTypes: {
        needPresent: {
            control: "boolean",
        },
    },
    args: {
        needPresent: true,
    },
    render: (args) => {
        return <BadgePresence needPresent={args.needPresent} />;
    },
};

export const NeedCost: Story = {
    name: "Need Cost",
    argTypes: {
        needCost: {
            control: "boolean",
        },
    },
    args: {
        needCost: true,
    },
    render: (args) => {
        return <BadgeCost needCost={args.needCost} />;
    },
};


export const Electronics: Story = {
    name: "Electronics",
    argTypes: {
        electronics: {
            control: "boolean"
        },
    },
    args: {
        electronics: true,
    },
    render: (args) => {
        return <BadgeElecrtonics electronics={args.electronics} />;
    },
};