"use client"

import { cn } from "@/lib/utils"

interface DonutChartProps {
  data: Array<{
    label: string
    value: number
    color: string
  }>
  className?: string
}

export function DonutChart({ data, className }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercentage = 0

  const radius = 45
  const strokeWidth = 12
  const normalizedRadius = radius - strokeWidth * 0.5
  const circumference = normalizedRadius * 2 * Math.PI

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="text-muted/20"
          />

          {/* Data segments */}
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
            const strokeDashoffset = -((cumulativePercentage / 100) * circumference)

            cumulativePercentage += percentage

            return (
              <circle
                key={index}
                stroke={item.color}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="transition-all duration-300 hover:stroke-width-14"
                style={{
                  strokeLinecap: "round",
                }}
              />
            )
          })}
        </svg>

        {/* Center percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{Math.round((data[0]?.value / total) * 100) || 0}%</span>
        </div>
      </div>
    </div>
  )
}
