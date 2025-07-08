'use client';

import Link from 'next/link';
import {memo, useMemo} from 'react';

// Type Definitions
interface BreadcrumbItem {
    title: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
    showHomePage?: boolean;
    listClassName?: string
}

// Constants
const DEFAULT_HOME_ITEM: BreadcrumbItem = {
    title: 'صفحه نخست',
    href: '/',
};

const ChevronIcon = memo(() => (
    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 shrink-0" aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
    </svg>
));
ChevronIcon.displayName = 'ChevronIcon';

// Breadcrumb Item Component
const BreadcrumbItem = memo(({title, href}: BreadcrumbItem) => (
    <li className="inline-flex items-center">
        {href ? (
            <>
                <Link href={href} className="text-zinc-50 hover:text-zinc-100 transition-colors duration-200 select-none"
                      aria-label={`Navigate to ${title}`}>
                    {title}
                </Link>
                <ChevronIcon/>
            </>
        ) : (
            <span className="text-zinc-300 font-medium select-none">{title}</span>
        )}
    </li>
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

// Main Breadcrumb Component
const Breadcrumb = ({items, showHomePage = true ,listClassName}: BreadcrumbProps) => {
    const breadcrumbItems = useMemo(() => {
        const itemsWithHome = showHomePage ? [DEFAULT_HOME_ITEM, ...items] : items;
        return itemsWithHome.map((item, index) => (
            <BreadcrumbItem key={item.href || index} {...item} />
        ));
    }, [items, showHomePage]);

    return (
        <nav aria-label="Breadcrumb" className={`flex ${listClassName}`} >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {breadcrumbItems}
            </ol>
        </nav>
    );
};
Breadcrumb.displayName = 'Breadcrumb';

export default memo(Breadcrumb);