"use client"

import { useMobile } from "@/hooks/use-mobile"

interface ChartLoadingProps {
  title?: string
  type?: "bar" | "pie" | "line" | "area"
}

export function ChartLoading({ title = "Cargando gráfico...", type = "bar" }: ChartLoadingProps) {
  const { isMobile } = useMobile()

  const getIcon = () => {
    switch (type) {
      case "bar":
        return "📊"
      case "pie":
        return "🥧"
      case "line":
        return "📈"
      case "area":
        return "📉"
      default:
        return "📊"
    }
  }

  const getSkeletonBars = () => {
    if (type === "pie") {
      return (
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-gray-200 border-t-blue-500 animate-spin"></div>
        </div>
      )
    }

    if (type === "line" || type === "area") {
      return (
        <div className="space-y-2">
          <div className="flex items-end justify-between h-32 md:h-48">
            {Array.from({ length: isMobile ? 5 : 8 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-t animate-pulse"
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  width: `${100 / (isMobile ? 5 : 8) - 2}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="flex justify-between">
            {Array.from({ length: isMobile ? 5 : 8 }, (_, i) => (
              <div key={i} className="w-8 h-3 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-2">
        <div className="flex items-end justify-between h-32 md:h-48 gap-1 md:gap-2">
          {Array.from({ length: isMobile ? 4 : 6 }, (_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-blue-200 to-blue-100 rounded-t animate-pulse"
              style={{
                height: `${Math.random() * 80 + 20}%`,
                width: `${100 / (isMobile ? 4 : 6) - 4}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="h-px bg-gray-200"></div>
        <div className="flex justify-between">
          {Array.from({ length: isMobile ? 4 : 6 }, (_, i) => (
            <div key={i} className="w-6 md:w-8 h-2 md:h-3 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${isMobile ? "h-64" : "h-80"} flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-200 p-6`}
    >
      <div className="text-center mb-6">
        <div className={`${isMobile ? "text-3xl" : "text-4xl"} mb-3 animate-bounce`}>{getIcon()}</div>
        <div className={`${isMobile ? "text-sm" : "text-base"} font-medium text-gray-600 mb-2`}>{title}</div>
        <div className="flex items-center justify-center gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>

      <div className="w-full max-w-md">{getSkeletonBars()}</div>
    </div>
  )
}
