"use client";

import { useState } from "react";
import EmptyProduct from "@/components/EmptyProduct";
import ProductItems from "@/components/ProductItems";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils"; // pastikan ada utils ini

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterTabs = [
    { label: "All", value: "all" },
    { label: "Ingredients", value: "Ingredients" },
    { label: "Dairy", value: "Dairy" },
    { label: "Meats", value: "Meats" },
    { label: "Drinks", value: "Drinks" },
  ];

  const data = [
    { id: 1, name: "Sauce Teriyaki", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 2, name: "Sauce Tomato", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 July, 2025" },
    { id: 3, name: "Sauce Tiram", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 4, name: "Sauce BBQ", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 5, name: "Fresh Milk", category: "Dairy", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 July, 2025" },
    { id: 6, name: "Heavy Milk", category: "Dairy", qty: 1, unit: "liters", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 7, name: "Yogurt", category: "Dairy", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" }
  ];

  const limit = 10;

  // Filter berdasarkan search dan kategori
  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilter === "all" || item.category === selectedFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white w-full px-4 py-4 shadow-sm">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200 rounded-xl"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {filterTabs.map((tab) => (
            <Badge
              key={tab.value}
              variant={selectedFilter === tab.value ? "default" : "secondary"}
              className={cn(
                "flex-shrink-0 text-sm font-medium transition-colors cursor-pointer rounded-full",
                selectedFilter === tab.value
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              onClick={() => setSelectedFilter(tab.value)}
            >
              {tab.label}
            </Badge>
          ))}
        </div>
      </section>

      {/* Product List */}
      <section className="px-4 py-4 flex-1">
        <div className="space-y-3 mb-20">
          {filteredData.length > 0 ? (
            filteredData.slice(0, limit).map((item) => (
              <ProductItems key={item.id} product={item} />
            ))
          ) : (
            <EmptyProduct />
          )}
        </div>
      </section>
    </div>
  );
}
