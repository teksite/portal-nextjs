import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {GroupedCardWithIconListSkeleton} from "@/ui/components/skeletons";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "SKELETON/GroupedCardWithIconListSkeleton",
	component: GroupedCardWithIconListSkeleton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof GroupedCardWithIconListSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Test: Story = {
	args: {
		// children: "Button",
	},
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
