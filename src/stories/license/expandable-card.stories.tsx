import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {  ExpandableCardDemoGrid } from "@/components/expandable-card-demo-grid";
import { ExpandableCardDemoStandard } from "@/components/expandable-card-demo-standard";

const meta = {
	title: "Test",
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
