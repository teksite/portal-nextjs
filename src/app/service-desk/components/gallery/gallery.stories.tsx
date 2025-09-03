import { LicenseGroup, LicenseType } from '@/lib';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Card } from './card';
import { CardExpanded } from './card-expanded';
import { GalleryList } from './gallery-list';
import { Tester } from './tester';

const meta = {
   title: 'ServiceDesk2/Gallery',
   component: Tester,
   parameters: {
      layout: 'fullscreen'
   }
} satisfies Meta<typeof Tester>;

export default meta;
type Story = StoryObj<typeof meta>;

const aGroup: LicenseGroup = {
   id: '1152027780000000265',
   title: 'خدمات عمومی',
   licenseIdList: [
      '1179027790000000128',
      '1179027790000000129',
      '1179027790000000130',
      '1179027790000000131',
      '1179027790000000132',
      '1179027790000000133'
   ],
   name: 'Omoomi',
   color: 'fuchsia'
};
const aLicense: LicenseType = {
   id: '1179027790000000128',
   slug: '1179027790000000128',
   title: 'ثبت شكايات',
   code: '10',
   groupId: '1152027780000000265',
   avgTime: '1',
   electronics: 1,
   serviceGroupCaption: 'خدمات عمومی'
};

export const Test1: Story = {
   name: 'card',
   args: { children: <Card group={aGroup} license={aLicense} /> }
};

export const Test8: Story = {
   name: 'card expanded',
   args: {
      children: <CardExpanded popupWidth={600} close={() => {}} group={aGroup} license={aLicense} />
   }
};

export const Test11: Story = {
   name: 'card with query',
   args: { children: <Card group={aGroup} license={aLicense} query='ثبت' /> }
};

export const Test4: Story = {
   name: 'list',
   args: { children: <GalleryList /> }
};
