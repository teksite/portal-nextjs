import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { mockServiceList1 } from "@/app/mock";

import CertificateBox from "./certificateBox";

const meta = {
	title: "Cards/Certificate Box",
	component: CertificateBox,
	parameters: {
		layout: "centered",
	},
	// tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof CertificateBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	name: "testttt",
	args: {
		certificate: mockServiceList1[0],
	},
};
