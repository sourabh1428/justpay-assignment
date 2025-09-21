"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Filter, ArrowUpDown, MoreHorizontal, Calendar, MapPin, Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface Order {
  id: string
  user: {
    name: string
    avatar: string
  }
  project: string
  address: string
  date: string
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"
}

const orders: Order[] = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/natali-craig.jpg" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/kate-morrison.jpg" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/drew-cano.jpg" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/orlando-diggs.jpg" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/andi-lane.jpg" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: { name: "Sarah Johnson", avatar: "/placeholder-user.jpg" },
    project: "E-commerce Platform",
    address: "Broadway New York",
    date: "2 hours ago",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: { name: "Michael Chen", avatar: "/placeholder-user.jpg" },
    project: "Mobile App",
    address: "Sunset Boulevard LA",
    date: "3 hours ago",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: { name: "Emily Rodriguez", avatar: "/placeholder-user.jpg" },
    project: "Analytics Dashboard",
    address: "Michigan Avenue Chicago",
    date: "4 hours ago",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: { name: "David Thompson", avatar: "/placeholder-user.jpg" },
    project: "Payment Gateway",
    address: "Canal Street Boston",
    date: "5 hours ago",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: { name: "Lisa Wang", avatar: "/placeholder-user.jpg" },
    project: "User Management",
    address: "Market Street San Francisco",
    date: "6 hours ago",
    status: "Rejected",
  },
  {
    id: "#CM9811",
    user: { name: "James Wilson", avatar: "/placeholder-user.jpg" },
    project: "Inventory System",
    address: "Peachtree Street Atlanta",
    date: "7 hours ago",
    status: "In Progress",
  },
  {
    id: "#CM9812",
    user: { name: "Maria Garcia", avatar: "/placeholder-user.jpg" },
    project: "Booking Platform",
    address: "Ocean Drive Miami",
    date: "8 hours ago",
    status: "Complete",
  },
  {
    id: "#CM9813",
    user: { name: "Robert Brown", avatar: "/placeholder-user.jpg" },
    project: "Social Media App",
    address: "Fifth Avenue New York",
    date: "9 hours ago",
    status: "Pending",
  },
  {
    id: "#CM9814",
    user: { name: "Jennifer Davis", avatar: "/placeholder-user.jpg" },
    project: "Learning Management",
    address: "Rodeo Drive Beverly Hills",
    date: "10 hours ago",
    status: "Approved",
  },
  {
    id: "#CM9815",
    user: { name: "Christopher Lee", avatar: "/placeholder-user.jpg" },
    project: "Healthcare Portal",
    address: "Main Street Austin",
    date: "11 hours ago",
    status: "Rejected",
  },
  {
    id: "#CM9816",
    user: { name: "Amanda Taylor", avatar: "/placeholder-user.jpg" },
    project: "Real Estate Platform",
    address: "Bourbon Street New Orleans",
    date: "12 hours ago",
    status: "In Progress",
  },
  {
    id: "#CM9817",
    user: { name: "Kevin Martinez", avatar: "/placeholder-user.jpg" },
    project: "Food Delivery App",
    address: "Las Vegas Boulevard",
    date: "13 hours ago",
    status: "Complete",
  },
  {
    id: "#CM9818",
    user: { name: "Rachel Anderson", avatar: "/placeholder-user.jpg" },
    project: "Fitness Tracker",
    address: "Pike Place Seattle",
    date: "14 hours ago",
    status: "Pending",
  },
  {
    id: "#CM9819",
    user: { name: "Daniel White", avatar: "/placeholder-user.jpg" },
    project: "Banking App",
    address: "Beale Street Memphis",
    date: "15 hours ago",
    status: "Approved",
  },
  {
    id: "#CM9820",
    user: { name: "Michelle Jackson", avatar: "/placeholder-user.jpg" },
    project: "Travel Booking",
    address: "Broadway Nashville",
    date: "16 hours ago",
    status: "Rejected",
  },
  {
    id: "#CM9821",
    user: { name: "Ryan Harris", avatar: "/placeholder-user.jpg" },
    project: "Video Streaming",
    address: "Sixth Street Austin",
    date: "17 hours ago",
    status: "In Progress",
  },
  {
    id: "#CM9822",
    user: { name: "Stephanie Clark", avatar: "/placeholder-user.jpg" },
    project: "Event Management",
    address: "Capitol Hill Denver",
    date: "18 hours ago",
    status: "Complete",
  },
  {
    id: "#CM9823",
    user: { name: "Brandon Lewis", avatar: "/placeholder-user.jpg" },
    project: "Project Management",
    address: "Fremont Street Las Vegas",
    date: "19 hours ago",
    status: "Pending",
  },
  {
    id: "#CM9824",
    user: { name: "Nicole Walker", avatar: "/placeholder-user.jpg" },
    project: "Customer Support",
    address: "Rush Street Chicago",
    date: "20 hours ago",
    status: "Approved",
  },
  {
    id: "#CM9825",
    user: { name: "Tyler Hall", avatar: "/placeholder-user.jpg" },
    project: "Content Management",
    address: "Geary Street San Francisco",
    date: "21 hours ago",
    status: "Rejected",
  },
  {
    id: "#CM9826",
    user: { name: "Samantha Allen", avatar: "/placeholder-user.jpg" },
    project: "Email Marketing",
    address: "Peachtree Road Atlanta",
    date: "22 hours ago",
    status: "In Progress",
  },
  {
    id: "#CM9827",
    user: { name: "Matthew Young", avatar: "/placeholder-user.jpg" },
    project: "Data Analytics",
    address: "Collins Avenue Miami",
    date: "23 hours ago",
    status: "Complete",
  },
  {
    id: "#CM9828",
    user: { name: "Ashley King", avatar: "/placeholder-user.jpg" },
    project: "Survey Platform",
    address: "Times Square New York",
    date: "1 day ago",
    status: "Pending",
  },
  {
    id: "#CM9829",
    user: { name: "Joshua Wright", avatar: "/placeholder-user.jpg" },
    project: "Chat Application",
    address: "Hollywood Boulevard",
    date: "2 days ago",
    status: "Approved",
  },
  {
    id: "#CM9830",
    user: { name: "Brittany Lopez", avatar: "/placeholder-user.jpg" },
    project: "Document Management",
    address: "South Beach Miami",
    date: "3 days ago",
    status: "Rejected",
  },
  {
    id: "#CM9831",
    user: { name: "Andrew Hill", avatar: "/placeholder-user.jpg" },
    project: "Task Scheduler",
    address: "Union Square San Francisco",
    date: "4 days ago",
    status: "In Progress",
  },
  {
    id: "#CM9832",
    user: { name: "Jessica Scott", avatar: "/placeholder-user.jpg" },
    project: "Weather App",
    address: "Millennium Park Chicago",
    date: "5 days ago",
    status: "Complete",
  },
  {
    id: "#CM9833",
    user: { name: "Nathan Green", avatar: "/placeholder-user.jpg" },
    project: "News Aggregator",
    address: "Central Park New York",
    date: "6 days ago",
    status: "Pending",
  },
  {
    id: "#CM9834",
    user: { name: "Lauren Adams", avatar: "/placeholder-user.jpg" },
    project: "Photo Gallery",
    address: "Griffith Observatory LA",
    date: "7 days ago",
    status: "Approved",
  },
  {
    id: "#CM9835",
    user: { name: "Zachary Baker", avatar: "/placeholder-user.jpg" },
    project: "Music Streaming",
    address: "Space Needle Seattle",
    date: "8 days ago",
    status: "Rejected",
  },
  {
    id: "#CM9836",
    user: { name: "Megan Gonzalez", avatar: "/placeholder-user.jpg" },
    project: "Recipe App",
    address: "French Quarter New Orleans",
    date: "9 days ago",
    status: "In Progress",
  },
  {
    id: "#CM9837",
    user: { name: "Caleb Nelson", avatar: "/placeholder-user.jpg" },
    project: "Stock Tracker",
    address: "Wall Street New York",
    date: "10 days ago",
    status: "Complete",
  },
  {
    id: "#CM9838",
    user: { name: "Kayla Carter", avatar: "/placeholder-user.jpg" },
    project: "Job Board",
    address: "Silicon Valley San Jose",
    date: "11 days ago",
    status: "Pending",
  },
  {
    id: "#CM9839",
    user: { name: "Ethan Mitchell", avatar: "/placeholder-user.jpg" },
    project: "Car Rental",
    address: "Strip Las Vegas",
    date: "12 days ago",
    status: "Approved",
  },
  {
    id: "#CM9840",
    user: { name: "Hannah Perez", avatar: "/placeholder-user.jpg" },
    project: "Pet Care App",
    address: "Golden Gate Park SF",
    date: "13 days ago",
    status: "Rejected",
  },
  {
    id: "#CM9841",
    user: { name: "Jacob Roberts", avatar: "/placeholder-user.jpg" },
    project: "Home Automation",
    address: "Beverly Hills CA",
    date: "14 days ago",
    status: "In Progress",
  },
  {
    id: "#CM9842",
    user: { name: "Olivia Turner", avatar: "/placeholder-user.jpg" },
    project: "Language Learning",
    address: "Harvard Square Boston",
    date: "15 days ago",
    status: "Complete",
  },
  {
    id: "#CM9843",
    user: { name: "Noah Phillips", avatar: "/placeholder-user.jpg" },
    project: "Cryptocurrency Tracker",
    address: "Financial District NYC",
    date: "16 days ago",
    status: "Pending",
  },
  {
    id: "#CM9844",
    user: { name: "Sophia Campbell", avatar: "/placeholder-user.jpg" },
    project: "Dating App",
    address: "Venice Beach LA",
    date: "17 days ago",
    status: "Approved",
  },
  {
    id: "#CM9845",
    user: { name: "Liam Parker", avatar: "/placeholder-user.jpg" },
    project: "Gaming Platform",
    address: "Gaming District Seattle",
    date: "18 days ago",
    status: "Rejected",
  },
  {
    id: "#CM9846",
    user: { name: "Emma Evans", avatar: "/placeholder-user.jpg" },
    project: "Fashion E-commerce",
    address: "Rodeo Drive Beverly Hills",
    date: "19 days ago",
    status: "In Progress",
  },
  {
    id: "#CM9847",
    user: { name: "Mason Edwards", avatar: "/placeholder-user.jpg" },
    project: "Sports Betting",
    address: "Sports Complex Boston",
    date: "20 days ago",
    status: "Complete",
  },
  {
    id: "#CM9848",
    user: { name: "Ava Collins", avatar: "/placeholder-user.jpg" },
    project: "Meditation App",
    address: "Yoga District Portland",
    date: "21 days ago",
    status: "Pending",
  },
  {
    id: "#CM9849",
    user: { name: "William Stewart", avatar: "/placeholder-user.jpg" },
    project: "Investment Tracker",
    address: "Financial Center Chicago",
    date: "22 days ago",
    status: "Approved",
  },
  {
    id: "#CM9850",
    user: { name: "Isabella Sanchez", avatar: "/placeholder-user.jpg" },
    project: "Art Gallery Platform",
    address: "Museum District NYC",
    date: "23 days ago",
    status: "Rejected",
  },
  {
    id: "#CM9851",
    user: { name: "Benjamin Morris", avatar: "/placeholder-user.jpg" },
    project: "Freelance Marketplace",
    address: "Startup Hub Austin",
    date: "24 days ago",
    status: "In Progress",
  },
  {
    id: "#CM9852",
    user: { name: "Mia Rogers", avatar: "/placeholder-user.jpg" },
    project: "Volunteer Platform",
    address: "Community Center Denver",
    date: "25 days ago",
    status: "Complete",
  },
  {
    id: "#CM9853",
    user: { name: "Lucas Reed", avatar: "/placeholder-user.jpg" },
    project: "Property Management",
    address: "Real Estate District Miami",
    date: "26 days ago",
    status: "Pending",
  },
  {
    id: "#CM9854",
    user: { name: "Charlotte Cook", avatar: "/placeholder-user.jpg" },
    project: "Meal Planning App",
    address: "Food District San Francisco",
    date: "27 days ago",
    status: "Approved",
  }
]

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
    case "Complete":
      return "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300"
    case "Pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
    case "Approved":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
    case "Rejected":
      return "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-300"
  }
}

export function OrderList() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<string>("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const itemsPerPage = 10

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentOrders = filteredOrders.slice(startIndex, endIndex)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedOrders(currentOrders.map((order) => order.id))
    } else {
      setSelectedOrders([])
    }
  }

  const handleSelectOrder = (orderId: string, checked: boolean) => {
    if (checked) {
      setSelectedOrders([...selectedOrders, orderId])
    } else {
      setSelectedOrders(selectedOrders.filter((id) => id !== orderId))
    }
  }

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const handlePageChange = async (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return

    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 500))

    setCurrentPage(page)
    setIsLoading(false)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1) // Reset to first page when searching
  }

  return (
    <div className="w-full max-w-full p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden">
      {/* Page header */}
        <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">Order List</h1>
        </div>

      {/* Orders table */}
      <Card className="w-full shadow-sm border bg-card">
        <CardHeader className="pb-4 sm:pb-6 border-b">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap w-full sm:w-auto">
              <Button size="sm" className="gap-2 text-xs sm:text-sm">
                    <Plus className="h-4 w-4" />
                    Add Order
                  </Button>
              <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
              <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort
                  </Button>
              </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="h-9 w-full pl-9 pr-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
          {/* Mobile card view - visible on mobile only */}
          <div className="block sm:hidden">
            <div className="space-y-3 p-4">
              {isLoading
                ? [...Array(itemsPerPage)].map((_, i) => (
                    <div key={`loading-mobile-${i}`} className="p-4 border rounded-lg animate-pulse">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-4 w-20 bg-muted rounded"></div>
                        <div className="h-6 w-16 bg-muted rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 bg-muted rounded-full"></div>
                        <div className="h-4 w-24 bg-muted rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-28 bg-muted rounded"></div>
                        <div className="h-3 w-32 bg-muted rounded"></div>
                        <div className="h-3 w-20 bg-muted rounded"></div>
                      </div>
                    </div>
                  ))
                : currentOrders.map((order, index) => (
                    <div key={`${order.id}-mobile-${index}`} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                      <Checkbox
                            checked={selectedOrders.includes(order.id)}
                            onCheckedChange={(checked) => handleSelectOrder(order.id, checked as boolean)}
                          />
                          <span className="font-medium text-sm">{order.id}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={cn(
                            "text-xs px-2 py-1 font-medium",
                            getStatusColor(order.status),
                          )}
                        >
                          <div className="flex items-center gap-1">
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                order.status === "In Progress" && "bg-blue-500",
                                order.status === "Complete" && "bg-green-500",
                                order.status === "Pending" && "bg-yellow-500",
                                order.status === "Approved" && "bg-emerald-500",
                                order.status === "Rejected" && "bg-red-500",
                              )}
                            />
                            {order.status}
                          </div>
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={order.user.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs font-medium">
                            {order.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">{order.user.name}</span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Project:</span>
                          <span className="font-medium">{order.project}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-3 w-3 flex-shrink-0" />
                          <span className="text-xs truncate">{order.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          <span className="text-xs">{order.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                              className="h-8 w-8 p-0"
                      >
                              <MoreHorizontal className="h-4 w-4" />
                      </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Order</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Desktop table view - visible on desktop only */}
          <div className="hidden sm:block w-full overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left px-4 py-4 w-12">
                    <Checkbox
                      checked={selectedOrders.length === currentOrders.length && currentOrders.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="text-left px-4 py-4 font-medium text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                    <div className="flex items-center gap-2" onClick={() => handleSort("id")}>
                      <span>Order ID</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                    </th>
                  <th className="text-left px-4 py-4 font-medium text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                    <div className="flex items-center gap-2" onClick={() => handleSort("user")}>
                      <span>User</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                    </th>
                  <th className="text-left px-4 py-4 font-medium text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                    <div className="flex items-center gap-2" onClick={() => handleSort("project")}>
                      <span>Project</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                    </th>
                  <th className="text-left px-4 py-4 font-medium text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                    <div className="flex items-center gap-2" onClick={() => handleSort("address")}>
                      <span>Address</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                    </th>
                  <th className="text-left px-4 py-4 font-medium text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                    <div className="flex items-center gap-2" onClick={() => handleSort("date")}>
                      <span>Date</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                    </th>
                  <th className="text-left px-4 py-4 font-medium text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                    <div className="flex items-center gap-2" onClick={() => handleSort("status")}>
                      <span>Status</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                    </th>
                  <th className="text-center px-4 py-4 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                {isLoading
                  ? // Loading state
                    [...Array(itemsPerPage)].map((_, i) => (
                      <tr key={`loading-${i}`} className="border-b">
                        <td className="px-4 py-4">
                          <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
                            <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="h-4 w-28 bg-muted rounded animate-pulse"></div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="h-4 w-32 bg-muted rounded animate-pulse"></div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="h-6 w-24 bg-muted rounded-full animate-pulse"></div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="h-6 w-6 bg-muted rounded animate-pulse mx-auto"></div>
                        </td>
                      </tr>
                    ))
                  : currentOrders.map((order, index) => (
                      <tr key={`${order.id}-${index}`} className="border-b hover:bg-muted/50 group">
                        <td className="px-4 py-4">
                            <Checkbox
                              checked={selectedOrders.includes(order.id)}
                              onCheckedChange={(checked) => handleSelectOrder(order.id, checked as boolean)}
                            />
                          </td>
                        <td className="px-4 py-4">
                          <span className="font-medium text-foreground text-sm">
                              {order.id}
                            </span>
                          </td>
                        <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={order.user.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs font-medium">
                                  {order.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            <span className="font-medium text-foreground text-sm">
                                {order.user.name}
                              </span>
                            </div>
                          </td>
                        <td className="px-4 py-4">
                          <span className="text-foreground text-sm">
                              {order.project}
                            </span>
                          </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
                            <span className="text-sm">{order.address}</span>
                            </div>
                          </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-3 w-3 flex-shrink-0" />
                            <span className="text-sm">{order.date}</span>
                            </div>
                          </td>
                        <td className="px-4 py-4">
                            <Badge
                              variant="secondary"
                              className={cn(
                              "text-xs px-3 py-1 font-medium",
                                getStatusColor(order.status),
                              )}
                            >
                            <div className="flex items-center gap-2">
                                <div
                                  className={cn(
                                    "w-2 h-2 rounded-full",
                                  order.status === "In Progress" && "bg-blue-500",
                                    order.status === "Complete" && "bg-green-500",
                                  order.status === "Pending" && "bg-yellow-500",
                                    order.status === "Approved" && "bg-emerald-500",
                                    order.status === "Rejected" && "bg-red-500",
                                  )}
                                />
                                {order.status}
                              </div>
                            </Badge>
                          </td>
                        <td className="px-4 py-4 text-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuItem>
                                  View Details
                                </DropdownMenuItem>
                              <DropdownMenuItem>
                                  Edit Order
                                </DropdownMenuItem>
                              <DropdownMenuItem>
                                  Duplicate
                                </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-t gap-4">
            <div className="text-xs sm:text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{startIndex + 1}</span> to{" "}
              <span className="font-medium text-foreground">{Math.min(endIndex, filteredOrders.length)}</span> of{" "}
              <span className="font-medium text-foreground">{filteredOrders.length}</span> entries
              </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || isLoading}
                className="text-xs sm:text-sm"
                  >
                    Previous
                  </Button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let page;
                if (totalPages <= 5) {
                  page = i + 1;
                } else if (currentPage <= 3) {
                  page = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  page = totalPages - 4 + i;
                } else {
                  page = currentPage - 2 + i;
                }
                return (
                    <Button
                    key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                    onClick={() => handlePageChange(page)}
                    disabled={isLoading}
                    className={cn(
                      "w-8 h-8 p-0 text-xs sm:text-sm",
                      currentPage === page && "bg-primary text-primary-foreground",
                    )}
                    >
                      {page}
                    </Button>
                );
              })}
                  <Button
                    variant="outline"
                    size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || isLoading}
                className="text-xs sm:text-sm"
                  >
                    Next
                  </Button>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}
