"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, TrendingDown, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectionsLineChart } from "@/components/charts/projections-line-chart"
import { AdvancedLineChart } from "@/components/charts/advanced-line-chart"
import { AdvancedBarChart } from "@/components/charts/advanced-bar-chart"
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
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
  },
]

const projectionsData = [
  { name: "Jan", actual: 25, projected: 20 },
  { name: "Feb", actual: 30, projected: 25 },
  { name: "Mar", actual: 28, projected: 22 },
  { name: "Apr", actual: 35, projected: 30 },
  { name: "May", actual: 32, projected: 28 },
  { name: "Jun", actual: 38, projected: 35 },
]

const monthlyRevenueData = [
  { name: "Jan", current: 16000, previous: 15000 },
  { name: "Feb", current: 18000, previous: 16000 },
  { name: "Mar", current: 17000, previous: 18000 },
  { name: "Apr", current: 20000, previous: 19000 },
  { name: "May", current: 21000, previous: 22000 },
  { name: "Jun", current: 25000, previous: 23000 },
]

const yearlyRevenueData = [
  { name: "2020", current: 180000, previous: 165000 },
  { name: "2021", current: 220000, previous: 200000 },
  { name: "2022", current: 195000, previous: 210000 },
  { name: "2023", current: 250000, previous: 235000 },
  { name: "2024", current: 280000, previous: 260000 },
]

const salesData = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#10b981" },
  { name: "Sponsored", value: 154.02, color: "#8b5cf6" },
  { name: "E-mail", value: 48.96, color: "#3b82f6" },
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


export function EcommerceDashboard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [revenueTimeframe, setRevenueTimeframe] = useState<'monthly' | 'yearly'>('monthly')
  const itemsPerPage = 4

  // Pagination logic
  const totalPages = Math.ceil(topProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = topProducts.slice(startIndex, endIndex)

  const handlePageChange = async (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    
    setIsLoading(true)
    
    // Simulate 1-second loading
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setCurrentPage(page)
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Page title */}
      <FadeIn>
        <h1 className="text-2xl font-semibold text-foreground font-inter">eCommerce</h1>
      </FadeIn>

      {/* Top section - Metrics and Projections */}
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        {/* Metrics cards - 2x2 grid */}
        <div className="lg:col-span-1">
          <div className="grid gap-4 grid-cols-2 h-full">
            {metrics.map((metric, index) => (
              <Card key={metric.title} className="transition-all duration-300  cursor-pointer group h-full bg-white border border-gray-200">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="flex items-center justify-between">
                    <div className="group-hover:scale-105 transition-transform duration-300">
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-inter">{metric.title}</p>
                      <p className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors duration-300 font-inter">{metric.value}</p>
                    </div>
                    <div
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full transition-all duration-300 group-hover:scale-110 font-inter",
                        metric.trend === "up"
                          ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-950 group-hover:bg-green-200 dark:group-hover:bg-green-900"
                          : "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-950 group-hover:bg-red-200 dark:group-hover:bg-red-900",
                      )}
                    >
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 animate-pulse" />
                      ) : (
                        <TrendingDown className="h-3 w-3 animate-pulse" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projections vs Actuals Chart - Right side */}
        <div className="lg:col-span-1">
          <Card className="transition-all duration-300  group h-full bg-white border border-gray-200">
            <CardHeader className="group-hover:bg-muted/30 transition-colors duration-300">
              <CardTitle className="group-hover:text-primary transition-colors duration-300 text-sm font-inter">Projections vs Actuals</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <AdvancedBarChart data={projectionsData} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Middle section - Revenue Chart */}
      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        {/* Revenue Chart - Large Middle Chart */}
        <div className="lg:col-span-2">
          <Card className="transition-all duration-300  group h-full bg-white border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between group-hover:bg-muted/30 transition-colors duration-300">
              <CardTitle className="group-hover:text-primary transition-colors duration-300 font-inter">Revenue</CardTitle>
              
              {/* Timeframe Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setRevenueTimeframe('monthly')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
                      revenueTimeframe === 'monthly'
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setRevenueTimeframe('yearly')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
                      revenueTimeframe === 'yearly'
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Yearly
                  </button>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <span className="text-muted-foreground font-inter">Current {revenueTimeframe === 'monthly' ? 'Week' : 'Year'}</span>
                    <span className="font-semibold group-hover:text-primary transition-colors duration-300 font-inter">
                      {revenueTimeframe === 'monthly' ? '$58,211' : '$2,800K'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-blue-300 rounded-full" />
                    <span className="text-muted-foreground font-inter">Previous {revenueTimeframe === 'monthly' ? 'Week' : 'Year'}</span>
                    <span className="font-semibold group-hover:text-primary transition-colors duration-300 font-inter">
                      {revenueTimeframe === 'monthly' ? '$68,768' : '$2,600K'}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <AdvancedLineChart 
                data={revenueTimeframe === 'monthly' ? monthlyRevenueData : yearlyRevenueData} 
                timeframe={revenueTimeframe}
              />
            </CardContent>
          </Card>
        </div>

        {/* Right column - Revenue by Location */}
        <div className="lg:col-span-1">
          <Card className="h-full transition-all duration-300  bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-sm font-inter">Revenue by Location</CardTitle>
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
                          className="text-blue-600 dark:text-blue-400"
                        />
                        <path
                          d="M80 130 Q120 120 160 130 T240 140 L240 160 Q200 150 160 155 Q120 160 80 155 Z"
                          fill="currentColor"
                          className="text-blue-600 dark:text-blue-400"
                        />
                        <path
                          d="M100 50 Q150 40 200 50 T300 60 Q350 55 380 65 L380 80 Q350 70 300 75 T200 65 Q150 70 100 65 Z"
                          fill="currentColor"
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </svg>
                    </div>

                    {/* Location markers with varying sizes based on revenue */}
                    {[
                      { city: "New York", amount: "72K", x: 280, y: 120, size: 8 },
                      { city: "San Francisco", amount: "39K", x: 50, y: 140, size: 6 },
                      { city: "Sydney", amount: "25K", x: 350, y: 200, size: 5 },
                      { city: "Singapore", amount: "61K", x: 320, y: 160, size: 7 },
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
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse group-hover:scale-125 transition-all duration-300 shadow-lg"
                            style={{ width: `${location.size * 4}px`, height: `${location.size * 4}px` }}
                          />
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border text-foreground text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl">
                            <div className="font-semibold">{location.city}</div>
                            <div className="text-muted-foreground">{location.amount}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location data */}
                  <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                    {[
                      { city: "New York", amount: "72K", percentage: 35, color: "bg-blue-500" },
                      { city: "San Francisco", amount: "39K", percentage: 19, color: "bg-green-500" },
                      { city: "Sydney", amount: "25K", percentage: 12, color: "bg-purple-500" },
                      { city: "Singapore", amount: "61K", percentage: 30, color: "bg-orange-500" },
                    ].map((location) => (
                      <StaggerItem key={location.city}>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${location.color} group-hover:scale-110 transition-transform duration-200`} />
                            <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors duration-200" />
                            <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-200">{location.city}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-16 bg-muted rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full ${location.color} transition-all duration-500 group-hover:opacity-80`}
                                style={{ width: `${location.percentage}%` }}
                              />
                            </div>
                            <span className="font-semibold text-sm group-hover:text-primary transition-colors duration-200">{location.amount}</span>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Selling Products */}
        <Card className="transition-all duration-300  bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="font-inter">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground pb-2 border-b font-inter">
                <span>Name</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Amount</span>
              </div>
              
              {/* Loading State */}
              {isLoading ? (
                <div className="space-y-2 animate-pulse">
                  {[...Array(itemsPerPage)].map((_, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 py-2">
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 transition-all duration-300">
                  {currentProducts.map((product, i) => (
                    <div 
                      key={startIndex + i} 
                      className="grid grid-cols-4 gap-4 text-sm py-2 hover:bg-muted/50 rounded-lg transition-all duration-200 cursor-pointer group animate-in fade-in-0 slide-in-from-left-4"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <div className="font-medium truncate group-hover:text-primary transition-colors duration-200 font-inter">
                        {product.name}
                      </div>
                      <div className="text-muted-foreground font-inter">{product.price}</div>
                      <div className="font-inter">{product.quantity}</div>
                      <div className="font-semibold font-inter">{product.amount}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1 || isLoading}
                  className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &lt;
                </button>
                <span className="text-xs text-muted-foreground px-2">
                  {currentPage}/{totalPages}
                </span>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || isLoading}
                  className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &gt;
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Sales */}
        <Card className="transition-all duration-300  cursor-pointer bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="font-inter">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <AdvancedDonutChart data={salesData} className="h-64" />
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
