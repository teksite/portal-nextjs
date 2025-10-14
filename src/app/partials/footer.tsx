import Link from "next/link";

export function LayoutFooter() {
    return (
        <footer className="bg-slate-900 px-3 py-3">
            <div className={'grid lg:grid-cols-2 gap-6'}>
                 <div>
                    <Link href="https://www.farhang.gov.ir/" className={'text-zinc-50 text-end text-sm'}>
                        وزارت فرهنگ و ارشاد اسلامی
                    </Link>
                 </div>
                <div className={'text-end'}>
                   <p className={'text-zinc-50 text-sm mb-0 text-center lg:text-end'}>
                       تمامی حقوق این وب سایت محفوظ و متعلق به وزارت فرهنگ و ارشاد اسلامی است.
                   </p>
                </div>
            </div>

        </footer>
    );
}