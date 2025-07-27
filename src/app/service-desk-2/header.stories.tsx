import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Gradient, GradientBackground } from "./gradient";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Hero } from "./hero";

const meta = {
	title: "ServiceDesk2/Header",
	component: Header,

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
} satisfies Meta<typeof Header>;

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
	name: "Header",
	render: (args) => {
		// return <div>1234</div>
		return <Header />;
	},
};
export const test3: Story = {
	name: "Navbar",
	render: (args) => {
		// return <div>1234</div>
		return <Navbar />;
	},
};
export const test4: Story = {
	name: "Hero",
	render: (args) => {
		// return <div>1234</div>
		return <Hero />;
	},
};
