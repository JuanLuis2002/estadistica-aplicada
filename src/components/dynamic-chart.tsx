"use client"

import dynamic from "next/dynamic"
import { useMobile } from "@/hooks/use-mobile"

// Componente de carga responsivo mejorado
const ChartLoading = () => {
  const { isMobile } = useMobile()

  return (
    <div
      className={`${isMobile ? "h-64" : "h-80"} flex items-center justify-center bg-gray-100 rounded-lg animate-pulse`}
    >
      <div className="text-gray-500 text-center">
        <div className={`${isMobile ? "text-xl" : "text-2xl"} mb-2`}>📊</div>
        <div className={`${isMobile ? "text-xs" : "text-sm"}`}>Cargando gráfico...</div>
      </div>
    </div>
  )
}

// Wrapper para opciones responsivas
export const createResponsiveOptions = (baseOptions: any, isMobile: boolean) => {
  return {
    ...baseOptions,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      ...baseOptions.plugins,
      legend: {
        ...baseOptions.plugins?.legend,
        position: isMobile ? "bottom" : baseOptions.plugins?.legend?.position || "top",
        labels: {
          ...baseOptions.plugins?.legend?.labels,
          font: {
            size: isMobile ? 10 : 14,
            weight: "bold",
          },
          padding: isMobile ? 8 : 20,
          boxWidth: isMobile ? 12 : 20,
        },
      },
      title: {
        ...baseOptions.plugins?.title,
        font: {
          size: isMobile ? 12 : 16,
          weight: "bold",
        },
        padding: isMobile ? 8 : 20,
      },
      tooltip: {
        ...baseOptions.plugins?.tooltip,
        titleFont: {
          size: isMobile ? 10 : 12,
        },
        bodyFont: {
          size: isMobile ? 9 : 11,
        },
      },
    },
    scales: baseOptions.scales
      ? {
          ...baseOptions.scales,
          y: {
            ...baseOptions.scales.y,
            ticks: {
              ...baseOptions.scales.y?.ticks,
              font: {
                size: isMobile ? 8 : 12,
              },
            },
          },
          x: {
            ...baseOptions.scales.x,
            ticks: {
              ...baseOptions.scales.x?.ticks,
              font: {
                size: isMobile ? 8 : 12,
              },
              maxRotation: isMobile ? 45 : 0,
            },
          },
        }
      : undefined,
  }
}

// Importaciones dinámicas sin SSR
export const DynamicBar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
  loading: ChartLoading,
})

export const DynamicPie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
  loading: ChartLoading,
})

export const DynamicLine = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
  loading: ChartLoading,
})
