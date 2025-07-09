"use client"

import {OutlineButton} from "@/ui/components/buttons";
import {Description, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {useState} from "react";

export default function CatalogBtn({certificateId}: { certificateId?: string | number }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleCatalogClick = () => {
        setIsOpen(true)
    };


    return (
        <>
            <OutlineButton title="کاتالوگ" color="blue" size="md" className="w-full" onClick={handleCatalogClick} />
            {
                isOpen && <Dialog open={true} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-black/50 backdrop-blur-sm">
                        <DialogPanel className="max-w-lg space-y-3  bg-white dark:bg-zinc-900 rounded-lg shadow-xl border border-zinc-300 dark:border-zinc-600 dark:text-zinc-300">
                           <div className="p-12">
                               <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                               <Description>This will permanently deactivate your account</Description>
                               <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                           </div>
                            <div className="flex border-t border-zinc-300 divide-x divide-zinc-300  dark:border-zinc-600  dark:divide-zinc-600">
                                <button className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm" onClick={() => setIsOpen(false)}>ثبت درخواست</button>
                                <button className="w-full block p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm" onClick={() => setIsOpen(false)}>کنسل</button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            }
        </>
    );
}