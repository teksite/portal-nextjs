import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListColored } from "@/ui/components/certificate/list/items/list-colored";
import { mockAllServices } from "@/app/mock";
import { ListSimple } from "@/ui/components/certificate/list/items/list-simple";
import { ListUp } from "@/ui/components/certificate/list/items/list-up";

// Define the type for args to include column
interface ListArgs {
    column: number;
}

// Default render function
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
    name: "Colored",
    args: {
        component: ListColored,
        data: mockAllServices,
        column: 3,
    },
    render: ({ component, data, column }) => {
        return <ListColored data={data} column={column} />;
    },
};

export const test2: Story = {
    name: "Simple",
    args: {
        component: ListSimple,
        data: mockAllServices,
        column: 3,
    },
};

export const test3: Story = {
    name: "Simple Up",
    args: {
        component: ListUp,
        data: mockAllServices,
        column: 3,
    },
};