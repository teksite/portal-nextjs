import Link from "next/link";

export function LayoutHeader() {
    return (
        <header className="bg-slate-900 px-3 py-3 flex items-center justify-between">
            <Link href="/" className="text-zinc-50">
                نجره واحد خدمات وزارت فرهنگ و ارشاد اسلامی
            </Link>

        </header>
    );
}