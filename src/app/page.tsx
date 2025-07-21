import {Suspense} from "react";
import Image from "next/image";
import Link from "next/link";

import {SolidLink} from "@/ui/components/Links";
import Search from "@/ui/components/search";
import {CardWithIconListSkeleton} from "@/ui/components/skeletons";
import Banner from "@/ui/layout/Banner";
import {env} from "@/lib";
import {LicenseListWrapper} from "@/ui/components/license/licenseList";

export default function Home() {
    const appName = env("NEXT_PUBLIC_APP_NAME");
    return (
        <>
            <Banner title={appName ?? "پنجره واحد خدمات وزارت فرهنگ و ارشاد اسلامی"}>
                <div className="space-y-6">
                    <Search/>
                    <div className="flex items-center gap-6 justify-center">
                        <Link href="/servicedesk" className="text-zinc-50 font-semibold">
                            مشاهده همه مجوزها
                        </Link>
                    </div>
                </div>
            </Banner>
            <main className="">
                <section className="inner-container pt-12 pb-24">
                    <div className="relative text-center mb-12">
                        <h2 className="text-center inline-block px-3 bg-zinc-50 dark:bg-zinc-950 mb-0">
                            مجوزهای پربازدید
                        </h2>
                        <hr className="absolute inset-x-0 top-1/2 border-zinc-600 -z-10"/>
                    </div>
                    <Suspense fallback={<CardWithIconListSkeleton/>}>
                        <LicenseListWrapper/>
                    </Suspense>
                </section>
                <section className="bg-white dark:bg-zinc-900 pt-24 pb-6">
                    <div className="inner-container grid gap-6 lg:grid-cols-2 items-center x-box">
                        <div>
                            <h2>درگاه شفافیت</h2>
                            <p>
                                درگاه داده باز، یک بستر الکترونیکی برای دسترسی آسان شهروندان به
                                داده‌های مربوط به کسب و کارها است. این درگاه، مجموعه‌ای از
                                داده‌های متنوع و مفید مرتبط با کسب و کار از جمله کاتالوگ‌ها،
                                آمارها، اطلاعات فنی و دیگر اطلاعات کاربردی مرتبط با بیزینس را به
                                طور شفاف و قابل د سترسی ارائه می‌کند
                            </p>
                            <div className="mt-6">
                                <SolidLink
                                    href="/transparent-data"
                                    title="ورود به درگاه"
                                    color="blue"
                                    size="md"
                                />
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/assets/images/others/transparent-portal.jpg"
                                alt="درگاه شفافیت"
                                loading="lazy"
                                width={450}
                                height={300}
                                className=" mx-auto lg:me-0 lg:ms-auto"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-white dark:bg-zinc-900 pb-24 pt-6">
                    <div className="inner-container grid gap-6 lg:grid-cols-2 items-center x-box">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/assets/images/others/opendata-portal.jpg"
                                alt="درگاه داده باز"
                                loading="lazy"
                                width={450}
                                height={300}
                                className=" mx-auto lg:me-auto lg:ms-0"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2>درگاه داده باز</h2>
                            <p>
                                درگاه داده باز، یک بستر الکترونیکی برای دسترسی آسان شهروندان به
                                داده‌های مربوط به کسب و کارها است. این درگاه، مجموعه‌ای از
                                داده‌های متنوع و مفید مرتبط با کسب و کار از جمله کاتالوگ‌ها،
                                آمارها، اطلاعات فنی و دیگر اطلاعات کاربردی مرتبط با بیزینس را به
                                طور شفاف و قابل دسترسی ارائه می‌کند
                            </p>
                            <div className="mt-6">
                                <SolidLink
                                    href="/open-data"
                                    title="ورود به درگاه"
                                    color="blue"
                                    size="md"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
