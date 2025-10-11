import Link from "next/link";

export function LayoutFooter() {
    return (
        <header className="bg-slate-900 px-3 min-h-24 py-1 flex items-center justify-between">
            <Link href="/" className="text-zinc-50">
                وفا
            </Link>

        </header>
    );
}