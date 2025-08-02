"use client"

import dynamic from "next/dynamic"
import { ChartLoading } from "./chart-loading"

// Componentes de carga específicos por tipo
const BarChartLoading = () => <ChartLoading title="Cargando gráfico de barras..." type="bar" />
const PieChartLoading = () => <ChartLoading title="Cargando gráfico circular..." type="pie" />
const LineChartLoading = () => <ChartLoading title="Cargando gráfico de líneas..." type="line" />

// Wrapper para opciones responsivas mejorado
export const createResponsiveOptions = (baseOptions: any, isMobile: boolean) => {
  return {
    ...baseOptions,
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: isMobile ? 1.5 : 2, // Mejor calidad en móvil
    plugins: {
      ...baseOptions.plugins,
      legend: {
        ...baseOptions.plugins?.legend,
        position: isMobile ? "bottom" : baseOptions.plugins?.legend?.position || "top",
        align: "center",
        labels: {
          ...baseOptions.plugins?.legend?.labels,
          font: {
            size: isMobile ? 10 : 14,
            weight: "bold",
          },
          padding: isMobile ? 8 : 20,
          boxWidth: isMobile ? 12 : 20,
          boxHeight: isMobile ? 12 : 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        ...baseOptions.plugins?.title,
        display: baseOptions.plugins?.title?.display && !isMobile, // Ocultar títulos en móvil
        font: {
          size: isMobile ? 12 : 16,
          weight: "bold",
        },
        padding: isMobile ? 8 : 20,
      },
      tooltip: {
        ...baseOptions.plugins?.tooltip,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#3b82f6",
        borderWidth: 1,
        cornerRadius: 8,
        titleFont: {
          size: isMobile ? 11 : 13,
          weight: "bold",
        },
        bodyFont: {
          size: isMobile ? 10 : 12,
        },
        padding: isMobile ? 8 : 12,
        displayColors: true,
        boxWidth: isMobile ? 8 : 12,
        boxHeight: isMobile ? 8 : 12,
        caretSize: isMobile ? 4 : 6,
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
              padding: isMobile ? 4 : 8,
              maxTicksLimit: isMobile ? 5 : 8, // Menos ticks en móvil
            },
            grid: {
              ...baseOptions.scales.y?.grid,
              lineWidth: isMobile ? 0.5 : 1,
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
              padding: isMobile ? 4 : 8,
              maxTicksLimit: isMobile ? 6 : 10, // Menos ticks en móvil
            },
            grid: {
              ...baseOptions.scales.x?.grid,
              lineWidth: isMobile ? 0.5 : 1,
            },
          },
        }
      : undefined,
    animation: {
      ...baseOptions.animation,
      duration: isMobile ? 800 : 1200, // Animaciones más rápidas en móvil
    },
  }
}

// Importaciones dinámicas optimizadas
export const DynamicBar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
  loading: BarChartLoading,
})

export const DynamicPie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
  loading: PieChartLoading,
})

export const DynamicLine = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
  loading: LineChartLoading,
})
