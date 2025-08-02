"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { ResponsiveChart } from "./responsive-chartjs"
import { useMobile } from "../hooks/use-mobile"
import type { ChartData } from "chart.js"

const datosLineas = [
  { mes: "Ene", ventas: 120, temperatura: 25 },
  { mes: "Feb", ventas: 130, temperatura: 27 },
  { mes: "Mar", ventas: 125, temperatura: 30 },
  { mes: "Abr", ventas: 140, temperatura: 32 },
  { mes: "May", ventas: 155, temperatura: 28 },
  { mes: "Jun", ventas: 160, temperatura: 26 },
  { mes: "Jul", ventas: 145, temperatura: 24 },
  { mes: "Ago", ventas: 150, temperatura: 25 },
]

export function GraficoLineas() {
  const { isMobile } = useMobile()

  const data: ChartData<"line"> = {
    labels: datosLineas.map((item) => item.mes),
    datasets: [
      {
        label: "Ventas (miles)",
        data: datosLineas.map((item) => item.ventas),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Temperatura (°C)",
        data: datosLineas.map((item) => item.temperatura),
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        borderWidth: 3,
        borderDash: [5, 5],
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.4,
        fill: false,
      },
    ],
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <TrendingUp className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">3. Gráfico de Líneas</CardTitle>
              <CardDescription className="text-orange-100 text-sm md:text-base">
                Muestra la evolución de una o más variables a lo largo del tiempo
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              Los gráficos de líneas son herramientas esenciales para visualizar la evolución de variables cuantitativas
              a lo largo del tiempo. Su característica principal es la conexión de puntos mediante líneas rectas, lo que
              permite identificar tendencias, patrones estacionales, ciclos y cambios en la dirección de los datos.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm md:text-base">Gráfico de Líneas Interactivo</span>
              </h3>
              <ResponsiveChart
                type="line"
                data={data}
                title={isMobile ? undefined : "Evolución de Ventas y Temperatura"}
              />
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                  Características Principales
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      icon: "📈",
                      text: "Ideal para mostrar tendencias temporales",
                      color: "bg-orange-100 text-orange-800",
                    },
                    {
                      icon: "🔄",
                      text: "Permite comparar múltiples series de datos",
                      color: "bg-blue-100 text-blue-800",
                    },
                    {
                      icon: "📊",
                      text: "Los puntos se conectan con líneas rectas",
                      color: "bg-green-100 text-green-800",
                    },
                    {
                      icon: "🎯",
                      text: "Facilita la identificación de patrones",
                      color: "bg-purple-100 text-purple-800",
                    },
                    { icon: "📉", text: "Útil para datos continuos", color: "bg-red-100 text-red-800" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-sm"
                    >
                      <span className="text-lg md:text-2xl">{item.icon}</span>
                      <span className="text-gray-700 flex-1 text-xs md:text-sm">{item.text}</span>
                      <Badge className={`${item.color} text-xs`}>Importante</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Aplicaciones</h3>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {[
                    "Evolución de ventas en el tiempo",
                    "Cambios de temperatura",
                    "Crecimiento poblacional",
                    "Variaciones de precios",
                    "Tendencias económicas",
                  ].map((aplicacion, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 text-xs md:text-sm">{aplicacion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Tabla de Datos</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">Mes</th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Ventas (miles)
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Temperatura (°C)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosLineas.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                          {item.mes}
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                            {item.ventas}
                          </Badge>
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                          <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                            {item.temperatura}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-l-4 border-orange-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-orange-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 5: Gráficos de Líneas y Series
                    Temporales. Editorial Universitaria, pp. 90-115.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-orange-800 mb-1 md:mb-2">Series Temporales:</p>
                  <p className="text-gray-700">
                    González, A. (2019). "Análisis de Series Temporales", Cap. 1: Representación Gráfica de Datos
                    Temporales. Editorial Estadística, pp. 23-45.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-orange-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    E-Recursos UEES - "Análisis Gráfico de Tendencias" - Módulo: Construcción e Interpretación de
                    Gráficos de Líneas.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-orange-800 mb-1 md:mb-2">Metodología Avanzada:</p>
                  <p className="text-gray-700">
                    Silva, M. (2020). "Visualización de Datos Estadísticos", Cap. 3: Técnicas Avanzadas en Gráficos de
                    Líneas. McGraw-Hill, pp. 67-89.
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
