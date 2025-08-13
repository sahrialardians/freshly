import EmptyProduct from "@/components/EmptyProduct";
import ProductItems from "@/components/ProductItems";
import StatsOverview from "@/components/StatsOverview";
import Link from "next/link";

export default function Home() {
  const data = [
    { id: 1, name: "Suace teriyaki", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 2, name: "Sauce tomato", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 Junly, 2025" },
    { id: 3, name: "Suace tiram", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 4, name: "Sauce BBQ", category: "Ingredients", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 5, name: "Fresh Milk", category: "Dairy", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 July, 2025" },
    { id: 6, name: "Heavy Milk", category: "Dairy", qty: 1, unit: "liters", isFresh: true, expiredDate: "21 June, 2025" },
    { id: 7, name: "Yogurt", category: "Dairy", qty: 1, unit: "bottles", isFresh: true, expiredDate: "21 June, 2025" }
  ];

  const limit = 10;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-2">
        {/* Stats Overview */}
        <StatsOverview />

        {/* Recent Product */}
        <section className="px-2 flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Recent Products</h2>
            <Link
              href="/inventory"
              className="text-xs text-gray-700 hover:text-blue-700"
            >
              See all
            </Link>
          </div>

          <div className="space-y-3 mb-20">
            {data.length > 0 ? (
              (data ?? []).slice(0, limit).map((item) => (
                <ProductItems key={item.id} product={item} />
              ))
              ) : (
                <EmptyProduct />
              )
            }
          </div>
        </section>
      </div>
    </div>
  );
}
