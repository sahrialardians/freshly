"use client"

import { BarChart3, Home, Package, Plus, Settings, } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import { Button } from './ui/button';
import BottomSheet from './BottomSheet';
import AddItemForm from './AddItemForm';

export default function BottomNavigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-xl z-30">
            <div className="max-w-md mx-auto px-2">
                <div className="flex justify-around items-center py-1 relative">
                {/* First two nav items */}
                <Link
                    href="/"
                    className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors touch-target text-gray-500 hover:text-gray-700">
                    <Home className="w-5 h-5" />
                    <span className="text-xs font-xs">Home</span>
                </Link>

                <Link
                    href="/inventory"
                    className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors touch-target text-gray-500 hover:text-gray-700">
                    <Package className="w-5 h-5" />
                    <span className="text-xs font-xs">Inventory</span>
                </Link>

                {/* Center floating action button */}
                <Button
                    onClick={() => setOpen(true)}
                    className="relative -top-0 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center"
                    aria-label="Add New Product">
                    <Plus className="w-6 h-6" />
                </Button>

                {/* Bottom Sheet */}
                <BottomSheet open={open} onClose={() => setOpen(false)} title="Add New Item">
                    <AddItemForm onDone={() => setOpen(false)} />
                </BottomSheet>

                {/* Last two nav items */}
                <Link
                    href="/report"
                    className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors touch-target text-gray-500 hover:text-gray-700">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs font-xs">Reports</span>
                </Link>

                <Link
                    href="/setting"
                    className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors touch-target text-gray-500 hover:text-gray-700">
                    <Settings className="w-5 h-5" />
                    <span className="text-xs font-xs">Settings</span>
                </Link>
                </div>
            </div>
        </nav>
    )
}
