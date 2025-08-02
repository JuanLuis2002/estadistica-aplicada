"use client"

import { useRef, useMemo } from "react"
import { useMobile } from "@/hooks/use-mobile"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
  type ChartData,
} from "chart.js"
import { Bar, Pie, Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

interface ResponsiveChartProps {
  type: "bar" | "pie" | "line"
  data: ChartData<any>
  options?: ChartOptions<any>
  title?: string
}

export function ResponsiveChart({ type, data, options = {}, title }: ResponsiveChartProps) {
  const { isMobile, screenWidth } = useMobile()
  const chartRef = useRef<any>(null)

  // Memoizar las opciones para evitar recrearlas en cada render
  const chartOptions = useMemo((): ChartOptions<any> => {
    const baseOptions: ChartOptions<any> = {
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: isMobile ? 1.5 : 2,
      interaction: {
        intersect: false,
        mode: "index",
      },
      animation: {
        duration: isMobile ? 800 : 1200,
        easing: "easeInOutQuart",
      },
      plugins: {
        legend: {
          position: isMobile ? "bottom" : "top",
          align: "center",
          labels: {
            font: {
              size: isMobile ? 10 : 14,
              weight: "bold",
            },
            color: "#374151",
            padding: isMobile ? 8 : 20,
            boxWidth: isMobile ? 12 : 20,
            boxHeight: isMobile ? 12 : 20,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        title: {
          display: !!title && !isMobile,
          text: title,
          font: {
            size: isMobile ? 12 : 16,
            weight: "bold",
          },
          color: "#1f2937",
          padding: isMobile ? 8 : 20,
        },
        tooltip: {
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
    }

    // Configuraciones específicas por tipo de gráfico
    if (type === "bar") {
      baseOptions.scales = {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
            drawBorder: false,
            lineWidth: isMobile ? 0.5 : 1,
          },
          ticks: {
            color: "#6b7280",
            font: {
              size: isMobile ? 8 : 12,
            },
            padding: isMobile ? 4 : 8,
            maxTicksLimit: isMobile ? 5 : 8,
          },
          title: {
            display: !isMobile,
            text: "Frecuencia",
            color: "#374151",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#6b7280",
            font: {
              size: isMobile ? 8 : 12,
            },
            maxRotation: isMobile ? 45 : 0,
            padding: isMobile ? 4 : 8,
            maxTicksLimit: isMobile ? 6 : 10,
          },
          title: {
            display: !isMobile,
            text: "Categorías",
            color: "#374151",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
      }

      // Para gráficos horizontales
      if (options.indexAxis === "y") {
        baseOptions.scales = {
          x: baseOptions.scales?.y,
          y: {
            ...baseOptions.scales?.x,
            ticks: {
              ...baseOptions.scales?.x?.ticks,
              maxRotation: 0,
            },
          },
        }
      }
    }

    if (type === "line") {
      baseOptions.scales = {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: isMobile ? 0.5 : 1,
          },
          ticks: {
            color: "#6b7280",
            font: {
              size: isMobile ? 8 : 12,
            },
            maxTicksLimit: isMobile ? 5 : 8,
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#6b7280",
            font: {
              size: isMobile ? 8 : 12,
            },
            maxRotation: isMobile ? 45 : 0,
            maxTicksLimit: isMobile ? 6 : 10,
          },
        },
      }
    }

    // Merge con opciones personalizadas
    return {
      ...baseOptions,
      ...options,
      plugins: {
        ...baseOptions.plugins,
        ...options.plugins,
        legend: {
          ...baseOptions.plugins?.legend,
          ...options.plugins?.legend,
        },
        tooltip: {
          ...baseOptions.plugins?.tooltip,
          ...options.plugins?.tooltip,
        },
      },
    }
  }, [isMobile, type, options, title]) // Solo depende de valores estables

  const getChartHeight = () => {
    if (isMobile) {
      return type === "pie" ? "h-64" : "h-56"
    }
    return type === "pie" ? "h-96" : "h-80"
  }

  const ChartComponent = () => {
    switch (type) {
      case "bar":
        return <Bar ref={chartRef} data={data} options={chartOptions} />
      case "pie":
        return <Pie ref={chartRef} data={data} options={chartOptions} />
      case "line":
        return <Line ref={chartRef} data={data} options={chartOptions} />
      default:
        return null
    }
  }

  return (
    <div className={`w-full ${getChartHeight()} relative`}>
      <ChartComponent />
    </div>
  )
}
