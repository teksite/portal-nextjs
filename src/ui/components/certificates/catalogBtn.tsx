"use client"

import {Description, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {useState} from "react";
import {BookOpenIcon} from "@heroicons/react/16/solid";
import {ServiceType} from "@/models/serviceModel";
import {SolidLink} from "@/ui/components/Links";


function TableWrapper(service: ServiceType) {
    const data = {
        'کد خدمت': service.code,
        'گروه خدمت': service.serviceGroupCaption,
        'هزینه خدمت': service.code ? 'دارد' : 'ندارد',
        'نحوه ارائه خدمت': service.electronic ? 'الکتورنیکی' : 'حضوری',
        'مراجعه حضوری': service.needPresence ? 'دارد' : 'ندارد',
        'متوسط زمان اخذ خدمت': service.avgTime,
    };

    return (
        <table
            className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
            <tbody>
            {
                Object.entries(data).map(([key, value], index: number) => (
                    <tr key={index}>
                        <th className="p-1 text-start w-1/2 border border-gray-300  font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                            {key}
                        </th>
                        <td className="p-1 w-1/2 border border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-200">
                            {value}
                        </td>
                    </tr>
                ))
            }

            </tbody>
        </table>
    );
}

export default function CatalogBtn({certificate}: { certificate?: string }) {
    const service: ServiceType = JSON.parse(certificate ?? '')?.service;
    const [isOpen, setIsOpen] = useState(false)
    const handleCatalogClick = () => {
        setIsOpen(true)
    };
    const tableContent = TableWrapper(service)

    return (
        <>
            <button
                className="w-full flex items-center justify-center gap-1 text-blue-900 p-3 text-center hover:bg-zinc-300"
                onClick={handleCatalogClick}>
                <BookOpenIcon className="stroke-current fill-none size-5"/>
                <span>کاتالوگ</span>
            </button>
            {
                isOpen && <Dialog open={true} onClose={() => setIsOpen(false)} className="relative z-50 transition">
                    <div
                        className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-black/50 backdrop-blur-sm">
                        <DialogPanel
                            className="transition duration-300 ease-out data-closed:opacity-0 w-lg max-w-lg space-y-3  bg-white dark:bg-zinc-900 rounded-lg shadow-xl border border-zinc-300 dark:border-zinc-600 dark:text-zinc-300">
                            <div className="p-12">
                                <div className="flex items-center justify-between mb-6">
                                    <DialogTitle className="font-bold !mb-0">{service?.title}</DialogTitle>
                                    <SolidLink color="green" size="sm" href="" className="min-w-fit w-fit">ثبت درخواست</SolidLink>
                                </div>
                                <Description className="text-sm">{service?.description}</Description>

                                {tableContent}

                            </div>
                            <div
                                className="flex border-t border-zinc-300 divide-x divide-zinc-300  dark:border-zinc-600  dark:divide-zinc-600">
                                <button
                                    className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"
                                    onClick={() => setIsOpen(false)}>جزئیات بیشتر
                                </button>
                                <button
                                    className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"
                                    onClick={() => setIsOpen(false)}>بستن
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            }
        </>
    );
}