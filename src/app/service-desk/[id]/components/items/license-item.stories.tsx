import { mockAllServices } from '@/mock';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LicenseItem } from './license-item';
import { LicenseItem2 } from './license-item2';
import { LicenseItem3 } from './license-item3';
import { LicenseItem4 } from './license-item4';
import { LicenseItem5 } from './license-item5';
import { LicenseItem6 } from './license-item6';

const meta = {
   title: 'License Details/items'
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
   name: 'sample 1',
   render: (args) => {
      return <LicenseItem data={mockAllServices[0]} />;
   }
};
export const Test2: Story = {
   name: 'sample 2',
   render: (args) => {
      return <LicenseItem2 data={mockAllServices[0]} />;
   }
};
export const Test3: Story = {
   name: 'sample 3',
   render: (args) => {
      return <LicenseItem3 data={mockAllServices[0]} />;
   }
};
export const Test4: Story = {
   name: 'sample 4',
   render: (args) => {
      return <LicenseItem4 data={mockAllServices[0]} />;
   }
};

export const Test5: Story = {
   name: 'sample 5',
   render: (args) => {
      return <LicenseItem5 data={mockAllServices[0]} />;
   }
};

export const Test6: Story = {
   name: 'sample 6',
   render: (args) => {
      return <LicenseItem6 data={mockAllServices[0]} />;
   }
};
