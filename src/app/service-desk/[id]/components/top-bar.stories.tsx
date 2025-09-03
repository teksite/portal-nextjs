import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TopBar } from './top-bar';

const meta = {
   title: 'License Details/Top Bar'
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
   render: (args) => {
      return <TopBar />;
   }
};
