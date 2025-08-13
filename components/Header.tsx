import React from 'react'
import { Bell } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white px-4 py-4 shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xl font-semibold text-gray-900">Freshly</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="#" className="touch-target">
                        <Bell className="w-4 h-4 text-gray-700 hover:text-blue-700" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
