"use client"

import { useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Menu, X } from "lucide-react"
import { GraficoBarras } from "@/components/grafico-barras"
import { GraficoSectores } from "@/components/grafico-sectores"
import { GraficoLineas } from "@/components/grafico-lineas"
import { Pictograma } from "@/components/pictograma"
import { Histograma } from "@/components/histograma"
import { PoligonoFrecuencias } from "@/components/poligono-frecuencias"
import { Ojivas } from "@/components/ojivas"
import { GraficoFaja } from "@/components/grafico-faja"
import { useMobile } from "@/hooks/use-mobile"
import { FloatingNav } from "@/components/floating-nav"
import { ChartSelector } from "@/components/chart-selector"

// Definir tipos para mayor seguridad
type ChartType = "barras" | "sectores" | "lineas" | "pictograma" | "histograma" | "poligono" | "ojivas" | "faja"

const chartTitles: Record<ChartType, string> = {
  barras: "Gráfico de Barras",
  sectores: "Gráfico de Sectores",
  lineas: "Gráfico de Líneas",
  pictograma: "Pictograma",
  histograma: "Histograma",
  poligono: "Polígono de Frecuencias",
  ojivas: "Ojivas",
  faja: "Gráfico de Faja",
}

export default function EstadisticaGraficos() {
  const [activeChart, setActiveChart] = useState<ChartType>("barras")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { isMobile } = useMobile()

  const handleChartChange = (chart: string) => {
    // Validar que el chart sea un tipo válido
    if (chart in chartTitles) {
      setActiveChart(chart as ChartType)
    }
  }

  const renderChart = () => {
    switch (activeChart) {
      case "barras":
        return <GraficoBarras />
      case "sectores":
        return <GraficoSectores />
      case "lineas":
        return <GraficoLineas />
      case "pictograma":
        return <Pictograma />
      case "histograma":
        return <Histograma />
      case "poligono":
        return <PoligonoFrecuencias />
      case "ojivas":
        return <Ojivas />
      case "faja":
        return <GraficoFaja />
      default:
        return <GraficoBarras />
    }
  }

  // Función helper para obtener el título de forma segura
  const getCurrentChartTitle = (): string => {
    return chartTitles[activeChart] || "Gráfico"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header responsivo mejorado */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-16">
          {/* Navegación móvil */}
          {isMobile && (
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg">ESTADÍSTICA</span>
              </div>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                {showMobileMenu ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          )}

          {/* Menú móvil desplegable */}
          {isMobile && showMobileMenu && (
            <div className="mb-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border">
              <h3 className="text-sm font-bold text-gray-800 mb-3 text-center">Selecciona un Gráfico</h3>
              <div className="grid grid-cols-2 gap-2">
                {(Object.entries(chartTitles) as [ChartType, string][]).map(([key, title]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveChart(key)
                      setShowMobileMenu(false)
                    }}
                    className={`
                      p-3 rounded-xl text-xs font-medium transition-all duration-300
                      ${
                        activeChart === key
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }
                    `}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mb-6 md:mb-12">
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              {!isMobile && (
                <div className="p-2 md:p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              )}
              <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-white tracking-tight">
                {isMobile ? "GRÁFICOS ESTADÍSTICOS" : "ESTADÍSTICA DESCRIPTIVA"}
              </h1>
            </div>
            {!isMobile && (
              <>
                <p className="text-base md:text-2xl text-blue-100 font-light mb-2">GRÁFICOS ESTADÍSTICOS</p>
                <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
              </>
            )}
          </div>

          {/* Información de estudiantes responsiva */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader className="text-center p-4 md:p-8">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mx-auto p-1">
                    <img
                      src="/foto1.jpg?height=128&width=128"
                      alt="Juan Luis Hernandez"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-4 h-4 md:w-8 md:h-8 bg-green-500 rounded-full border-2 md:border-4 border-white"></div>
                </div>
                <CardTitle className="text-sm md:text-2xl font-bold text-gray-800 mb-2">
                  Juan Luis Hernandez Hercules
                </CardTitle>
                <CardDescription className="text-xs md:text-lg">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 px-2 py-1 md:px-4 md:py-2 text-xs font-semibold"
                  >
                    CIF: 2022010431
                  </Badge>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader className="text-center p-4 md:p-8">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mx-auto p-1">
                    <img
                      src="/foto2.jpg?height=128&width=128"
                      alt="Ricardo Alexander Arevalo"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-4 h-4 md:w-8 md:h-8 bg-green-500 rounded-full border-2 md:border-4 border-white"></div>
                </div>
                <CardTitle className="text-sm md:text-2xl font-bold text-gray-800 mb-2">
                  Ricardo Alexander Arevalo Hollman
                </CardTitle>
                <CardDescription className="text-xs md:text-lg">
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 md:px-4 md:py-2 text-xs font-semibold"
                  >
                    CIF: 2021010737
                  </Badge>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Información académica responsiva */}
          <div className="text-center space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/20">
              <h2 className="text-lg md:text-3xl font-bold text-white mb-3">Universidad Evangélica de El Salvador</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-xs md:text-lg font-medium">Materia: Estadística Aplicada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-xs md:text-lg font-medium">Licenciado: Leonel Adonay Guevara Rios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Indicador del gráfico actual en móvil */}
        {isMobile && (
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">{getCurrentChartTitle()}</span>
            </div>
          </div>
        )}

        {/* Selector de gráficos para desktop */}
        {!isMobile && <ChartSelector activeChart={activeChart} onChartChange={handleChartChange} />}

        {/* Renderizado del gráfico */}
        {renderChart()}
      </div>

      {/* Footer responsivo */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 md:py-8 mt-8 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-300 text-xs md:text-base">
            © 2024 Universidad Evangélica de El Salvador - Estadística Aplicada
          </p>
          <p className="text-gray-400 text-xs mt-1 md:mt-2">Presentación académica sobre Gráficos Estadísticos</p>
        </div>
      </footer>
      {/* Navegación flotante para móvil */}
      <FloatingNav activeChart={activeChart} onChartChange={handleChartChange} />
    </div>
  )
}
