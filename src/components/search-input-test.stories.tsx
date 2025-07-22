import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchInputTest } from "./search-input-test";
import { mockAllServices, mockSampleServices } from "@/app/mock";

const meta = {
	title: "SearchInput",
	component: SearchInputTest,

	argTypes: {
		size: {
			control: { type: "radio" }, // or 'select'
			options: ["sm", "default", "lg", "xl"],
		},
		type: {
			control: { type: "radio" }, // or 'select'
			options: ["noButton", "buttonInside", "buttonOutside"],
		},
	},
	// tags: ["autodocs"],
	args: {
		size: "default",
		type: "noButton",
		data: mockAllServices,
	},
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
	render: (args) => {
		return <SearchInputTest {...args} />;
	},
};
export const Test2: Story = {
	name: "Test Filter",
	render: (args) => {
		return <SearchInputTest {...args} data={mockSampleServices} />;
	},
};
