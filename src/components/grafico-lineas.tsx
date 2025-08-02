import "@/lib/chart-config"
import { DynamicLine as Line } from "./dynamic-chart"
import type { ChartOptions } from "chart.js"

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: window.innerWidth < 768 ? 10 : 14,
          weight: "bold",
        },
        color: "#374151",
        padding: window.innerWidth < 768 ? 10 : 20,
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: "Evolución de Ventas y Temperatura",
      font: {
        size: window.innerWidth < 768 ? 12 : 18,
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
      mode: "index",
      intersect: false,
      titleFont: {
        size: window.innerWidth < 768 ? 10 : 12,
      },
      bodyFont: {
        size: window.innerWidth < 768 ? 10 : 12,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      ticks: {
        color: "#6b7280",
        font: {
          size: window.innerWidth < 768 ? 8 : 12,
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
          size: window.innerWidth < 768 ? 8 : 12,
        },
      },
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  animation: {
    duration: 1500,
    easing: "easeInOutQuart",
  },
}

const GraficoLineas = ({ data }) => {
  return (
    <div className="h-64 md:h-80">
      <Line data={data} options={options} />
    </div>
  )
}

export default GraficoLineas
