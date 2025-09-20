"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Filter, ArrowUpDown, MoreHorizontal, Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { ScaleOnHover } from "@/components/animations/scale-on-hover"

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
  // Duplicate entries to show pagination
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

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedOrders(orders.map((order) => order.id))
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

  return (
    <div className="space-y-6">
      {/* Page header */}
      <FadeIn>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Order List</h1>
        </div>
      </FadeIn>

      {/* Orders table */}
      <SlideIn direction="up" delay={0.2}>
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ScaleOnHover>
                  <Button size="sm" className="gap-2 transition-all duration-200">
                    <Plus className="h-4 w-4" />
                    Add Order
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent transition-all duration-200">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent transition-all duration-200">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort
                  </Button>
                </ScaleOnHover>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="search"
                  placeholder="Search"
                  className="h-9 w-64 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-all duration-200 focus:scale-105"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 w-12">
                      <Checkbox
                        checked={selectedOrders.length === orders.length}
                        onCheckedChange={handleSelectAll}
                        className="transition-all duration-200 hover:scale-110"
                      />
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("id")}
                        className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        Order ID
                        <ArrowUpDown className="ml-2 h-3 w-3" />
                      </Button>
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("user")}
                        className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        User
                        <ArrowUpDown className="ml-2 h-3 w-3" />
                      </Button>
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("project")}
                        className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        Project
                        <ArrowUpDown className="ml-2 h-3 w-3" />
                      </Button>
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("address")}
                        className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        Address
                        <ArrowUpDown className="ml-2 h-3 w-3" />
                      </Button>
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("date")}
                        className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        Date
                        <ArrowUpDown className="ml-2 h-3 w-3" />
                      </Button>
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("status")}
                        className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        Status
                        <ArrowUpDown className="ml-2 h-3 w-3" />
                      </Button>
                    </th>
                    <th className="w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  <StaggerContainer staggerDelay={0.05}>
                    {orders.map((order, index) => (
                      <StaggerItem key={`${order.id}-${index}`}>
                        <tr className="border-b border-border hover:bg-muted/50 transition-all duration-200 group cursor-pointer">
                          <td className="p-4">
                            <Checkbox
                              checked={selectedOrders.includes(order.id)}
                              onCheckedChange={(checked) => handleSelectOrder(order.id, checked as boolean)}
                              className="transition-all duration-200 hover:scale-110"
                            />
                          </td>
                          <td className="p-4">
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                              {order.id}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8 transition-transform duration-200 group-hover:scale-110">
                                <AvatarImage src={order.user.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {order.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                {order.user.name}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                              {order.project}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                              <MapPin className="h-3 w-3" />
                              <span>{order.address}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                              <Calendar className="h-3 w-3" />
                              <span>{order.date}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "transition-all duration-200 hover:scale-105",
                                getStatusColor(order.status),
                              )}
                            >
                              <div className="flex items-center gap-1">
                                <div
                                  className={cn(
                                    "w-2 h-2 rounded-full",
                                    order.status === "In Progress" && "bg-blue-500 animate-pulse",
                                    order.status === "Complete" && "bg-green-500",
                                    order.status === "Pending" && "bg-yellow-500 animate-pulse",
                                    order.status === "Approved" && "bg-emerald-500",
                                    order.status === "Rejected" && "bg-red-500",
                                  )}
                                />
                                {order.status}
                              </div>
                            </Badge>
                          </td>
                          <td className="p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem className="cursor-pointer hover:bg-accent transition-colors duration-200">
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer hover:bg-accent transition-colors duration-200">
                                  Edit Order
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer hover:bg-accent transition-colors duration-200">
                                  Duplicate
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-200">
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * 10 + 1} to {Math.min(currentPage * 10, orders.length)} of {orders.length}{" "}
                entries
              </div>
              <div className="flex items-center gap-2">
                <ScaleOnHover>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="transition-all duration-200"
                  >
                    Previous
                  </Button>
                </ScaleOnHover>
                {[1, 2, 3, 4, 5].map((page) => (
                  <ScaleOnHover key={page}>
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0 transition-all duration-200"
                    >
                      {page}
                    </Button>
                  </ScaleOnHover>
                ))}
                <ScaleOnHover>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === 5}
                    className="transition-all duration-200"
                  >
                    Next
                  </Button>
                </ScaleOnHover>
              </div>
            </div>
          </CardContent>
        </Card>
      </SlideIn>
    </div>
  )
}
