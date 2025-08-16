"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { IdCardIcon, CircleCheckBig, ImageIcon, Package, Calendar, Layers } from "lucide-react";

interface Product {
    id: string;
    name: string;
    category: string;
    qty: number;
    unit: string;
    expiredDate?: string | null;
    imageUrl?: string | null;
}

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    return (
        <>
        <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl">
            {/* Image with fallback */}
            <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                {product.imageUrl ? (
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover" />
                ) : (
                    <ImageIcon className="w-16 h-16 text-gray-400" />
                )}
            </div>
        </div>
        <div className="px-2 py-2">
            {/* Product name */}
            <h2 className="text-2xl font-bold text-gray-800">
                {product.name || "Unnamed Product"}
            </h2>
            {/* Details */}
            <div className="space-y-2 text-sm text-gray-600">
                <div>
                    <p>
                        {product.category} - {product.qty} {product.unit}
                    </p>
                </div>
                <div>
                    <p>
                        Expires {product.expiredDate}
                    </p>
                </div>
            </div>
            <Button
                className="px-4 py-6 mt-8 w-full rounded-xl bg-green-500 hover:bg-green-500 font-semibold text-white">
                Product is Fresh!
            </Button>
        </div>
        </>
    );
}
