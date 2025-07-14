import Banner from "@/ui/layout/Banner";
import Breadcrumb from "@/ui/components/breadcrumb/breadcrumb";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import {TransparentGroupItemsType, TransparentItemType} from "@/models/transparent";
import Link from "next/link";
import {ChevronDoubleLeftIcon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";

const items: TransparentGroupItemsType[] = [
    {
        id: 1,
        title: "آمار و اطلاعات",
        image: "/images/logo/logo.png",
        sub: [
            {id: 11, title: "بانک مجوزهای صادره", slug: "بانک مجوزهای صادره"},
            {id: 12, title: "آمار ارائه خدمات دستگاه", slug: "آمار ارائه خدمات دستگاه"},
            {id: 13, title: "پراکندگی صدور مجوزها", slug: "پراکندگی صدور مجوزها"},
        ],
    },
    {
        id: 2,
        title: "منابع انسانی",
        image: "/images/logo/logo.png",
        sub: [
            {id: 21, title: "منابع انسانی", slug: "منابع انسانی"},
            {id: 22, title: "کمیته شفافیت", slug: "کمیته شفافیت"},
            {id: 23, title: "کارکنان", slug: "کارکنان"},
            {id: 24, title: "ساختار سازمانی", slug: "ساختار سازمانی"},
        ],
    },
    {
        id: 3,
        title: "مالی",
        image: "/images/logo/logo.png",
        sub: [
            {id: 31, title: "معاملات و قراردادها", slug: "معاملات و قراردادها-1"},
            {id: 32, title: "معاملات و قراردادها 2", slug: "معاملات و قراردادها-2"},
            {id: 33, title: "بودجه", slug: "بودجه"},
            {id: 34, title: "مناقصات و مزایدات", slug: "مناقصات و مزایدات"},
            {id: 35, title: "فهرست اموال غیر منقول", slug: "فهرست اموال غیر منقول"},
        ],
    },
    {
        id: 4,
        title: "اسناد و لوایح",
        image: "/images/logo/logo.png",
        sub: [
            {id: 41, title: "تفاهم نامه ها", slug: "تفاهم نامه ها"},
            {id: 42, title: "لوایح پیشنهادی", slug: "لوایح پیشنهادی"},
            {id: 43, title: "اسناد پژوهشی 1", slug: "اسناد پژوهشی-1"},
            {id: 44, title: "اسناد پژوهشی 2", slug: "اسناد پژوهشی-2"},
            {id: 45, title: "بانک صورت جلسات", slug: "بانک صورت جلسات"},
        ],
    },
];

export default function IndexPage() {
    const breadcrumbItems = [
        {
            title: "درگاه شفافیت",
        },
    ];

    return (
        <>
            <Banner title="درگاه شفافیت">
                <Breadcrumb items={breadcrumbItems} listClassName="justify-center mx-auto text-center"/>
            </Banner>
            <div className="flex inner-container justify-center py-24 -mt-36">
                <TabGroup className="flex w-full x-box ">
                    <TabList className="flex flex-col min-w-fit w-64 " aria-label="Transparency Tabs">
                        {items.map((item: TransparentGroupItemsType) => (
                            <Tab
                                key={item.id}
                                className="rounded-s-lg border border-zinc-300  dark:border-zinc-600 px-3 py-2 text-sm font-semibold  focus:outline-none data-[focus]:outline data-[hover]:bg-white/5 data-[selected]:bg-blue-900 data-[selected]:text-zinc-50  data-[selected]:dark:bg-white/10 data-[selected] data-[selected]:scale-x-105 transition-all duration-150 ease-linear origin-left dark:text-zinc-300">
                                {item.title}
                            </Tab>
                        ))}

                    </TabList>
                    <TabPanels className="w-full ">
                        {items.map((item: TransparentGroupItemsType) => (
                            <TabPanel key={item.id} className="border border-zinc-300  dark:border-zinc-600 w-full p-6 h-96 max-h-96 overflow-y-auto">
                                <div className="flex items-center gap-3">
                                    <MagnifyingGlassIcon className="size-6 stroke-zinc-300"/>
                                    <h2 className="!mb-0">
                                        {item.title}
                                    </h2>
                                </div>
                                <hr className="my-6 border-zinc-300 dark:border-zinc-600"/>
                                <ul className="md:columns-2 space-y-6 text">
                                    {item?.sub && item?.sub.map((itm: TransparentItemType) => (
                                        <li key={itm.id}>
                                            <Link href={`/transparent-data/${itm?.slug ?? '#'}`} className="flex items-center gap-1 text-blue-600 dark:text-blue-100">
                                                {itm.title}
                                                <ChevronDoubleLeftIcon className="stroke-current size-3"/>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </>
    );
}