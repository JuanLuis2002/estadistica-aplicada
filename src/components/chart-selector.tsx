"use client"
import { useMobile } from "@/hooks/use-mobile"
import { BarChart3, PieChart, TrendingUp, ImageIcon, BarChart2, Activity, LineChart, AreaChart } from "lucide-react"

interface ChartSelectorProps {
  activeChart: string
  onChartChange: (chart: string) => void
}

const chartOptions = [
  { id: "barras", label: "Barras", icon: BarChart3, color: "bg-blue-500" },
  { id: "sectores", label: "Sectores", icon: PieChart, color: "bg-emerald-500" },
  { id: "lineas", label: "Líneas", icon: TrendingUp, color: "bg-orange-500" },
  { id: "pictograma", label: "Pictograma", icon: ImageIcon, color: "bg-purple-500" },
  { id: "histograma", label: "Histograma", icon: BarChart2, color: "bg-indigo-500" },
  { id: "poligono", label: "Polígono", icon: Activity, color: "bg-green-500" },
  { id: "ojivas", label: "Ojivas", icon: LineChart, color: "bg-cyan-500" },
  { id: "faja", label: "Faja", icon: AreaChart, color: "bg-teal-500" },
]

export function ChartSelector({ activeChart, onChartChange }: ChartSelectorProps) {
  const { isMobile } = useMobile()

  if (isMobile) {
    return (
      <div className="mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 border">
          <h3 className="text-sm font-bold text-gray-800 mb-3 text-center">Selecciona un Gráfico</h3>
          <div className="grid grid-cols-2 gap-2">
            {chartOptions.map((option) => {
              const Icon = option.icon
              const isActive = activeChart === option.id

              return (
                <button
                  key={option.id}
                  onClick={() => onChartChange(option.id)}
                  className={`
                    flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? `${option.color} text-white shadow-lg scale-105`
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{option.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Versión desktop
  return (
    <div className="mb-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-2 border">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
          {chartOptions.map((option) => {
            const Icon = option.icon
            const isActive = activeChart === option.id

            return (
              <button
                key={option.id}
                onClick={() => onChartChange(option.id)}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? `${option.color} text-white shadow-lg scale-105`
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
