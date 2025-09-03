import { FooterNav } from '@/app/partials/footer-nav';
import Image from 'next/image';

export function Footer() {
   return (
      <footer className='mt-12 w-full'>
         <div className='bg-zinc-900 py-12 px-6'>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center'>
               <figure className="text-center mx-auto ">
                  <Image src='/logo.png' alt={'وزارت فرهنگ و ارشاد اسلامی'} width={100} height={100} className='mx-auto' />
                  <figcaption className="text-white text-lg mt-3">
                     پنجره واحد خدمات <br/> وزارت فرهنگ و ارشاد اسلامی
                  </figcaption>
               </figure>
               <div>
                  <FooterNav />
               </div>
               <div>
                  <FooterNav />
               </div>
               <div>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.037367378878!2d51.4022802!3d35.7498863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06edbc3f6cf1%3A0xaf62ea30e3aab092!2sBarsa%20Novin%20Ray%20Company!5e0!3m2!1sen!2s!4v1755509832697!5m2!1sen!2s"
                     width="300" height="300"  loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade" className="mx-auto mt-6"></iframe>
               </div>
            </div>

         </div>
         <div className='bg-zinc-950 py-3'>
            <p className='text-center text-sm font-thin text-zinc-50'>
               تمامی حقوق این وب سایت محفوظ و متعلق به وزارت فرهنگ و ارشاد اسلامی است.
            </p>
         </div>
      </footer>
   );
}
