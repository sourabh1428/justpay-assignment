import { DashboardLayout } from "@/components/dashboard-layout"
import { EcommerceDashboard } from "@/components/ecommerce-dashboard"
import { RightSidebar } from "@/components/right-sidebar"

export default function HomePage() {
  return (
    <DashboardLayout currentPage="eCommerce">
      <div className="flex h-screen bg-background">
        {/* Main Dashboard Content */}
        <div className="flex-1 overflow-auto no-scrollbar">
          <EcommerceDashboard />
        </div>

        {/* Right Sidebar — hidden below md */}
        <div className="hidden md:block">
          <RightSidebar />
        </div>
      </div>
    </DashboardLayout>
  )
}
