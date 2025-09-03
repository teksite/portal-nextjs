import { mockNormalizedOpenData, mockNormalizedTransparencies } from '@/mock';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';



import { GalleryItem } from './gallery-item';
import { GalleryList } from './gallery-list';





const meta = {
   title: 'OpenData/Gallery',
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const { openData , categories} = mockNormalizedOpenData;

const aData = openData['1'];
const aCategory = categories['1'];

export const Test1: Story = {
   name: 'List1',
   render: () => (
      <GalleryList />
   ),
};



export const Test3: Story = {
   name: 'Item',
   render: () => <GalleryItem data={aData} category={aCategory} />,
};
