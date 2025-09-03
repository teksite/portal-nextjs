import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GalleryList } from '@/app/transparency/components/gallery-list';
import { GalleryItem } from '@/app/transparency/components/gallery-item';
import { mockNormalizedTransparencies } from '@/mock';
import { GalleryList2 } from './gallery-list-2';
import { GalleryItem2 } from '@/app/transparency/components/gallery-item-2';

const meta = {
   title: 'Transparency/Gallery',
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const { transparencies , categories} = mockNormalizedTransparencies;

const aTransparency = transparencies['1'];
const aCategory = categories['1'];

export const Test1: Story = {
   name: 'List1',
   render: () => (
      <GalleryList />
   ),
};
export const Test2: Story = {
   name: 'List2',
   render: () => (
      <GalleryList2 />
   ),
};


export const Test3: Story = {
   name: 'Item',
   render: () => <GalleryItem transparency={aTransparency} category={aCategory} />,
};

export const Test4: Story = {
   name: 'Item2',
   render: () => (<div className="w-96">
      <GalleryItem2 transparency={aTransparency} category={aCategory} />,
   </div>)
};
