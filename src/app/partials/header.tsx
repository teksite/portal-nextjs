import Link from "next/link";
import Image from "next/image";

export function LayoutHeader() {
    return (
        <header className="bg-slate-900 px-3 py-3 flex items-center justify-between">
            <figure className={'flex items-center gap-1'}>
                <Image src={'/uploads/logo.png'} width={35} height={35} alt={'پنجره واحد خدمات وزارت فرهنگ و ارشاد اسلامی'} loading={'eager'} fetchPriority={'high'} decoding={'sync'}/>
                <figcaption>
                    <Link href="/" className="text-zinc-50">
                        پنجره واحد خدمات وزارت فرهنگ و ارشاد اسلامی
                    </Link>
                </figcaption>
            </figure>

        </header>
    );
}