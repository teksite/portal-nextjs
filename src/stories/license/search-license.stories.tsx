import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {mockServiceList1} from "@/mock";
import {ShowExactMatch} from "@/ui/components/license/showExactMatch";
import SearchBox from "@/ui/servicedesk/searchBox";

const meta = {
	title: "License/Search License",
	component: undefined,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	// tags: ["autodocs"],
	args: {},
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	name: "Exact Match",
	render: () => {
		return <ShowExactMatch license={mockServiceList1[9]} />;
	},
};
export const Test2: Story = {
	name: "Search Box",
	render: () => {
		return <SearchBox  />;
	},
};

