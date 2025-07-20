import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {  ExpandableCardDemoGrid } from "@/components/expandable-card-demo-grid";
import { ExpandableCardDemoStandard } from "@/components/expandable-card-demo-standard";
import {ExpandableCardDemoList} from "@/components/expandable-card-demo-list";
import {mockServiceList1} from "@/mock";

const meta = {
	title: "License/Expandable",
	component: undefined,
	parameters: {
		layout: "centered",
	},
	// tags: ["autodocs"],
	args: {},
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	name: "Expandable Card in Grid",
	render: () => {
		return <ExpandableCardDemoGrid />;
	},
};
export const Test2: Story = {
	name: "Expandable Card in Rows",
	render: () => {
		return <ExpandableCardDemoStandard />;
	},
};
export const Test3: Story = {
	name: "Expandable Card in list",

	render: () => {
		return <ExpandableCardDemoList cards={mockServiceList1} withBadge={false} />;
	},
};


