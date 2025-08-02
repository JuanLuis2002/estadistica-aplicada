"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"
import { ResponsiveChart } from "./responsive-chartjs"
import { useMobile } from "../hooks/use-mobile"
import type { ChartData } from "chart.js"

const datosPoligono = [
  { marca: 15, frecuencia: 5 },
  { marca: 25, frecuencia: 12 },
  { marca: 35, frecuencia: 18 },
  { marca: 45, frecuencia: 25 },
  { marca: 55, frecuencia: 20 },
  { marca: 65, frecuencia: 15 },
  { marca: 75, frecuencia: 8 },
  { marca: 85, frecuencia: 3 },
]

export function PoligonoFrecuencias() {
  const { isMobile } = useMobile()

  const dataPoligono: ChartData<"line"> = {
    labels: datosPoligono.map((item) => item.marca.toString()),
    datasets: [
      {
        label: "Frecuencia",
        data: datosPoligono.map((item) => item.frecuencia),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 6 : 8,
        pointHoverRadius: isMobile ? 8 : 10,
        tension: 0,
        fill: false,
      },
    ],
  }

  const dataSuavizado: ChartData<"line"> = {
    labels: datosPoligono.map((item) => item.marca.toString()),
    datasets: [
      {
        label: "Frecuencia Suavizada",
        data: datosPoligono.map((item) => item.frecuencia),
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.4,
        fill: true,
      },
    ],
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <Activity className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">6. Polígono de Frecuencias</CardTitle>
              <CardDescription className="text-green-100 text-sm md:text-base">
                Gráfico de línea que conecta los puntos medios de las barras de un histograma
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              El polígono de frecuencias es una representación gráfica que conecta los puntos medios de las barras de un
              histograma mediante líneas rectas, creando una figura poligonal. Esta herramienta es especialmente útil
              para visualizar la forma de la distribución de datos continuos y facilitar la comparación entre múltiples
              distribuciones en un mismo gráfico.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm md:text-base">Polígono de Frecuencias</span>
              </h3>
              <ResponsiveChart
                type="line"
                data={dataPoligono}
                title={isMobile ? undefined : "Polígono de Frecuencias"}
              />
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm md:text-base">Polígono Suavizado</span>
              </h3>
              <ResponsiveChart
                type="line"
                data={dataSuavizado}
                title={isMobile ? undefined : "Polígono de Frecuencias Suavizado"}
              />
            </div>
          </div>

          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"} mt-6 md:mt-8`}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Características</h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  { icon: "🔗", text: "Se construye uniendo las marcas de clase" },
                  { icon: "📊", text: "Muestra la forma de la distribución" },
                  { icon: "⚖️", text: "Facilita la comparación entre distribuciones" },
                  { icon: "🎯", text: "Útil para identificar tendencias centrales" },
                  { icon: "📈", text: "Permite visualizar la dispersión de datos" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-sm"
                  >
                    <span className="text-lg md:text-xl">{item.icon}</span>
                    <span className="text-gray-700 text-xs md:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Pasos para Construcción</h3>
              <ol className="space-y-2 md:space-y-3">
                {[
                  "Construir la tabla de distribución de frecuencias",
                  "Calcular las marcas de clase de cada intervalo",
                  "Ubicar puntos en el plano cartesiano",
                  "Unir los puntos con líneas rectas",
                  "Cerrar el polígono en los extremos",
                  "Agregar títulos y etiquetas",
                ].map((paso, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-xs md:text-sm">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Datos del Polígono</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                        Marca de Clase
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Frecuencia
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Coordenadas (x,y)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosPoligono.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                          {item.marca}
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            {item.frecuencia}
                          </Badge>
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                          ({item.marca}, {item.frecuencia})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-green-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 8: Polígonos de Frecuencia y Curvas
                    de Distribución. Editorial Universitaria, pp. 166-189.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-green-800 mb-1 md:mb-2">Análisis Comparativo:</p>
                  <p className="text-gray-700">
                    Vargas, S. (2019). "Métodos de Comparación Estadística", Cap. 4: Uso de Polígonos para Análisis
                    Comparativo. Editorial Análisis, pp. 67-89.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-green-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    Biblioteca Digital UEES - "Gráficos Estadísticos Avanzados" - Sección: Polígonos de Frecuencia y
                    Aplicaciones.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-green-800 mb-1 md:mb-2">Metodología Estadística:</p>
                  <p className="text-gray-700">
                    Castro, L. (2020). "Técnicas Gráficas en Estadística", Cap. 6: Construcción y Análisis de Polígonos
                    de Frecuencia. Pearson, pp. 134-156.
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
