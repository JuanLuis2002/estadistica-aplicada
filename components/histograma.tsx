"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart2 } from "lucide-react"
import { ResponsiveChart } from "./responsive-chartjs"
import { useMobile } from "../hooks/use-mobile"
import type { ChartData, ChartOptions } from "chart.js"

const datosHistograma = [
  { intervalo: "10-20", frecuencia: 5, marca: 15 },
  { intervalo: "20-30", frecuencia: 12, marca: 25 },
  { intervalo: "30-40", frecuencia: 18, marca: 35 },
  { intervalo: "40-50", frecuencia: 25, marca: 45 },
  { intervalo: "50-60", frecuencia: 20, marca: 55 },
  { intervalo: "60-70", frecuencia: 15, marca: 65 },
  { intervalo: "70-80", frecuencia: 8, marca: 75 },
  { intervalo: "80-90", frecuencia: 3, marca: 85 },
]

export function Histograma() {
  const { isMobile } = useMobile()

  const data: ChartData<"bar"> = {
    labels: datosHistograma.map((item) => item.intervalo),
    datasets: [
      {
        label: "Frecuencia",
        data: datosHistograma.map((item) => item.frecuencia),
        backgroundColor: "rgba(99, 102, 241, 0.8)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        borderRadius: 0, // Sin bordes redondeados para histograma
        categoryPercentage: 1.0, // Sin espacios entre barras
        barPercentage: 1.0,
      },
    ],
  }

  const options: ChartOptions<"bar"> = {
    plugins: {
      title: {
        display: !isMobile,
        text: "Histograma de Distribución de Frecuencias",
      },
    },
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <BarChart2 className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">5. Histograma</CardTitle>
              <CardDescription className="text-indigo-100 text-sm md:text-base">
                Representación gráfica de la distribución de frecuencias de datos continuos agrupados en intervalos
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              El histograma es una representación gráfica fundamental para datos cuantitativos continuos agrupados en
              intervalos de clase. Su característica distintiva son las barras rectangulares adyacentes (sin espacios
              entre ellas) que representan la frecuencia de cada intervalo.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-sm md:text-base">Histograma Interactivo</span>
              </h3>
              <ResponsiveChart type="bar" data={data} options={options} />
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                  Características del Histograma
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { icon: "📊", text: "Las barras están unidas (sin espacios)" },
                    { icon: "📈", text: "El eje X representa intervalos de clase" },
                    { icon: "📉", text: "El eje Y representa la frecuencia" },
                    { icon: "🔍", text: "Muestra la forma de la distribución" },
                    { icon: "📋", text: "Útil para datos cuantitativos continuos" },
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

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Pasos para Construcción</h3>
                <ol className="space-y-2 md:space-y-3">
                  {[
                    "Determinar el rango de los datos",
                    "Decidir el número de intervalos (clases)",
                    "Calcular la amplitud de cada intervalo",
                    "Crear la tabla de distribución de frecuencias",
                    "Dibujar las barras sin espacios entre ellas",
                    "Etiquetar ejes y agregar título",
                  ].map((paso, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                Tabla de Distribución de Frecuencias
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                        Intervalo
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Marca de Clase
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Frecuencia
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Frecuencia Relativa
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Frecuencia Acumulada
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosHistograma.map((item, index) => {
                      const total = datosHistograma.reduce((sum, d) => sum + d.frecuencia, 0)
                      const frecAcumulada = datosHistograma
                        .slice(0, index + 1)
                        .reduce((sum, d) => sum + d.frecuencia, 0)
                      return (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                            {item.intervalo}
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 text-xs">
                              {item.marca}
                            </Badge>
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                              {item.frecuencia}
                            </Badge>
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                            {((item.frecuencia / total) * 100).toFixed(1)}%
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                            {frecAcumulada}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-indigo-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 7: Histogramas y Distribución de
                    Frecuencias. Editorial Universitaria, pp. 136-165.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-indigo-800 mb-1 md:mb-2">Teoría de Distribuciones:</p>
                  <p className="text-gray-700">
                    Fernández, R. (2019). "Análisis de Distribuciones Estadísticas", Cap. 3: Construcción e
                    Interpretación de Histogramas. Editorial Científica, pp. 78-102.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-indigo-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    Base de Datos UEES - "Análisis de Distribuciones" - Módulo: Histogramas y su Interpretación
                    Estadística.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-indigo-800 mb-1 md:mb-2">Control de Calidad:</p>
                  <p className="text-gray-700">
                    López, M. (2020). "Estadística Industrial", Cap. 5: Histogramas en Control de Procesos. McGraw-Hill,
                    pp. 123-145.
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
