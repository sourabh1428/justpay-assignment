"use client"

import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"

interface AreaChartProps {
  data: Array<{
    name: string
    value: number
  }>
  className?: string
  color?: string
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
        <p className="font-medium text-foreground mb-2">{label}</p>
        <div className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: payload[0].color }}
          />
          <p className="text-sm text-muted-foreground">
            Value: <span className="font-semibold text-foreground">{payload[0].value}</span>
          </p>
        </div>
      </div>
    )
  }
  return null
}

export const AreaChart = ({ data, className, color = "hsl(var(--chart-1))" }: AreaChartProps) => {
  return (
    <div className={cn("w-full h-64", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="hsl(var(--muted-foreground))" 
            className="opacity-20" 
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            className="transition-colors duration-300"
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            className="transition-colors duration-300"
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorGradient)"
            className="transition-all duration-300"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart
