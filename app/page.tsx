import { DashboardLayout } from "@/components/dashboard-layout"
import { EcommerceDashboard } from "@/components/ecommerce-dashboard"

export default function HomePage() {
  return (
    <DashboardLayout currentPage="eCommerce">
      <EcommerceDashboard />
    </DashboardLayout>
  )
}
