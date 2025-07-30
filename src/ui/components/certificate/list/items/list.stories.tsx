import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListColored } from "@/ui/components/certificate/list/items/list-colored";
import { mockAllServices } from "@/app/mock";
import { ListSimple } from "@/ui/components/certificate/list/items/list-simple";
import { ListUp } from "@/ui/components/certificate/list/items/list-up";
import {Simple} from "@/ui/components/certificate/list/items/simple";
import {ListSemiColored} from "@/ui/components/certificate/list/items/list-semi-colored";
import {Simple2} from "@/ui/components/certificate/list/items/simple-2";
import React from "react";
import {Simple3} from "@/ui/components/certificate/list/items/simple-3";
import {ListLicense} from "@/ui/components/certificate/list/items/license-list";

interface ListArgs {
    column: number;
}

const defaultRender = ({ component: Component, data, column }: { component: React.ComponentType<any>, data: typeof mockAllServices, column: number }) => {
    return <Component data={data} column={column} />;
};

const meta = {
    title: "License List/List",
    argTypes: {
        column: {
            control: "number",
        },
    },
    render: defaultRender,
} satisfies Meta<ListArgs & { component: React.ComponentType<any>, data: typeof mockAllServices }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
    name: "Semi Colored",
    args: {
        component: ListSemiColored,
        data: mockAllServices,
        column: 3,
    },
    render: ({ component, data, column }) => {
        return <ListSemiColored data={data} column={column} />;
    },
};
export const test2: Story = {
    name: "Full Colored",
    args: {
        component: ListColored,
        data: mockAllServices,
        column: 3,
    },
    render: ({ component, data, column }) => {
        return <ListColored data={data} column={column} />;
    },
};

export const test3: Story = {
    name: "Simple22",
    args: {
        component: ListSimple,
        data: mockAllServices,
        column: 3,
    },
};

export const test4: Story = {
    name: "Simple Up",
    args: {
        component: ListUp,
        data: mockAllServices,
        column: 3,
    },

};
export const test5: Story = {
    name: "Simple",
    args: {
        component: Simple,
        data: mockAllServices,
        column: 3,
    },
};
export const test6: Story = {
    name: "Simple2",
    args: {
        component: Simple2,
        data: mockAllServices,
        column: 3,
    },
};

export const test7: Story = {
    name: "Fiori",
    args: {
        component: Simple3,
        data: mockAllServices,
        column: 3,
    },
};


export const test8: Story = {
    name: "Final List",
    args: {
        component: ListLicense,
        data: mockAllServices,
        column: 3,
    },
};

