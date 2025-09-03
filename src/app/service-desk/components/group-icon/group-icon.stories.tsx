import { LicenseGroupName } from '@/lib';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GroupIcon } from './group-icon';

const meta = {
   title: 'ServiceDesk2/New Icons',
   component: GroupIcon,
   argTypes: {
      strokeWidth: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 } },
      size: { control: { type: 'range', min: 10, max: 128, step: 1 } },
      color: { control: 'color' }
   },
   args: {
      size: 48,
      name: LicenseGroupName.Amoozesh as LicenseGroupName,
      color: 'currentColor',
      strokeWidth: 1
   }
} satisfies Meta<typeof GroupIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
   name: 'Icon',
   args: {
      name: LicenseGroupName.Amoozesh as LicenseGroupName
   }
};

export const Test2: Story = {
   name: 'All icons',
   render: ({ name: _, ...args }) => {
      return (
         <div className='flex flex-wrap gap-3 align-middle'>
            {Object.keys(LicenseGroupName).map((name) => (
               <div className='flex w-28 flex-col items-center gap-1' key={name}>
                  <GroupIcon {...args} name={name as any} />
                  <div className='text-center'>{name}</div>
               </div>
            ))}
         </div>
      );
   }
};
