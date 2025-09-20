"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, TrendingDown, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { AdvancedBarChart } from "@/components/charts/advanced-bar-chart"
import { AdvancedLineChart } from "@/components/charts/advanced-line-chart"
import { AdvancedDonutChart } from "@/components/charts/advanced-donut-chart"
import { AreaChart } from "@/components/charts/area-chart"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { ScaleOnHover } from "@/components/animations/scale-on-hover"

const metrics = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    trend: "up",
    color: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
    color: "bg-background",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
    color: "bg-background",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
    color: "bg-background",
  },
]

const projectionsData = [
  { name: "Jan", actual: 20, projected: 25 },
  { name: "Feb", actual: 25, projected: 30 },
  { name: "Mar", actual: 22, projected: 28 },
  { name: "Apr", actual: 30, projected: 35 },
  { name: "May", actual: 28, projected: 32 },
  { name: "Jun", actual: 35, projected: 38 },
]

const revenueData = [
  { name: "Jan", current: 15000, previous: 12000 },
  { name: "Feb", current: 18000, previous: 15000 },
  { name: "Mar", current: 16000, previous: 17000 },
  { name: "Apr", current: 22000, previous: 19000 },
  { name: "May", current: 20000, previous: 21000 },
  { name: "Jun", current: 25000, previous: 23000 },
]

const salesData = [
  { name: "Direct", value: 300.56, color: "#1e293b" },
  { name: "Affiliate", value: 135.18, color: "#3b82f6" },
  { name: "Sponsored", value: 154.02, color: "#10b981" },
  { name: "E-mail", value: 48.96, color: "#f59e0b" },
]

const growthData = [
  { name: "Q1", value: 25 },
  { name: "Q2", value: 30 },
  { name: "Q3", value: 28 },
  { name: "Q4", value: 35 },
]

const topProducts = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
]

const activities = [
  {
    user: "You have a bug that needs...",
    time: "Just now",
    avatar: "/bug-icon.jpg",
    type: "bug",
    color: "bg-red-100 dark:bg-red-950",
  },
  {
    user: "Released a new version",
    time: "59 minutes ago",
    avatar: "/release-icon.jpg",
    type: "release",
    color: "bg-green-100 dark:bg-green-950",
  },
  {
    user: "Submitted a bug",
    time: "12 hours ago",
    avatar: "/diverse-user-avatars.png",
    type: "bug",
    color: "bg-red-100 dark:bg-red-950",
  },
  {
    user: "Modified a data in Page X",
    time: "Today, 11:59 AM",
    avatar: "/diverse-user-avatars.png",
    type: "edit",
    color: "bg-blue-100 dark:bg-blue-950",
  },
  {
    user: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    avatar: "/diverse-user-avatars.png",
    type: "delete",
    color: "bg-orange-100 dark:bg-orange-950",
  },
]

const contacts = [
  { name: "Natali Craig", avatar: "/natali-craig.jpg", status: "online" },
  { name: "Drew Cano", avatar: "/drew-cano.jpg", status: "away" },
  { name: "Orlando Diggs", avatar: "/orlando-diggs.jpg", status: "online" },
  { name: "Andi Lane", avatar: "/andi-lane.jpg", status: "offline" },
  { name: "Kate Morrison", avatar: "/kate-morrison.jpg", status: "online" },
  { name: "Koray Okumus", avatar: "/koray-okumus.jpg", status: "away" },
]

export function EcommerceDashboard() {
  return (
    <div className="space-y-6">
      {/* Page title */}
      <FadeIn>
        <h1 className="text-2xl font-semibold text-foreground">eCommerce</h1>
      </FadeIn>

      {/* Metrics cards */}
      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <StaggerItem key={metric.title}>
            <ScaleOnHover>
              <Card className={cn("transition-all duration-300 hover:shadow-lg cursor-pointer", metric.color)}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl font-bold mt-1">{metric.value}</p>
                    </div>
                    <div
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full transition-all duration-200",
                        metric.trend === "up"
                          ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-950"
                          : "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-950",
                      )}
                    >
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScaleOnHover>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Projections vs Actuals Chart */}
          <SlideIn direction="left" delay={0.2}>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Projections vs Actuals</CardTitle>
              </CardHeader>
              <CardContent>
                <AdvancedBarChart data={projectionsData} />
              </CardContent>
            </Card>
          </SlideIn>

          {/* Revenue Chart */}
          <SlideIn direction="left" delay={0.4}>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Revenue</CardTitle>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-chart-1 rounded-full" />
                    <span className="text-muted-foreground">Current Week</span>
                    <span className="font-semibold">$58,211</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">Previous Week</span>
                    <span className="font-semibold">$68,768</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <AdvancedLineChart data={revenueData} />
              </CardContent>
            </Card>
          </SlideIn>
        </div>

        {/* Right column - Revenue by Location */}
        <div>
          <SlideIn direction="right" delay={0.3}>
            <Card className="h-fit transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Revenue by Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* World map with location markers */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg overflow-hidden">
                    {/* Simplified world map background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                        <path
                          d="M50 80 Q100 60 150 80 T250 90 Q300 85 350 95 L350 120 Q300 110 250 115 T150 105 Q100 110 50 105 Z"
                          fill="currentColor"
                          className="text-blue-600"
                        />
                        <path
                          d="M80 130 Q120 120 160 130 T240 140 L240 160 Q200 150 160 155 Q120 160 80 155 Z"
                          fill="currentColor"
                          className="text-blue-600"
                        />
                      </svg>
                    </div>

                    {/* Location markers */}
                    {[
                      { city: "New York", amount: "72K", x: 280, y: 120 },
                      { city: "San Francisco", amount: "39K", x: 50, y: 140 },
                      { city: "Sydney", amount: "25K", x: 350, y: 200 },
                      { city: "Singapore", amount: "61K", x: 320, y: 160 },
                    ].map((location) => (
                      <div
                        key={location.city}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        style={{
                          left: `${(location.x / 400) * 100}%`,
                          top: `${(location.y / 200) * 100}%`,
                        }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-200" />
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                            {location.city}: {location.amount}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location data */}
                  <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                    {[
                      { city: "New York", amount: "72K" },
                      { city: "San Francisco", amount: "39K" },
                      { city: "Sydney", amount: "25K" },
                      { city: "Singapore", amount: "61K" },
                    ].map((location) => (
                      <StaggerItem key={location.city}>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer group">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-sm font-medium">{location.city}</span>
                          </div>
                          <span className="font-semibold">{location.amount}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </CardContent>
            </Card>
          </SlideIn>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Top Selling Products */}
        <FadeIn delay={0.6}>
          <Card className="lg:col-span-2 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground pb-2 border-b">
                  <span>Name</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Amount</span>
                </div>
                <StaggerContainer staggerDelay={0.05}>
                  {topProducts.map((product, i) => (
                    <StaggerItem key={i}>
                      <div className="grid grid-cols-4 gap-4 text-sm py-2 hover:bg-muted/50 rounded-lg transition-all duration-200 cursor-pointer group">
                        <div className="font-medium truncate group-hover:text-primary transition-colors duration-200">
                          {product.name}
                        </div>
                        <div className="text-muted-foreground">{product.price}</div>
                        <div>{product.quantity}</div>
                        <div className="font-semibold">{product.amount}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Total Sales */}
        <FadeIn delay={0.7}>
          <ScaleOnHover>
            <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <AdvancedDonutChart data={salesData} className="h-64" />
              </CardContent>
            </Card>
          </ScaleOnHover>
        </FadeIn>

        {/* Growth Trend */}
        <FadeIn delay={0.8}>
          <ScaleOnHover>
            <Card className="transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Growth Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <AreaChart data={growthData} color="hsl(var(--chart-3))" />
              </CardContent>
            </Card>
          </ScaleOnHover>
        </FadeIn>
      </div>

      {/* Activities & Contacts section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Activities */}
        <SlideIn direction="up" delay={0.9}>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {activities.map((activity, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer group">
                      <div
                        className={cn(
                          "p-1 rounded-full transition-transform duration-200 group-hover:scale-110",
                          activity.color,
                        )}
                      >
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                          {activity.type === "bug" && "🐛"}
                          {activity.type === "release" && "🚀"}
                          {activity.type === "edit" && "✏️"}
                          {activity.type === "delete" && "🗑️"}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
                          {activity.user}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </SlideIn>

        {/* Contacts */}
        <SlideIn direction="up" delay={1.0}>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                {contacts.map((contact) => (
                  <StaggerItem key={contact.name}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer group">
                      <div className="relative">
                        <Avatar className="h-8 w-8 transition-transform duration-200 group-hover:scale-110">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {contact.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={cn(
                            "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background transition-all duration-200",
                            contact.status === "online" && "bg-green-500 group-hover:animate-pulse",
                            contact.status === "away" && "bg-yellow-500",
                            contact.status === "offline" && "bg-gray-400",
                          )}
                        />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
                        {contact.name}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </SlideIn>
      </div>
    </div>
  )
}
