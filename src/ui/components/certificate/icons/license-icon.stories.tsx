import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LicenseIcon, licenseIconNames } from "./license-icon";

const meta = {
	title: "License/Icon",
	component: LicenseIcon,
	args: {
		size: 48,
	},
} satisfies Meta<typeof LicenseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
	name: "Normal",
	render: ({ name: _, ...args }) => {
		return (
			<div className="flex gap-3 flex-wrap align-middle">
				{licenseIconNames.map((name) => (
					<div className="flex flex-col gap-1 w-28 items-center">
						<LicenseIcon name={name} {...args} />
						<div className="text-center">{name}</div>
					</div>
				))}
			</div>
		);
	},
};
