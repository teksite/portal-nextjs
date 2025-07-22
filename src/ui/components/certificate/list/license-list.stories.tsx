import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ItemCollapsed } from "./item-collapsed";
import { LicenseType } from "@/models";
import { ItemExpandedSimple } from "./item-expanded-simple";
import { ItemExpandedWithBadge } from "./item-expanded-with-badge";
import { mockAllServices } from "@/app/mock";
import { LicenseList } from "./license-list";

const meta = {
	title: "License List/Item ",
	component: undefined,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const licenseLong: LicenseType = {
	id: "1233027790000000300",
	slug: "1233027790000000300",
	title: "برگزاري دوره هاي آموزش مهارتي فرهنگي ، هنري",
	code: "18051307000",
	groupId: "1233027780000000101",
	avgTime: "",
	cost: false,
	description: "",
	electronics: 1,
	needPresence: false,
	serviceTime: "شنبه تا چهار شنبه - ساعات اداري",
	serviceGroupCaption: "آموزش",
	icon: "education",
};
const licenseShort: LicenseType = {
	id: "1179027790000000128",
	slug: "1179027790000000128",
	title: "ثبت شكايات",
	code: "10",
	groupId: "1152027780000000265",
	avgTime: "1",
	cost: false,
	description: undefined,
	electronics: 1,
	needPresence: false,
	serviceTime: undefined,
	serviceGroupCaption: "خدمات عمومي",
	icon: "briefcase",
};

export const test1: Story = {
	name: "Item Collapse",
	render: (args) => {
		return <ItemCollapsed id={licenseShort.id} data={licenseShort} />;
	},
};

export const test2: Story = {
	name: "Item Collapse Long Title",
	render: (args) => {
		return <ItemCollapsed id={licenseLong.id} data={licenseLong} />;
	},
};

export const test3: Story = {
	name: "Item Expanded",
	render: (args) => {
		return <ItemExpandedSimple id={licenseLong.id} data={licenseLong} />;
	},
};

export const test4: Story = {
	name: "Item Expanded With Badge",
	render: (args) => {
		return <ItemExpandedWithBadge id={licenseLong.id} data={licenseLong} />;
	},
};

export const test5: Story = {
	name: "list 1",
	render: (args) => {
		return (
			<LicenseList
				expandedComponent={ItemExpandedWithBadge}
				collapsedComponent={ItemCollapsed}
				data={mockAllServices}
				className="max-w-2xl mx-auto w-full flex flex-col gap-3"
				overlayClassName=""
			/>
		);
	},
};

export const test6: Story = {
	name: "list 2",
	render: (args) => {
		return (
			<LicenseList
				expandedComponent={ItemExpandedSimple}
				collapsedComponent={ItemCollapsed}
				data={mockAllServices}
				className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4"
				overlayClassName="bg-zinc-500/50 backdrop-blur-none"
			/>
		);
	},
};
