import {Xbox} from "@/components/xbox";
import Link from "next/link";
import Image from "next/image";

export async function SectionOpenData() {
    return (
        <section className=''>
            <Xbox className="grid gap-6 lg:grid-cols-2 mb-6 p-6 items-center">
                <div>
                    <h2>
                        درگاه داده باز
                    </h2>
                    <p className='text-sm'>
                        درگاه داده باز، یک بستر الکترونیکی برای دسترسی آسان شهروندان به داده‌های مربوط به کسب و کارها
                        است. این درگاه، مجموعه‌ای از داده‌های متنوع و مفید مرتبط با کسب و کار از جمله کاتالوگ‌ها،
                        آمارها، اطلاعات فنی و دیگر اطلاعات کاربردی مرتبط با بیزینس را به طور شفاف و قابل دسترسی ارائه
                        می‌کند.
                    </p>
                    <div className="mt-6">
                        <Link href={'/open-data'}
                              className='text-sm font-semibold text-zinc-50 bg-blue-950 rounded-lg px-3 py-1'>
                            ورود به درگاه
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={'/uploads/factory/open-data-banner.jpg'} alt={'درگاه داده باز'} width={400} height={177} className='w-full h-full rounded-lg' loading={'eager'} fetchPriority='high' decoding='sync' />
                </div>
            </Xbox>


        </section>
    );
}