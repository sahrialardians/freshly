import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight, Settings2, InfoIcon, FileEdit, BookAlert, UserPen } from "lucide-react"
import { SettingItem } from "@/components/SettingItem"

export default function Settings() {
  const settingItems = [
    { 
      id: 1, 
      icon: <UserPen className="w-5 h-5 text-primary" />, 
      title: "Profile", 
      description: "Manage your profile settings." 
    },
    { 
      id: 2, 
      icon: <Settings2 className="w-5 h-5 text-primary" />, 
      title: "Notifications", 
      description: "Customize your notification settings." 
    },
    { 
      id: 3, 
      icon: <FileEdit className="w-5 h-5 text-primary" />, 
      title: "Feedback", 
      description: "Give our app feedback." 
    },
    { 
      id: 4, 
      icon: <BookAlert className="w-5 h-5 text-primary" />, 
      title: "Support", 
      description: "Open your support ticket." 
    },
    { 
      id: 5, 
      icon: <InfoIcon className="w-5 h-5 text-primary" />, 
      title: "About App", 
      description: "Learn more about our app." 
    },
  ]

  return (
    <div className="max-w-md mx-auto p-4 space-y-3">
      {/* Profile */}
      <div className="flex flex-col items-center space-y-4 mt-6">
        <Avatar className="w-20 h-20 border-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Sahrial Ardians</h2>
          <p className="text-sm text-muted-foreground">
            sahrialardians@example.com
          </p>
        </div>
      </div>

      {/* Plan Card */}
      <Card className="py-1 bg-yellow-50 border-yellow-200 mt-8">
        <CardContent className="flex items-center justify-between py-2">
          <div>
            <h4 className="font-semibold flex items-center gap-1">
              Free Plan
            </h4>
            <div className="flex items-center gap-1">
              <p className="text-sm text-muted-foreground">Upgrade your plan</p>
              <ArrowUpRight className="w-5 h-5 text-gray-600 hover:text-primary transition-colors cursor-pointer"/>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Setting List */}
      <div className="bg-card rounded-xl border divide-y mb-22"> 
        {settingItems.map((item) => (
          <SettingItem 
            key={item.id} 
            icon={item.icon} 
            title={item.title} 
            description={item.description} />
        ))}
      </div>
    </div>
  )
}
