import "@/lib/chart-config"
import { DynamicPie as Pie } from "./dynamic-chart"
import type { ChartOptions } from "chart.js"

const options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: window.innerWidth < 768 ? "bottom" : "right",
      labels: {
        font: {
          size: window.innerWidth < 768 ? 10 : 14,
          weight: "bold",
        },
        color: "#374151",
        padding: window.innerWidth < 768 ? 10 : 20,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: true,
      text: "Distribución por Productos",
      font: {
        size: window.innerWidth < 768 ? 14 : 18,
        weight: "bold",
      },
      color: "#1f2937",
      padding: window.innerWidth < 768 ? 10 : 20,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      borderColor: "#3b82f6",
      borderWidth: 1,
      titleFont: {
        size: window.innerWidth < 768 ? 10 : 12,
      },
      bodyFont: {
        size: window.innerWidth < 768 ? 10 : 12,
      },
      callbacks: {
        label: (context) => {
          const label = context.label || ""
          const value = context.parsed
          return `${label}: ${value}% (${(value * 3.6).toFixed(1)}°)`
        },
      },
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 1500,
  },
  interaction: {
    intersect: false,
  },
}

const GraficoSectores = ({ data }) => {
  return (
    <div className="h-64 md:h-96">
      <Pie data={data} options={options} />
    </div>
  )
}

export default GraficoSectores
