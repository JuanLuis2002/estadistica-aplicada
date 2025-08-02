"use client"

import "@/lib/chart-config"
import { DynamicBar as Bar } from "./dynamic-chart"
import { useMobile } from "@/hooks/use-mobile"
import type { ChartOptions } from "chart.js"

interface DesktopBarChartProps {
  data: any
  options: ChartOptions<"bar">
}

export function DesktopBarChart({ data, options }: DesktopBarChartProps) {
  const { isMobile } = useMobile()

  if (isMobile) return null

  return (
    <div className="h-80">
      <Bar data={data} options={options} />
    </div>
  )
}
