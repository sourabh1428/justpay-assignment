"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { cn } from "@/lib/utils"

interface AdvancedDonutChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
  className?: string
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="flex items-center gap-2 mb-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: data.color }}
          />
          <p className="font-medium text-foreground">{data.name}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          Value: <span className="font-semibold text-foreground">${data.value.toFixed(2)}</span>
        </p>
      </div>
    )
  }
  return null
}

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  if (percent < 0.05) return null // Don't show labels for small slices

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function AdvancedDonutChart({ data, className }: AdvancedDonutChartProps) {
  const total = data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <div className={cn("w-full h-80", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => {
                  if (entry.name === "Affiliate") {
                    return (
                      <text
                        x={entry.cx}
                        y={entry.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-medium fill-white"
                      >
                        38.6%
                      </text>
                    )
                  }
                  return null
                }}
                outerRadius={90}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                className="transition-all duration-300"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                ))}
              </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry: any) => (
              <span className="text-sm text-muted-foreground flex items-center gap-2 transition-colors duration-300">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                {value}
              </span>
            )}
          />
              {/* Center text */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-lg font-bold fill-foreground transition-colors duration-300"
              >
                {Math.round((data.find(item => item.name === "Affiliate")?.value / total) * 100) || 0}%
              </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
