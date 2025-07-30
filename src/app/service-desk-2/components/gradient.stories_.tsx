import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Gradient, GradientBackground } from "./gradient";

const meta = {
	title: "ServiceDesk2/Gradient",
	component: Gradient,

	// argTypes: {
	// 	size: {
	// 		control: { type: "radio" }, // or 'select'
	// 		options: ["sm", "default", "lg", "xl"],
	// 	},
	// 	type: {
	// 		control: { type: "radio" }, // or 'select'
	// 		options: ["noButton", "buttonInside", "buttonOutside"],
	// 	},
	// },
	// tags: ["autodocs"],
	// args: {
	// 	size: "default",
	// 	type: "noButton",
	// 	data: mockAllServices,
	// },
} satisfies Meta<typeof Gradient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
	name: "Gradient",
	render: (args) => {
		// return <div>1234</div>
		return <Gradient className="w-64 h-64" {...args} />;
	},
};
export const test2: Story = {
	name: "Gradient2",
	render: (args) => {
		// return <div>1234</div>
		return <GradientBackground />;
	},
};
