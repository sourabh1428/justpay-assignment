"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { cn } from "@/lib/utils"

interface AdvancedLineChartProps {
  data: Array<{
    name: string
    current: number
    previous: number
  }>
  className?: string
  timeframe?: 'monthly' | 'yearly'
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
            <p className="text-sm text-muted-foreground font-inter text-inter">
              {entry.dataKey === "current" ? "Current Week" : "Previous Week"}: 
              <span className="font-semibold text-foreground ml-1">${entry.value.toLocaleString()}</span>
            </p>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function AdvancedLineChart({ data, className, timeframe = 'monthly' }: AdvancedLineChartProps) {
  console.log("AdvancedLineChart data:", data)
  
  // Determine Y-axis domain and formatting based on timeframe
  const isYearly = timeframe === 'yearly'
  const maxValue = Math.max(...data.flatMap(d => [d.current, d.previous]))
  const domain = isYearly ? [0, Math.ceil(maxValue / 100000) * 100000] : [0, Math.ceil(maxValue / 1000) * 1000]
  const tickFormatter = (value: number) => isYearly ? `$${(value / 1000).toFixed(0)}K` : `$${(value / 1000).toFixed(0)}K`
  
  return (
    <div className={cn("w-full h-80", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#e5e7eb" 
            className="opacity-20" 
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280", fontFamily: "Inter" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280", fontFamily: "Inter" }}
            tickFormatter={tickFormatter}
            domain={domain}
          />
          <Tooltip 
            content={<CustomTooltip />} 
            wrapperStyle={{ fontFamily: "Inter" }}
          />
          <Legend
            wrapperStyle={{ paddingTop: "20px", fontFamily: "Inter" }}
            iconType="line"
            formatter={(value) => (
              <span className="text-sm text-gray-600" style={{ fontFamily: "Inter" }}>
                {value === "current" 
                  ? `Current ${isYearly ? 'Year' : 'Week'}` 
                  : `Previous ${isYearly ? 'Year' : 'Week'}`
                }
              </span>
            )}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#60a5fa"
            strokeWidth={3}
            strokeDasharray="8 4"
            dot={false}
            activeDot={{ r: 6, fill: "#60a5fa", strokeWidth: 3 }}
            connectNulls={false}
            className="drop-shadow-sm"
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#1f2937"
            strokeWidth={4}
            dot={false}
            activeDot={{ r: 7, fill: "#1f2937", strokeWidth: 3 }}
            connectNulls={false}
            className="drop-shadow-md"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
