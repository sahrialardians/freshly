import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight, Settings2, InfoIcon, FileEdit, BookAlert, UserPen } from "lucide-react"
import { SettingItem } from "@/components/SettingItem"
import { Button } from "@/components/ui/button"
import { SignedOut, RedirectToSignIn, SignOutButton  } from "@clerk/nextjs"
import { checkUser } from "@/lib/checkUser"
import { toCapitalize } from "@/lib/strings"

export default async function Settings() {
  const user  = await checkUser()

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
          <AvatarImage src={user?.image_url} alt="Profile" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-lg font-semibold">{user?.full_name}</h2>
          <p className="text-sm text-muted-foreground">
            {user?.email}
          </p>
        </div>
      </div>

      {/* Plan Card */}
      <Card className="py-1 bg-yellow-50 border-yellow-200 mt-8">
        <CardContent className="flex items-center justify-between py-2">
          <div>
            <h4 className="font-semibold flex items-center gap-1">
              { toCapitalize(user?.subscription_type) } Plan
            </h4>
            <div className="flex items-center gap-1">
              <p className="text-sm text-muted-foreground">Upgrade your plan</p>
              <ArrowUpRight className="w-5 h-5 text-gray-600 hover:text-primary transition-colors cursor-pointer"/>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Setting List */}
      <div className="bg-card rounded-xl border divide-y mb-4"> 
        {settingItems.map((item) => (
          <SettingItem 
            key={item.id} 
            icon={item.icon} 
            title={item.title} 
            description={item.description} />
        ))}
      </div>

      {/* Sign Out Button */}
      <div className="max-w-md mx-auto mb-18">
        <SignOutButton redirectUrl="/sign-in">
          <Button className="w-full border-1 bg-red-50 border-red-200 text-red-600 hover:bg-red-100 cursor-pointer py-6 rounded-xl">
            Sign Out
          </Button>
          {/* <RedirectToSignIn /> */}
        </SignOutButton>
      </div>
    </div>
  )
}
