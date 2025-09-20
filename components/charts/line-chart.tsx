"use client"

import { cn } from "@/lib/utils"

interface LineChartProps {
  data: Array<{
    label: string
    current: number
    previous: number
  }>
  className?: string
}

export function LineChart({ data, className }: LineChartProps) {
  const maxValue = Math.max(...data.map((d) => Math.max(d.current, d.previous)))
  const minValue = Math.min(...data.map((d) => Math.min(d.current, d.previous)))
  const range = maxValue - minValue

  const getY = (value: number) => {
    return 180 - ((value - minValue) / range) * 160
  }

  const currentPath = data
    .map((point, i) => {
      const x = (i / (data.length - 1)) * 360 + 20
      const y = getY(point.current)
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
    })
    .join(" ")

  const previousPath = data
    .map((point, i) => {
      const x = (i / (data.length - 1)) * 360 + 20
      const y = getY(point.previous)
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
    })
    .join(" ")

  return (
    <div className={cn("w-full h-64", className)}>
      <svg className="w-full h-full" viewBox="0 0 400 200">
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Previous week line (dashed) */}
        <path
          d={previousPath}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          className="text-muted-foreground transition-all duration-300 hover:text-muted-foreground/80"
        />

        {/* Current week line */}
        <path
          d={currentPath}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-primary transition-all duration-300 hover:text-primary/80"
        />

        {/* Data points */}
        {data.map((point, i) => {
          const x = (i / (data.length - 1)) * 360 + 20
          const currentY = getY(point.current)
          const previousY = getY(point.previous)

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={previousY}
                r="3"
                fill="currentColor"
                className="text-muted-foreground transition-all duration-300 hover:r-4"
              />
              <circle
                cx={x}
                cy={currentY}
                r="4"
                fill="currentColor"
                className="text-primary transition-all duration-300 hover:r-5"
              />
            </g>
          )
        })}

        {/* X-axis labels */}
        {data.map((point, i) => {
          const x = (i / (data.length - 1)) * 360 + 20
          return (
            <text key={i} x={x} y="195" textAnchor="middle" className="text-xs fill-muted-foreground">
              {point.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
