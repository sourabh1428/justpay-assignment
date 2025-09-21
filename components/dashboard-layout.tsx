"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Bell,
  Search,
  Settings,
  Home,
  ShoppingCart,
  Users,
  FileText,
  Folder,
  User,
  Building2,
  BookOpen,
  Share2,
  Menu,
  X,
  List,
} from "lucide-react"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
  currentPage?: string
}

const sidebarItems = [
  { icon: Home, label: "Overview", href: "/" },
  { icon: Folder, label: "Projects", href: "/projects" },
]

const dashboardItems = [
  { icon: Home, label: "Default", href: "/dashboard" },
  { icon: ShoppingCart, label: "eCommerce", href: "/", active: true },
  { icon: Folder, label: "Projects", href: "/projects" },
  { icon: BookOpen, label: "Online Courses", href: "/courses" },
  { icon: List, label: "Order List", href: "/orders" },
]

const pageItems = [
  { icon: User, label: "User Profile", href: "/profile" },
  { icon: Home, label: "Overview", href: "/overview" },
  { icon: Folder, label: "Projects", href: "/projects" },
  { icon: FileText, label: "Campaigns", href: "/campaigns" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Users, label: "Followers", href: "/followers" },
  { icon: User, label: "Account", href: "/account" },
  { icon: Building2, label: "Corporate", href: "/corporate" },
  { icon: BookOpen, label: "Blog", href: "/blog" },
  { icon: Share2, label: "Social", href: "/social" },
]

export function DashboardLayout({ children, currentPage = "eCommerce" }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 px-6 border-b border-sidebar-border">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary transition-colors duration-200">
              <span className="text-sm font-bold text-primary-foreground">B</span>
            </div>
            <span className="text-lg font-semibold text-sidebar-foreground">ByeWind</span>
            <Button variant="ghost" size="sm" className="ml-auto lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-6 p-4">
            {/* Favorites */}
            <div>
              <h3 className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Favorites</h3>
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recently */}
            <div>
              <h3 className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Recently</h3>
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={`recent-${item.label}`}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboards */}
            <div>
              <h3 className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Dashboards</h3>
              <ul className="space-y-1">
                {dashboardItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>
                      <Button
                        variant={item.active ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start gap-3 transition-all duration-200",
                          item.active
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Pages</h3>
              <ul className="space-y-1">
                {pageItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-4 w-4" />
          </Button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Dashboards</span>
            <span>/</span>
            <span className="text-foreground font-medium">{currentPage}</span>
          </div>

          {/* Search */}
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search"
                className="h-9 w-48 sm:w-64 rounded-md border border-input bg-background pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hidden sm:block">⌘K</kbd>
            </div>

            <ThemeToggle />

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>

            {/* Settings */}
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>

            {/* Profile */}
            <Avatar className="h-8 w-8">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
