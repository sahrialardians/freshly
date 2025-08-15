import { ChevronRight } from "lucide-react"

interface SettingItemProps {
    icon: React.ReactNode
    title: string
    description: string
}

export function SettingItem({ icon, title, description }: SettingItemProps) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors cursor-pointer">
            <div className="flex items-start gap-3">
                <div className="mt-0.5 bg-gray-100 rounded-xl w-10 h-10 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
    )
}
