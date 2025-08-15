import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function Report() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="px-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900 mt-4">Reports</h2>
        </div>

        <div className="space-y-3 mb-20">
          <Card className="text-center border border-gray-200 ">
            <div className="text-gray-400">
                <Info className="w-8 h-8 mx-auto hover:text-blue-600" />
            </div>
            <h4 className="text-md font-medium text-gray-900 -mt-4">Soon</h4>
            <p className="text-gray-500 -mt-6">
                This feature is still under development
            </p>
        </Card>
        </div>
      </section>
    </div>
  );
}
