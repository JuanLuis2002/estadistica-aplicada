"use client"

import { useMobile } from "@/hooks/use-mobile"
import type { ReactNode } from "react"

interface ResponsiveChartWrapperProps {
  children: ReactNode
  title: string
  mobileHeight?: string
  desktopHeight?: string
}

export function ResponsiveChartWrapper({
  children,
  title,
  mobileHeight = "h-64",
  desktopHeight = "h-80",
}: ResponsiveChartWrapperProps) {
  const { isMobile } = useMobile()

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
      <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
        <span className="text-sm md:text-base">{title}</span>
      </h3>
      <div className={`${isMobile ? mobileHeight : desktopHeight} w-full`}>{children}</div>
    </div>
  )
}
