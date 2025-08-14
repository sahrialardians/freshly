"use client";

import { useState } from "react";
import DateScrollPicker from "./DateScrollPicker";

export default function AddItemForm({ onDone }: { onDone: () => void }) {
    const [step, setStep] = useState(1);
    const [date, setDate] = useState<Date>(new Date());
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    return (
        <div>
        {/* Stepper mini */}
        <div className="flex items-center gap-3 py-2">
            <div className={`flex items-center gap-2`}>
            <div className={`h-6 w-6 grid place-items-center rounded-full text-xs font-bold
                ${step === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                1
            </div>
            <span className="text-sm font-medium">Product</span>
            </div>
            <span className="h-px w-8 bg-gray-200" />
            <div className={`flex items-center gap-2`}>
            <div className={`h-6 w-6 grid place-items-center rounded-full text-xs font-bold
                ${step === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                2
            </div>
            <span className="text-sm font-medium">Dates</span>
            </div>
        </div>

        {step === 1 && (
            <div className="space-y-2 mt-4">
            <label className="block text-sm font-medium">Name</label>
            <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2"
                    placeholder="Enter product name" />

            <label className="block text-sm font-medium">Category</label>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                <option value="">Select category</option>
                <option>Ingredients</option>
                <option>Dairy</option>
                <option>Others</option>
            </select>

            <div className="grid grid-cols-2 gap-3">
                <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <input type="number" defaultValue={1}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2" />
                </div>
                <div>
                <label className="block text-sm font-medium mb-2">Unit</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                    <option>Pcs</option>
                    <option>Bottles</option>
                    <option>Liters</option>
                </select>
                </div>
            </div>

            <button
                onClick={() => setStep(2)}
                className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white"
            >
                Next →
            </button>
            </div>
        )}

        {step === 2 && (
            <div className="space-y-3 mt-4">
            <label className="block text-sm font-medium">Purchase Date</label>
            <input type="date" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2" />

            <label className="block text-sm font-medium">Expiration Date</label>
            <input type="date" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2" />

            <div className="mt-2 flex gap-3">
                <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-xl border border-gray-300 px-4 py-2 font-semibold text-gray-700"
                >
                ← Back
                </button>
                <button
                onClick={onDone}
                className="flex-1 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white"
                >
                Save
                </button>
            </div>
            </div>
        )}
        </div>
    );
}
