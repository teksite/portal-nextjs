import React, {useState} from "react";
import {LicenseType} from "@/models/licenseModel";
import {Description, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {SolidLink} from "@/ui/components/Links";

function TableWrapper(data: LicenseType) {
    const content = {
        "کد خدمت": data.code,
        "گروه خدمت": data.serviceGroupCaption,
        "هزینه خدمت": data.cost ? "دارد" : "ندارد",
        "نحوه ارائه خدمت": data.electronics ? "الکتورنیکی" : "حضوری",
        "مراجعه حضوری": data.needPresence ? "دارد" : "ندارد",
        "متوسط زمان اخذ خدمت": data.avgTime,
    };

    return (
        <table
            className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
            <tbody>
            {Object.entries(content).map(([key, value], index: number) => (
                <tr key={index}>
                    <th className="p-1 text-start w-1/2 border border-gray-300  font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                        {key}
                    </th>
                    <td className="p-1 w-1/2 border border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-200">
                        {value}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export const TableMode = ({data}: { data: LicenseType; }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleCatalogClick = () => {
        setIsOpen(true);
    };
    const tableContent = TableWrapper(data);
    return (
       (
            <Dialog
                open={true}
                onClose={() => setIsOpen(false)}
                className="relative z-50 transition"
            >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-black/50 backdrop-blur-sm">
                    <DialogPanel className="transition duration-300 ease-out data-closed:opacity-0 w-lg max-w-lg space-y-3  bg-white dark:bg-zinc-900 rounded-lg shadow-xl border border-zinc-300 dark:border-zinc-600 dark:text-zinc-300">
                        <div className="p-12">
                            <div className="flex items-center justify-between mb-6">
                                <DialogTitle className="font-bold !mb-0">
                                    {data?.title}
                                </DialogTitle>
                                <SolidLink
                                    color="green"
                                    size="sm"
                                    href=""
                                    className="min-w-fit w-fit"
                                >
                                    ثبت درخواست
                                </SolidLink>
                            </div>
                            <Description className="text-sm">
                                {data?.description}
                            </Description>

                            {tableContent}
                        </div>
                        <div className="flex border-t border-zinc-300 divide-x divide-zinc-300  dark:border-zinc-600  dark:divide-zinc-600">
                            <button
                                className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                جزئیات بیشتر
                            </button>
                            <button
                                className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                بستن
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        )
    );
};
