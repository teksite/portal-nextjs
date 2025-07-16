import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchInput } from "@/ui/atoms";

const meta = {
	title: "Search Input",
	component: SearchInput,
	argTypes: {
		size: {
			control: { type: "radio" }, // or 'select'
			options: ["sm", "default", "lg", "xl"],
		},
	},
	parameters: {
		// layout: "centered",
	},
	tags: ["autodocs"],
	args: { type: "noButton", size: "default" },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	name: "SearchInput Test1",
	render: (args) => {
		return <SearchInput {...args} />;
	},
};
