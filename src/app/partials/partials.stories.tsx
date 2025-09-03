import { Footer } from '@/app/partials/footer';
import { Header } from '@/app/partials/header';
import { Banner } from './Banner';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ThemeChangerProvider from '@/app/partials/theme-changer-provider';
import Page from '@/app/page';

const meta = {
   title: 'Layout/Partials',
   parameters: {
      layout: 'fullscreen'
   }
} satisfies Meta<unknown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Banner Story
export const Test1: Story = {
   name: 'Banner',
   render: () => (
      <Banner className='py-24'>
         <h1>{'درگاه شفافیت'}</h1>
         <p className='mt-6 mb-6 text-center md:mt-7 lg:mt-8'>
            {'در این بخش می‌توانید اطلاعات کاملی از عملکرد زارت فرهنگ و راشاد اسلامی بدست آورید.'}
         </p>
      </Banner>
   )
};

export const Test2: Story = {
   name: 'Footer',
   render: () => <Footer />
};

export const Test3: Story = {
   name: 'Header',
   render: () => <Header />
};
export const Test4: Story = {
   name: 'Theme Controller',
   render: () => (<>
       <ThemeChangerProvider position="right">

              <h1>theme</h1>

       </ThemeChangerProvider></>)
};
