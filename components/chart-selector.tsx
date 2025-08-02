"use client"
import { useMobile } from "@/hooks/use-mobile"
import { BarChart3, PieChart, TrendingUp, ImageIcon, BarChart2, Activity, LineChart, AreaChart } from "lucide-react"

interface ChartSelectorProps {
  activeChart: string
  onChartChange: (chart: string) => void
}

const chartOptions = [
  {
    id: "barras",
    label: "Barras",
    icon: BarChart3,
    description: "Gráfico de barras",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: "sectores",
    label: "Sectores",
    icon: PieChart,
    description: "Gráfico circular",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    id: "lineas",
    label: "Líneas",
    icon: TrendingUp,
    description: "Gráfico de líneas",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
  },
  {
    id: "pictograma",
    label: "Pictograma",
    icon: ImageIcon,
    description: "Representación simbólica",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    id: "histograma",
    label: "Histograma",
    icon: BarChart2,
    description: "Distribución de frecuencias",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
  },
  {
    id: "poligono",
    label: "Polígono",
    icon: Activity,
    description: "Polígono de frecuencias",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    id: "ojivas",
    label: "Ojivas",
    icon: LineChart,
    description: "Frecuencias acumuladas",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-700",
  },
  {
    id: "faja",
    label: "Faja",
    icon: AreaChart,
    description: "Gráfico de área",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
  },
]

export function ChartSelector({ activeChart, onChartChange }: ChartSelectorProps) {
  const { isMobile } = useMobile()

  if (isMobile) {
    return (
      <div className="mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border p-4">
          <h3 className="text-sm font-bold text-gray-800 mb-4 text-center">Selecciona un Gráfico</h3>

          {/* Selector tipo grid en móvil */}
          <div className="grid grid-cols-2 gap-3">
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
                        ? `bg-gradient-to-br ${option.color} text-white shadow-lg scale-105`
                        : `${option.bgColor} ${option.textColor} hover:scale-102`
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-center">
                    <div className="text-xs font-bold">{option.label}</div>
                    <div className="text-xs opacity-80">{option.description}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Versión desktop con cards más grandes
  return (
    <div className="mb-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Selecciona el Tipo de Gráfico</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {chartOptions.map((option) => {
            const Icon = option.icon
            const isActive = activeChart === option.id

            return (
              <button
                key={option.id}
                onClick={() => onChartChange(option.id)}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105
                  ${
                    isActive
                      ? `bg-gradient-to-br ${option.color} text-white shadow-2xl scale-105`
                      : `${option.bgColor} ${option.textColor} hover:shadow-lg`
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`
                    p-3 rounded-full transition-all duration-300
                    ${isActive ? "bg-white/20" : "bg-white shadow-sm"}
                  `}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? "text-white" : option.textColor}`} />
                  </div>

                  <div className="text-center">
                    <div className="font-bold text-lg">{option.label}</div>
                    <div className={`text-sm ${isActive ? "text-white/80" : "opacity-70"}`}>{option.description}</div>
                  </div>
                </div>

                {/* Efecto de brillo al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
