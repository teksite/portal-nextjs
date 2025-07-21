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
	tags: ["autodocs"],

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

	parameters: {
		direction: 'rtl',
	},
};
export const Test3: Story = {
	name: "Expandable Card in list",
	argTypes: {
		withBadge: {
			options: [true, false],
			control: { type: 'radio' },
		},
	},
	render: ( ) => {
		return <ExpandableCardDemoList cards={mockServiceList1} withBadge={true} />;
	},
	parameters: {
		direction: 'rtl',
	},
};


