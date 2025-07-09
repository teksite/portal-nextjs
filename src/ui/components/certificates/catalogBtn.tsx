"use client"

import {OutlineButton} from "@/ui/components/buttons";
import {useState} from "react";

export default function CatalogBtn({certificateId}: { certificateId?: string | number }) {
    const [showModal, setShowModal] = useState(false)
    const handleCatalogClick = () => {
        setShowModal(true)
    };

    return (
        <>
            <OutlineButton
                title="کاتالوگ"
                color="blue"
                size="md"
                className="w-full"
                onClick={handleCatalogClick}
            />
            {
                showModal && <div className="absolute inset-0 overscroll-none overflow-hidden z-20 bg-black/50 backdrop-blur-2xl flex items-center justify-center">
                    <div className="w-96 h-96 bg-white border border-zinc-300 rounded-lg">
                        sdfs
                    </div>
                </div>
            }
        </>
    );
}