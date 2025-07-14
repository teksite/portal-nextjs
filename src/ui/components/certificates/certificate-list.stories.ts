import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { mockServiceList1 } from "@/app/mock";

import { CertificateList } from "./certificatesList";

const meta = {
	title: "Cards/Certificate List",
	component: CertificateList,
	parameters: {
		layout: "centered",
	},
	// tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof CertificateList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	args: {
		data: mockServiceList1,
	},
};
