"use client"

import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"
import {
  ChevronUp,
  BarChart3,
  PieChart,
  TrendingUp,
  ImageIcon,
  BarChart2,
  Activity,
  LineChart,
  AreaChart,
} from "lucide-react"

interface FloatingNavProps {
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

export function FloatingNav({ activeChart, onChartChange }: FloatingNavProps) {
  const { isMobile } = useMobile()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Ocultar al hacer scroll hacia abajo
      } else {
        setIsVisible(true) // Mostrar al hacer scroll hacia arriba
      }

      setLastScrollY(currentScrollY)
    }

    if (isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY, isMobile])

  if (!isMobile) return null

  const activeOption = chartOptions.find((option) => option.id === activeChart)
  const ActiveIcon = activeOption?.icon || BarChart3

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
    >
      {/* Opciones expandidas */}
      {isExpanded && (
        <div className="mb-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border p-3 max-h-80 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {chartOptions.map((option) => {
              const Icon = option.icon
              const isActive = activeChart === option.id

              return (
                <button
                  key={option.id}
                  onClick={() => {
                    onChartChange(option.id)
                    setIsExpanded(false)
                  }}
                  className={`
                    flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? `${option.color} text-white shadow-lg scale-105`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{option.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center
          ${activeOption?.color || "bg-blue-500"} text-white
          ${isExpanded ? "rotate-180 scale-110" : "hover:scale-105"}
        `}
      >
        {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ActiveIcon className="w-6 h-6" />}
      </button>

      {/* Indicador del gráfico actual */}
      {!isExpanded && (
        <div className="absolute -top-12 right-0 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
          {activeOption?.label || "Gráfico"}
        </div>
      )}
    </div>
  )
}
