import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {LicenseList} from "@/ui/components/license/licenseList";
import {mockServiceList1} from "@/mock";



const meta = {
	title: "License/License List",
	component: LicenseList,
	parameters: {
		layout: "centered",
	},
	// tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof LicenseList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	args: {
		data: mockServiceList1,
	},
};
