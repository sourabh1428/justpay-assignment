"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bug, User, Radio, GitBranch, Database, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

const notifications = [
  {
    id: 1,
    icon: Bug,
    title: "You have a bug that needs...",
    time: "Just now",
    type: "bug",
  },
  {
    id: 2,
    icon: User,
    title: "New user registered",
    time: "59 minutes ago",
    type: "user",
  },
  {
    id: 3,
    icon: Bug,
    title: "You have a bug that needs...",
    time: "12 hours ago",
    type: "bug",
  },
  {
    id: 4,
    icon: Radio,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    type: "subscription",
  },
]

const activities = [
  {
    id: 1,
    user: "You",
    avatar: "/diverse-user-avatars.png",
    action: "You have a bug that needs...",
    time: "Just now",
    type: "bug",
  },
  {
    id: 2,
    user: "Olivia Rhye",
    avatar: "/professional-woman-avatar.png",
    action: "Released a new version",
    time: "59 minutes ago",
    type: "release",
  },
  {
    id: 3,
    user: "Phoenix Baker",
    avatar: "/professional-man-avatar.png",
    action: "Submitted a bug",
    time: "12 hours ago",
    type: "bug",
  },
  {
    id: 4,
    user: "Lana Steiner",
    avatar: "/woman-developer-avatar.png",
    action: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    type: "data",
  },
  {
    id: 5,
    user: "Demi Wilkinson",
    avatar: "/woman-designer-avatar.png",
    action: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    type: "delete",
  },
]

const contacts = [
  {
    id: 1,
    name: "Natali Craig",
    avatar: "/professional-woman-headshot.png",
  }
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "bug":
      return Bug
    case "release":
      return GitBranch
    case "data":
      return Database
    case "delete":
      return Trash2
    default:
      return User
  }
}

export function RightSidebar() {
  return (
    <div className="w-80 bg-background border-l border-border p-6 space-y-6 overflow-y-auto h-full">
      {/* Notifications Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
        <div className="space-y-3">
          {notifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <div
                key={notification.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div
                  className={cn(
                    "p-2 rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform",
                    notification.type === "bug" && "bg-red-100 dark:bg-red-950",
                    notification.type === "user" && "bg-blue-100 dark:bg-blue-950",
                    notification.type === "subscription" && "bg-green-100 dark:bg-green-950",
                  )}
                >
                  <IconComponent
                    className={cn(
                      "h-4 w-4",
                      notification.type === "bug" && "text-red-600 dark:text-red-400",
                      notification.type === "user" && "text-blue-600 dark:text-blue-400",
                      notification.type === "subscription" && "text-green-600 dark:text-green-400",
                    )}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {notification.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Activities Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Activities</h3>
        <div className="space-y-3">
          {activities.map((activity) => {
            const IconComponent = getActivityIcon(activity.type)
            return (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <Avatar className="h-8 w-8 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                  <AvatarFallback className="text-xs">
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    <span className="font-medium">{activity.user === "You" ? "You" : activity.user}</span>
                    <span className="ml-1">{activity.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <div
                  className={cn(
                    "p-1 rounded flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity",
                    activity.type === "bug" && "bg-red-100 dark:bg-red-950",
                    activity.type === "release" && "bg-green-100 dark:bg-green-950",
                    activity.type === "data" && "bg-blue-100 dark:bg-blue-950",
                    activity.type === "delete" && "bg-red-100 dark:bg-red-950",
                  )}
                >
                  <IconComponent
                    className={cn(
                      "h-3 w-3",
                      activity.type === "bug" && "text-red-600 dark:text-red-400",
                      activity.type === "release" && "text-green-600 dark:text-green-400",
                      activity.type === "data" && "text-blue-600 dark:text-blue-400",
                      activity.type === "delete" && "text-red-600 dark:text-red-400",
                    )}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <Avatar className="h-8 w-8 flex-shrink-0 group-hover:scale-105 transition-transform">
                <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                <AvatarFallback className="text-xs">
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {contact.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
