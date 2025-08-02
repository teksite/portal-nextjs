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
import {LicenseGallery} from "@/ui/components/certificate/list/items/gallery/license-gallery";

interface ListArgs {
    column: number;
}

const defaultRender = ({ component: Component, data, column }: { component: React.ComponentType<any>, data: typeof mockAllServices, column: number }) => {
    return <Component data={data} column={column} />;
};

const meta = {
    title: "License Gallery/List",
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
    name: "gallery",
    args: {
        component: LicenseGallery,
        data: mockAllServices,
        column: 3,
    },
    render: ({ component, data, column }) => {
        return <LicenseGallery licenses={data} column={column} />;
    },
};