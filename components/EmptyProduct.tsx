import React from 'react'
import { Card } from './ui/card'
import { Search } from 'lucide-react'

export default function EmptyProduct() {
    return (
        <Card className="text-center border-0">
            <div className="text-gray-400">
                <Search className="w-8 h-8 mx-auto" />
            </div>
            <h4 className="text-md font-medium text-gray-900">No products yet</h4>
            <p className="text-gray-500 -mt-4">
                Adding product to track expiration dates
            </p>
        </Card>
    )
}
