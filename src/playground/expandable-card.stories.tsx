import { Tester } from '@/app/service-desk/components/gallery/tester';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ExpandableCardDemoList2 } from './expandable-card-demo-list2';

const meta = {
   title: 'Test/Expandable',
   component: undefined,
   parameters: {
      layout: 'centered'
   },
   // tags: ["autodocs"],
   args: {}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test4: Story = {
   name: 'Expandable Card in list 2',
   render: () => {
      return (
         <Tester>
            <ExpandableCardDemoList2 />;
         </Tester>
      );
   }
};
