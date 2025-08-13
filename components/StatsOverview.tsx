import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Card } from "./ui/card";

export default function StatsOverview() {
    const statCards = [
        {
        label: "Fresh",
        value: 5,
        icon: CheckCircle,
        className: "bg-white border-0 text-gray-900",
        iconColor: "text-blue-500",
        },
        {
        label: "Expiring",
        value: 3,
        icon: AlertTriangle,
        className: "bg-white border-0 text-gray-900",
        iconColor: "text-blue-500",
        },
        {
        label: "Expired",
        value: 8,
        icon: XCircle,
        className: "bg-white border-0 text-gray-900",
        iconColor: "text-blue-500",
        },
    ];

    return (
        <section className="px-2 py-4">
            <div className="grid grid-cols-3 gap-3">
                {statCards.map((stat) => {
                    const IconComponent = stat.icon;
                    return (
                        <Card key={stat.label} className={stat.className}>
                        <div className="px-4 text-left">
                            <div className="flex items-center justify-start mb-1">
                                <div className="flex items-center justify-center">
                                    <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-xs text-gray-600">{stat.label}</p>
                        </div>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
