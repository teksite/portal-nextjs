import { mockNormalizedLicenses } from '@/mock';
import { withServerMock } from '@/stories/withServerMock';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';



import MostViewedLicenses from './most-viewed-licenses';


const MostViewedLicensesMock = withServerMock(MostViewedLicenses, { count: 5 });
const { licenses, groups } = mockNormalizedLicenses;
const aLicense = Object.values(licenses)[0];


const meta = {
   title: 'Home Page/Most Viewed Licenses',
   component: undefined
} satisfies Meta<typeof MostViewedLicensesMock>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Test1: Story = {
   name: 'List',
   args: {
      count: 5
   },
   render: (args) => <MostViewedLicensesMock {...args} />
};

// export const Test2: Story = {
//    name: 'Item',
//
//    render: (args) => <MostViewedLicenseItem license={aLicense} />
// };
