import Search from "@/ui/components/search";
import Link from "next/link";
import CertificatesListWrapper from "@/ui/components/certificates/certificatesList";
import {Suspense} from "react";
import {CardWithIconListSkeleton} from "@/ui/components/skeletons";
import Banner from "@/ui/layout/Banner";
import Image from "next/image";
import {SolidLink} from "@/ui/components/Links";


export default function Home() {
    const appName = process.env.NEXT_PUBLIC_APP_NAME ?? 'پنجره واحد خدمات وزارت فرهنگ و ارشاد اسلامی';
    return (
        <>
            <Banner title={appName}>
                <div className='space-y-6'>
                    <Search/>
                    <div className='flex items-center gap-6 justify-center'>
                        <Link href='/servicedesk' className='text-zinc-50 font-semibold'>
                            مشاهده همه مجوزها
                        </Link>
                    </div>
                </div>
            </Banner>
            <main className=''>
                <section className='inner-container pt-12 pb-24'>
                    <div className="relative text-center mb-12">
                        <h2 className='text-center inline-block px-3 bg-zinc-50 mb-0'>
                            مجوزهای پربازدید
                        </h2>
                        <hr className='absolute inset-x-0 top-1/2 border-zinc-600 -z-10'/>
                    </div>
                    <Suspense fallback={<CardWithIconListSkeleton/>}>
                        <CertificatesListWrapper count="8"/>
                    </Suspense>
                </section>
                <section className='bg-white pt-24 pb-6'>
                    <div className="inner-container grid gap-6 lg:grid-cols-2 items-center p-6 border border-zinc-300 rounded-lg shadow-lg">
                        <div>
                            <h2>
                                درگاه شفافیت
                            </h2>
                            <p>
                                درگاه داده باز، یک بستر الکترونیکی برای دسترسی آسان شهروندان به داده‌های مربوط به کسب و
                                کارها است. این درگاه، مجموعه‌ای از داده‌های متنوع و مفید مرتبط با کسب و کار از جمله
                                کاتالوگ‌ها، آمارها، اطلاعات فنی و دیگر اطلاعات کاربردی مرتبط با بیزینس را به طور شفاف و
                                قابل
                                د
                                سترسی ارائه می‌کند
                            </p>
                            <div className="mt-6">
                                <SolidLink href='/transparent-data' title='ورود به درگاه' color="blue" size="md"/>
                            </div>
                        </div>
                        <div>
                            <Image src="/assets/images/others/transparent-portal.jpg" alt="درگاه شفافیت" loading='lazy' width={450} height={300} className=" mx-auto lg:me-0 lg:ms-auto"/>
                        </div>
                    </div>

                </section>
                <section className='bg-white pb-24 pt-6'>
                    <div className="inner-container grid gap-6 lg:grid-cols-2 items-center p-6 border border-zinc-300 rounded-lg shadow-lg">
                        <div className="order-2 lg:order-1">
                            <Image src="/assets/images/others/opendata-portal.jpg" alt="درگاه داده باز" loading='lazy' width={450} height={300} className=" mx-auto lg:me-auto lg:ms-0"/>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2>
                                درگاه داده باز
                            </h2>
                            <p>
                                درگاه داده باز، یک بستر الکترونیکی برای دسترسی آسان شهروندان به داده‌های مربوط به کسب و
                                کارها است. این درگاه، مجموعه‌ای از داده‌های متنوع و مفید مرتبط با کسب و کار از جمله
                                کاتالوگ‌ها، آمارها، اطلاعات فنی و دیگر اطلاعات کاربردی مرتبط با بیزینس را به طور شفاف و
                                قابل
                                دسترسی ارائه می‌کند
                            </p>
                            <div className="mt-6">
                                <SolidLink href='/open-data' title='ورود به درگاه' color="blue" size="md"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
