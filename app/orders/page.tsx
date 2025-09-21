import { DashboardLayout } from '@/components/dashboard-layout'
import { OrderList } from "@/components/order-list"

export default function OrdersPage() {
  return (
    <DashboardLayout currentPage="Order List">
      <OrderList />
    </DashboardLayout>
  )
}
