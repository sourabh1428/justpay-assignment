"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { cn } from "@/lib/utils"

interface ProjectionsLineChartProps {
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
      <div className="bg-background border border-border rounded-lg p-3 shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
        <p className="font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.dataKey === "actual" ? "Actual" : "Projected"}: {entry.value}M
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function ProjectionsLineChart({ data, className }: ProjectionsLineChartProps) {
  console.log("ProjectionsLineChart data:", data)
  
  // Test data to ensure chart works
  const testData = [
    { name: "Jan", actual: 20, projected: 25 },
    { name: "Feb", actual: 25, projected: 30 },
    { name: "Mar", actual: 22, projected: 28 },
    { name: "Apr", actual: 30, projected: 35 },
    { name: "May", actual: 28, projected: 32 },
    { name: "Jun", actual: 35, projected: 38 },
  ]
  
  return (
    <div className={cn("w-full h-80", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={testData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#e5e7eb" 
            className="opacity-30" 
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="line"
            formatter={(value) => (
              <span className="text-sm text-gray-600">
                {value === "actual" ? "Actual" : "Projected"}
              </span>
            )}
          />
          <Line
            type="monotone"
            dataKey="projected"
            stroke="#3b82f6"
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: "#3b82f6", strokeWidth: 2 }}
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#ef4444"
            strokeWidth={4}
            dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: "#ef4444", strokeWidth: 2 }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
