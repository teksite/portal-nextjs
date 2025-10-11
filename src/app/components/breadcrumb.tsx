import Link from "next/link";
import { memo } from "react";

type BreadcrumbItem = [label: string, href?: string];

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
    separator?: string;
};

export const Breadcrumbs = memo(function Breadcrumbs({ items, separator = "/" }: BreadcrumbsProps) {
    if (!items || items.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className=" bg-zinc-50 px-3 py-3 shadow border-b border-zinc-300">
            {items.map(({label, href}, index) => {
                const isLast = index === items.length - 1;

                return (
                    <span key={href ?? label}>
                        {href && !isLast ? (
                            <Link href={href} className="text-blue-900 hover:blue-600 font-semibold">
                                {label}
                            </Link>
                        ) : (
                            <span aria-current="page">{label}</span>
                        )}

                        {!isLast && <span className="mx-1 text-neutral-600">{separator}</span>}
                    </span>
                );
            })}
        </nav>
    );
});
