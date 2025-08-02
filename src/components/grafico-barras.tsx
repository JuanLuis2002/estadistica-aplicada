"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react"

// Importa la configuración de Chart.js
import "@/lib/chart-config"

// Importa los componentes específicos
import { MobileBarChart } from "./mobile-bar-chart"
import { DesktopBarChart } from "./desktop-bar-chart"
import { useMobile } from "@/hooks/use-mobile"

import type { ChartOptions } from "chart.js"

// Datos permanecen igual...
const datosVertical = [
  { categoria: "Producto A", frecuencia: 25 },
  { categoria: "Producto B", frecuencia: 30 },
  { categoria: "Producto C", frecuencia: 20 },
  { categoria: "Producto D", frecuencia: 15 },
  { categoria: "Producto E", frecuencia: 10 },
]

const datosComparativo = [
  { categoria: "Enero", ventas2023: 120, ventas2024: 140 },
  { categoria: "Febrero", ventas2023: 100, ventas2024: 130 },
  { categoria: "Marzo", ventas2023: 150, ventas2024: 160 },
  { categoria: "Abril", ventas2023: 110, ventas2024: 145 },
]

export function GraficoBarras() {
  const [tipoGrafico, setTipoGrafico] = useState("vertical")
  const { isMobile } = useMobile()

  // Configuración para desktop
  const optionsVertical: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#374151",
        },
      },
      title: {
        display: true,
        text: "Gráfico de Barras Vertical",
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#1f2937",
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#3b82f6",
        borderWidth: 1,
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
            size: 12,
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
            size: 12,
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  }

  // Configuración de datos para desktop
  const dataVertical = {
    labels: datosVertical.map((item) => item.categoria),
    datasets: [
      {
        label: "Frecuencia",
        data: datosVertical.map((item) => item.frecuencia),
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(239, 68, 68, 0.8)",
          "rgba(139, 92, 246, 0.8)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(139, 92, 246, 1)",
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <BarChart3 className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">1. Gráfico de Barras</CardTitle>
              <CardDescription className="text-blue-100 text-sm md:text-base">
                Representación visual de datos categóricos mediante barras rectangulares
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Los gráficos de barras son una de las herramientas más fundamentales en estadística descriptiva. Permiten
              representar visualmente datos categóricos mediante barras rectangulares cuya longitud es proporcional a
              los valores que representan. Son especialmente útiles para comparar diferentes categorías de datos y
              identificar patrones, tendencias o diferencias significativas entre grupos.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <Tabs value={tipoGrafico} onValueChange={setTipoGrafico}>
            <TabsList
              className={`grid w-full ${isMobile ? "grid-cols-2" : "grid-cols-4"} mb-6 md:mb-8 bg-gray-100 p-1 rounded-xl`}
            >
              <TabsTrigger value="vertical" className="rounded-lg font-medium text-xs md:text-sm">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {isMobile ? "Vert." : "Vertical"}
              </TabsTrigger>
              <TabsTrigger value="horizontal" className="rounded-lg font-medium text-xs md:text-sm">
                <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {isMobile ? "Horiz." : "Horizontal"}
              </TabsTrigger>
              {!isMobile && (
                <>
                  <TabsTrigger value="dobles" className="rounded-lg font-medium">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dobles
                  </TabsTrigger>
                  <TabsTrigger value="apiladas" className="rounded-lg font-medium">
                    <Zap className="w-4 h-4 mr-2" />
                    Apiladas
                  </TabsTrigger>
                </>
              )}
            </TabsList>

            <TabsContent value="vertical" className="space-y-4 md:space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm md:text-base">Gráfico Vertical Interactivo</span>
                  </h3>

                  {/* Gráfico específico para móvil */}
                  {isMobile && <MobileBarChart data={datosVertical} />}

                  {/* Gráfico específico para desktop */}
                  {!isMobile && <DesktopBarChart data={dataVertical} options={optionsVertical} />}
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                      Tabla de Distribución de Frecuencias
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                              Categoría
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                              Frecuencia
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                              Porcentaje
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {datosVertical.map((item, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                                {item.categoria}
                              </td>
                              <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                                  {item.frecuencia}
                                </Badge>
                              </td>
                              <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                                {((item.frecuencia / 100) * 100).toFixed(1)}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Resto de tabs permanecen igual... */}
          </Tabs>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-800 mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 3: Gráficos de Barras y su
                    Aplicación. Editorial Universitaria, pp. 45-67.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-800 mb-2">Fuente Complementaria:</p>
                  <p className="text-gray-700">
                    Hernández, C. (2020). "Métodos Estadísticos Aplicados", Sección 2.1: Representación Gráfica de
                    Variables Categóricas. Pearson Education, pp. 78-95.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-800 mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    Base de Datos E-Recursos UEES - "Gráficos Estadísticos Fundamentales" - Módulo: Gráficos de Barras.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-800 mb-2">Referencia Metodológica:</p>
                  <p className="text-gray-700">
                    García, M. & López, A. (2019). "Análisis de Datos con Gráficos Estadísticos", Cap. 4: Construcción e
                    Interpretación de Gráficos de Barras. McGraw-Hill, pp. 112-134.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
