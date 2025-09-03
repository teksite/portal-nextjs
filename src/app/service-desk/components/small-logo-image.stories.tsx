import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SmallLogoImage } from './small-logo-image';

const meta = {
   title: 'Our Atoms',
   component: SmallLogoImage

   // argTypes: {
   // 	size: {
   // 		control: { type: "radio" }, // or 'select'
   // 		options: ["sm", "default", "lg", "xl"],
   // 	},
   // 	type: {
   // 		control: { type: "radio" }, // or 'select'
   // 		options: ["noButton", "buttonInside", "buttonOutside"],
   // 	},
   // },
   // tags: ["autodocs"],
   // args: {
   // 	size: "default",
   // 	type: "noButton",
   // 	data: mockAllServices,
   // },
} satisfies Meta<typeof SmallLogoImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
   name: 'SmallLogoImage',
   render: (args) => {
      // return <div>1234</div>
      return <SmallLogoImage />;
   }
};
