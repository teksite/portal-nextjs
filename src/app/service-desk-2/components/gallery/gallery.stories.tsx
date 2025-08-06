import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Item } from "./item";
import { Tester } from "./tester";
import { Group, GroupHeader } from "./group";
import { GalleryListSection } from "./gallery-list-section";
import { Gallery } from "./gallery";

const meta = {
	title: "ServiceDesk2/Gallery",
	component: Tester,
} satisfies Meta<typeof Tester>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
	name: "item",
	render: () => {
		// return <div>1234</div>
		return (
			<Tester>
				<Item
					group={{
						id: "1152027780000000265",
						title: "خدمات عمومي",
						licenseIdList: [
							"1179027790000000128",
							"1179027790000000129",
							"1179027790000000130",
							"1179027790000000131",
							"1179027790000000132",
							"1179027790000000133",
						],
						name: "Omoomi",
						color: "fuchsia",
					}}
					license={{
						id: "1179027790000000128",
						slug: "1179027790000000128",
						title: "ثبت شكايات",
						code: "10",
						groupId: "1152027780000000265",
						avgTime: "1",
						electronics: "1",
						serviceGroupCaption: "خدمات عمومي",
					}}
				/>
			</Tester>
		);
	},
};

export const test2: Story = {
	name: "group header",
	render: () => {
		return (
			<Tester>
				<GroupHeader id="1152027780000000265" />
			</Tester>
		);
	},
};

export const test3: Story = {
	name: "group",
	render: () => {
		return (
			<Tester>
				<Group id="1152027780000000265" />
			</Tester>
		);
	},
};

export const test4: Story = {
	name: "list section",
	render: () => {
		return (
			<Tester>
				<GalleryListSection query="" />
			</Tester>
		);
	},
};

export const test5: Story = {
	name: "list section filtered",
	render: () => {
		return (
			<Tester>
				<GalleryListSection query="مجو" />
			</Tester>
		);
	},
};

export const test6: Story = {
	name: "list section empty",
	render: () => {
		return (
			<Tester>
				<GalleryListSection query="بیسشقثضصبلشسیبث" />
			</Tester>
		);
	},
};

export const test7: Story = {
	name: "full",
	render: () => {
		return (
			<Tester>
				<Gallery />
			</Tester>
		);
	},
};
