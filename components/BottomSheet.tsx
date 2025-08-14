"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useEffect } from "react";

type BottomSheetProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

export default function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
    // Lock scroll saat sheet terbuka
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
        document.body.style.overflow = prev;
        };
    }, [open]);

    // Tutup dengan tombol ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const draggedFarEnough = info.offset.y > 100;
        const swipedFast = info.velocity.y > 500;
        if (draggedFarEnough || swipedFast) onClose();
    };

    return (
        <AnimatePresence>
        {open && (
            <>
            {/* Overlay */}
            <motion.div
                role="button"
                aria-label="Close sheet"
                onClick={onClose}
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
            {/* Sheet */}
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={title ?? "Bottom sheet"}
                className="fixed inset-x-0 bottom-0 z-50"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
                <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="mx-auto w-full max-w-md rounded-t-2xl bg-white shadow-lg"
                >
                {/* Grab handle */}
                <div className="flex justify-center pt-3">
                    <span className="h-1.5 w-10 rounded-full bg-gray-300" />
                </div>

                {/* Header optional */}
                {title ? (
                    <div className="px-4 pt-3 pb-2">
                    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                    </div>
                ) : null}

                {/* Content */}
                <div className="max-h-[80vh] overflow-y-auto px-4 pb-6">
                    {children}
                </div>
                </motion.div>
            </motion.div>
            </>
        )}
        </AnimatePresence>
    );
}
