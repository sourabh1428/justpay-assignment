"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { cn } from "@/lib/utils"

interface AdvancedBarChartProps {
  data: Array<{
    name: string
    actual: number
    projected: number
  }>
  className?: string
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
        <p className="font-medium text-foreground mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-sm text-muted-foreground">
              {entry.dataKey === "actual" ? "Actual" : "Projected"}: 
              <span className="font-semibold text-foreground ml-1">{entry.value}M</span>
            </p>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function AdvancedBarChart({ data, className }: AdvancedBarChartProps) {
  return (
    <div className={cn("w-full h-64", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
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
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickFormatter={(value) => `${value}M`}
            domain={[10, 40]}
            ticks={[10, 20, 30, 40]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm text-muted-foreground transition-colors duration-300">
                {value === "actual" ? "Actual" : "Projected"}
              </span>
            )}
          />
          <Bar
            dataKey="projected"
            fill="#93c5fd"
            radius={[4, 4, 0, 0]}
            className="transition-all duration-300 hover:opacity-80"
          />
          <Bar
            dataKey="actual"
            fill="#dbeafe"
            radius={[4, 4, 0, 0]}
            className="transition-all duration-300 hover:opacity-80"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
