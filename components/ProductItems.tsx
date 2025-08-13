import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Image } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductItemsProps {
    product: Product;
}

export default function ProductItems({ product }: ProductItemsProps) {
    return (
        <Card className="p-3 border-0 relative z-10 cursor-pointer bg-white">
        <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center relative">
                <Image className="w-5 h-5 text-gray-400" />
                <Badge className="bg-green-500 text-xs text-white rounded-full absolute -bottom-2">
                    Fresh
                </Badge>
            </div>

            <div className="flex-1">
            <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
            </div>

            <div className="flex items-center justify-start">
                <p className="text-sm text-gray-500 capitalize">{product.category} -</p>
                <p className="text-sm text-gray-500 ml-1">
                {product.qty} {product.unit}
                </p>
            </div>

            <p className="text-xs text-gray-400 mt-1">
                Expires {product.expiredDate}
            </p>
            </div>
        </div>
        </Card>
    );
}
