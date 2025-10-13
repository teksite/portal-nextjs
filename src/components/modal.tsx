'use client'

import { ReactNode, HTMLAttributes, useEffect, useCallback, useState, useRef } from "react";

type ModalProps = {
    title?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

export function Modal({ title, children, isOpen, onClose, ...props }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    // -------------------------------
    // Drag handlers
    // -------------------------------
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!modalRef.current) return;
        setDragging(true);
        setMouseOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - mouseOffset.x,
            y: e.clientY - mouseOffset.y,
        });
    }, [dragging, mouseOffset]);

    const handleMouseUp = useCallback(() => setDragging(false), []);

    useEffect(() => {
        if (dragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging, handleMouseMove, handleMouseUp]);

    // -------------------------------
    // Close handler
    // -------------------------------
    const handleClose = useCallback(() => {
        onClose();
        setPosition({ x: 0, y: 0 }); // ✅ Reset position
    }, [onClose]);

    // -------------------------------
    // ESC key
    // -------------------------------
    useEffect(() => {
        if (!isOpen) return;
        const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, handleClose]);

    // -------------------------------
    // Lock body scroll
    // -------------------------------
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-zinc-950/90 z-50 flex items-center justify-center"
            {...props}
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                className="relative w-[90%] max-w-4xl max-h-[90vh] rounded-lg shadow-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900 -translate-y-1/2"
                onClick={(e) => e.stopPropagation()} >
                <div
                    className="modalHeader flex items-center justify-between gap-3  bg-slate-600 px-3 py-1 cursor-move"
                    onMouseDown={handleMouseDown} >
                    {title && <h3 className="text-lg font-bold mb-0 text-zinc-50">{title}</h3>}
                    <button
                        className="text-zinc-50 rounded-full p-1 mt-1"
                        onClick={handleClose}
                        aria-label="Close Modal" >
                        ✕
                    </button>
                </div>
                <div className=" p-6 w-full h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
