"use client"

import { cn } from "@/lib/utils"

interface BarChartProps {
  data: Array<{
    label: string
    value: number
    projected?: number
  }>
  className?: string
}

export function BarChart({ data, className }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => Math.max(d.value, d.projected || 0)))

  return (
    <div className={cn("w-full h-64", className)}>
      <div className="flex items-end justify-around h-full p-4 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-950/20 rounded-lg">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 max-w-16">
            <div className="relative w-full flex justify-center gap-1">
              {/* Actual value bar */}
              <div
                className="w-4 bg-blue-500 rounded-t transition-all duration-500 ease-out hover:bg-blue-600"
                style={{ height: `${(item.value / maxValue) * 180}px` }}
              />
              {/* Projected value bar */}
              {item.projected && (
                <div
                  className="w-4 bg-blue-300 rounded-t transition-all duration-500 ease-out hover:bg-blue-400"
                  style={{ height: `${(item.projected / maxValue) * 180}px` }}
                />
              )}
            </div>
            <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
