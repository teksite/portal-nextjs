import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LicenseIconSolid, licenseIconSolidNames } from "./license-icon-solid";

const meta = {
	title: "License/Icon",
	component: LicenseIconSolid,
	args: {
		size: 48,
	},
} satisfies Meta<typeof LicenseIconSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test2: Story = {
	name: "Solid",
	render: ({ name: _, ...args }) => {
		return (
			<div className="flex gap-3 flex-wrap align-middle">
				{licenseIconSolidNames.map((name) => (
					<div className="flex flex-col gap-1 w-28 items-center">
						<LicenseIconSolid name={name} {...args} />
						<div className="text-center">{name}</div>
					</div>
				))}
			</div>
		);
	},
};
