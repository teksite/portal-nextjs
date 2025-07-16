import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
	CardWithIconListSkeleton, CardWithIconSkeleton,
	GroupedCardWithIconListSkeleton
} from "@/ui/components/skeletons";

const meta = {
	title: "SKELETON/CardWithIcon",
	component: undefined,
	parameters: {
		layout: "centered",
	},
	// tags: ["autodocs"],
	args: {},
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const single: Story = {
	name: "single card",
	render: () => {
		return <CardWithIconSkeleton />;
	},
};
export const onlyList: Story = {
	name: "only list",
	render: () => {
		return <CardWithIconListSkeleton />;
	},
};
export const listWithTitle: Story = {
	name: "list with title",
	render: () => {
		return <GroupedCardWithIconListSkeleton />;
	},
};


// export const Date1: Story = {
//   name: 'بله خیر',
//   render: () => {
//     return (
//       <div>
//         123
//         <CodeBlock
//           language="javascript"
//           code={`
// // Sample JavaScript code
// function greet() {
//   console.log('Hello, world!');
// }
// hljs.registerLanguage('json', json);
// hljs.registerLanguage('sql', sql);
// greet();`}
//         />
//       </div>
//     );
//   },
// };
