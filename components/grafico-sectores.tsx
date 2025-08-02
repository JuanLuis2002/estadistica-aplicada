"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PieChart } from "lucide-react"
import { ResponsiveChart } from "./responsive-chartjs"
import { useMobile } from "@/hooks/use-mobile"
import type { ChartData, ChartOptions } from "chart.js"

const datosSectores = [
  { nombre: "Producto A", valor: 35, color: "#3b82f6" },
  { nombre: "Producto B", valor: 25, color: "#10b981" },
  { nombre: "Producto C", valor: 20, color: "#f59e0b" },
  { nombre: "Producto D", valor: 15, color: "#ef4444" },
  { nombre: "Otros", valor: 5, color: "#8b5cf6" },
]

export function GraficoSectores() {
  const { isMobile } = useMobile()

  // Memoizar los datos para evitar recrearlos
  const data: ChartData<"pie"> = {
    labels: datosSectores.map((item) => item.nombre),
    datasets: [
      {
        label: "Porcentaje",
        data: datosSectores.map((item) => item.valor),
        backgroundColor: datosSectores.map((item) => item.color + "80"),
        borderColor: datosSectores.map((item) => item.color),
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBorderColor: "#ffffff",
      },
    ],
  }

  // Opciones específicas para el gráfico circular
  const pieOptions: ChartOptions<"pie"> = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""
            const value = context.parsed
            return `${label}: ${value}% (${(value * 3.6).toFixed(1)}°)`
          },
        },
      },
    },
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <PieChart className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">2. Gráfico de Sectores o Circular</CardTitle>
              <CardDescription className="text-emerald-100 text-sm md:text-base">
                Representación de datos en forma de círculo dividido en sectores proporcionales
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              El gráfico de sectores o circular es una representación visual que divide un círculo en sectores
              proporcionales a las frecuencias de cada categoría. Es especialmente efectivo para mostrar la composición
              porcentual de un conjunto de datos y cómo cada parte contribuye al total.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm md:text-base">Gráfico Circular Interactivo</span>
              </h3>
              <ResponsiveChart
                type="pie"
                data={data}
                options={pieOptions}
                title={isMobile ? undefined : "Distribución por Productos"}
              />
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Tabla de Distribución</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                          Categoría
                        </th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                          Frecuencia
                        </th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                          Porcentaje
                        </th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                          Ángulo (°)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {datosSectores.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-2 md:px-4 py-2 md:py-3">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div
                                className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                                style={{ backgroundColor: item.color }}
                              ></div>
                              <span className="font-medium text-gray-800 text-xs md:text-sm">{item.nombre}</span>
                            </div>
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-xs">
                              {item.valor}
                            </Badge>
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                            {item.valor}%
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                            {(item.valor * 3.6).toFixed(1)}°
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Pasos para Construcción</h3>
                <ol className="space-y-2 md:space-y-3">
                  {[
                    "Calcular el porcentaje de cada categoría",
                    "Convertir porcentajes a grados (% × 3.6°)",
                    "Dibujar un círculo",
                    "Marcar los sectores según los ángulos calculados",
                    "Colorear y etiquetar cada sector",
                    "Agregar leyenda y título",
                  ].map((paso, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-emerald-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 4: Gráficos Circulares y de
                    Sectores. Editorial Universitaria, pp. 68-89.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-emerald-800 mb-1 md:mb-2">Metodología de Construcción:</p>
                  <p className="text-gray-700">
                    Rodríguez, P. (2019). "Técnicas de Representación Gráfica", Cap. 2: Cálculo de Ángulos y
                    Construcción de Gráficos Circulares. Editorial Académica, pp. 34-52.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-emerald-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    Biblioteca Digital UEES - "Gráficos Estadísticos Avanzados" - Sección: Gráficos de Sectores y su
                    Interpretación.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-emerald-800 mb-1 md:mb-2">Aplicaciones Prácticas:</p>
                  <p className="text-gray-700">
                    Martínez, L. (2020). "Estadística Aplicada a las Ciencias Sociales", Cap. 5: Uso de Gráficos
                    Circulares en Investigación. Pearson, pp. 145-167.
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
