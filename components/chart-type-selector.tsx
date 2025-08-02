"use client"
import { useMobile } from "../hooks/use-mobile"
import { TrendingUp, RotateCcw, BarChart3, Layers } from "lucide-react"

interface ChartTypeSelectorProps {
  activeType: string
  onTypeChange: (type: string) => void
}

const chartTypes = [
  {
    id: "vertical",
    label: "Vertical",
    icon: TrendingUp,
    description: "Barras verticales",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: "horizontal",
    label: "Horizontal",
    icon: RotateCcw,
    description: "Barras horizontales",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    id: "dobles",
    label: "Dobles",
    icon: BarChart3,
    description: "Comparativo",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    id: "apiladas",
    label: "Apiladas",
    icon: Layers,
    description: "Acumulativas",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
  },
]

export function ChartTypeSelector({ activeType, onTypeChange }: ChartTypeSelectorProps) {
  const { isMobile } = useMobile()

  if (isMobile) {
    return (
      <div className="mb-6">
        <div className="bg-white rounded-2xl shadow-lg border p-4">
          <h3 className="text-sm font-bold text-gray-800 mb-4 text-center">Tipo de Gráfico</h3>

          {/* Selector tipo grid en móvil */}
          <div className="grid grid-cols-2 gap-3">
            {chartTypes.map((type) => {
              const Icon = type.icon
              const isActive = activeType === type.id

              return (
                <button
                  key={type.id}
                  onClick={() => onTypeChange(type.id)}
                  className={`
                    flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? `bg-gradient-to-br ${type.color} text-white shadow-lg scale-105`
                        : `${type.bgColor} ${type.textColor} hover:scale-102`
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-center">
                    <div className="text-xs font-bold">{type.label}</div>
                    <div className="text-xs opacity-80">{type.description}</div>
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
          {chartTypes.map((type) => {
            const Icon = type.icon
            const isActive = activeType === type.id

            return (
              <button
                key={type.id}
                onClick={() => onTypeChange(type.id)}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105
                  ${
                    isActive
                      ? `bg-gradient-to-br ${type.color} text-white shadow-2xl scale-105`
                      : `${type.bgColor} ${type.textColor} hover:shadow-lg`
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
                    <Icon className={`w-6 h-6 ${isActive ? "text-white" : type.textColor}`} />
                  </div>

                  <div className="text-center">
                    <div className="font-bold text-lg">{type.label}</div>
                    <div className={`text-sm ${isActive ? "text-white/80" : "opacity-70"}`}>{type.description}</div>
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
