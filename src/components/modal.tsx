import { ReactNode, HTMLAttributes, useEffect, useCallback } from "react";
import { Xbox } from "@/components/xbox";

type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

export function Modal({ children, isOpen, onClose, ...props }: ModalProps) {

    const handleClose = useCallback(() => {
        if (isOpen) onClose();
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center animate-fadeIn"
            {...props}
            onClick={handleClose}
        >
            <div
                className="relative w-[90%] max-w-6xl max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                <Xbox className="w-full h-full overflow-y-auto p-6 relative">
                    <button
                        className="text-red-500 rounded-full px-2 py-1 absolute top-2 end-2"
                        onClick={handleClose}
                        aria-label="Close Modal"
                    >
                        ✕
                    </button>
                    {children}
                </Xbox>
            </div>
        </div>
    );
}
