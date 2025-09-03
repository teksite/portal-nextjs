import Link from 'next/link';
import { Container } from '@/components/container';
import { Button } from '@/registry/new-york-v4/ui/button';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';


import MostViewedLicenses from './components/most-viewed-licenses';
import { Banner } from '@/app/partials/Banner';
import BlurMask from '@/app/components/magnifier-scroll';


/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
   return (
      <>
         <Banner className="py-24">
            <h1 className="text-center text-3xl">
               سامانه وفا
            </h1>
             <p className="text-center text-xl mb-3">
                 سامانه درخواست و پیگیری مجوزهای وزارت فرهنگ و ارشاد اسلامی
             </p>
            <p className="text-center">
                از این سامانه می‌توانید به‌صورت آنلاین درخواست مجوز ثبت کنید، وضعیت آن را پیگیری کنید و به داده‌های شفاف و باز وزارتخانه دسترسی داشته باشید.
            </p>

         </Banner>
         <div className='bg-white py-24'>
            <Container className="space-y-6">
               <h2 className='text-center text-2xl'>
                  درخواست و پیگیری مجوزها
               </h2>
               <p className='text-center'>
                  تمامی خدمات صدور و تمدید مجوزهای وزارت فرهنگ در این سامانه یکپارچه شده است. کاربران می‌توانند به‌صورت
                  آنلاین درخواست خود را ثبت کرده، وضعیت را پیگیری و نتیجه را  کنند.
               </p>
            <div className="my-12">
               <h3 className='text-center mb-6'>
                  پربازدیدترین مجوزها
               </h3>
               <MostViewedLicenses count={6}/>
            </div>

               <div className="flex items-center justify-center">
                  <Button asChild className='group'>
                     <Link href='/service-desk' className="">
                        مشاهده مجوزها
                        <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-1' />
                     </Link>
                  </Button>
               </div>
            </Container>
         </div>
         <div className='bg-slate-100 py-24'>
            <Container>
               <div className='grid gap-6 md:grid-cols-2 items-center'>
                  <div>
                     <h2 className=''>
                        گزارش‌ها و اطلاعات شفاف
                     </h2>
                     <p className=''>
                         گزارش‌های مالی و عملکردی وزارت فرهنگ و ارشاد اسلامی به‌صورت شفاف منتشر می‌شود. هدف ما، دسترسی آزاد عموم مردم به اطلاعات و افزایش اعتماد عمومی است.
                     </p>
                     <Button asChild className='group mt-6'>
                        <Link href='/transparency'>
                           مشاهده درگاه شفافیت
                           <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-1' />
                        </Link>
                     </Button>
                  </div>
                  <div>
                     <BlurMask src='/images/transparent-img.jpg'/>
                  </div>
               </div>
            </Container>
         </div>
         <div className='bg-slate-100 py-24'>
            <Container>
               <div className='grid gap-6 md:grid-cols-2 items-center'>
                  <div>
                     <BlurMask src='/images/transparent-img.jpg'/>
                  </div>
                  <div>
                     <h2 className=''>
                        دسترسی آزاد به داده‌ها
                     </h2>
                     <p className=''>
                         درگاه داده‌های باز، دسترسی آزاد به مجموعه داده‌ها و APIهای وزارتخانه را برای پژوهشگران، توسعه‌دهندگان و علاقه‌مندان فراهم می‌کند. شما می‌توانید داده‌ها را دانلود کنید یا از APIها برای پروژه‌های خود استفاده کنید.
                     </p>
                     <Button asChild className='group mt-6'>
                        <Link href='/contact'>
                           مشاهده درگاه داده باز
                           <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-1' />
                        </Link>
                     </Button>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Page;
