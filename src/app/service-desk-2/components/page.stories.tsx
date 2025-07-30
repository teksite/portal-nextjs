import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Gallery } from "./gallery";
import { Gradient } from "./gradient";
import { Navbar } from "./navbar";
import { Hero } from "./hero";

const meta = {
	title: "ServiceDesk2/Page",
	component: Gallery,

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
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const gradient: Story = {
	name: "Gradient",
	render: (args) => {
		// return <div>1234</div>
		return <Gradient className="w-64 h-64" {...args} />;
	},
};

export const navbar: Story = {
	name: "Navbar",
	render: (args) => {
		// return <div>1234</div>
		return <Navbar />;
	},
};
export const hero: Story = {
	name: "Hero",
	render: (args) => {
		// return <div>1234</div>
		return <Hero />;
	},
};
