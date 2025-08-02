"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AreaChart } from "lucide-react"
import { ResponsiveChart } from "./responsive-chartjs"
import { useMobile } from "../hooks/use-mobile"
import type { ChartData } from "chart.js"

const datosFajaSencilla = [
  { periodo: "2020", valor: 100 },
  { periodo: "2021", valor: 120 },
  { periodo: "2022", valor: 110 },
  { periodo: "2023", valor: 140 },
  { periodo: "2024", valor: 160 },
]

const datosFajaDoble = [
  { periodo: "2020", ingresos: 100, gastos: 80 },
  { periodo: "2021", ingresos: 120, gastos: 90 },
  { periodo: "2022", ingresos: 110, gastos: 95 },
  { periodo: "2023", ingresos: 140, gastos: 105 },
  { periodo: "2024", ingresos: 160, gastos: 115 },
]

export function GraficoFaja() {
  const { isMobile } = useMobile()

  const dataSencilla: ChartData<"line"> = {
    labels: datosFajaSencilla.map((item) => item.periodo),
    datasets: [
      {
        label: "Valor",
        data: datosFajaSencilla.map((item) => item.valor),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const dataDoble: ChartData<"line"> = {
    labels: datosFajaDoble.map((item) => item.periodo),
    datasets: [
      {
        label: "Ingresos",
        data: datosFajaDoble.map((item) => item.ingresos),
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        borderWidth: 3,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Gastos",
        data: datosFajaDoble.map((item) => item.gastos),
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.3)",
        borderWidth: 3,
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        tension: 0.4,
        fill: true,
      },
    ],
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <AreaChart className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">8. Gráfico de Faja</CardTitle>
              <CardDescription className="text-teal-100 text-sm md:text-base">
                Representación gráfica que muestra la evolución de una o más variables mediante áreas sombreadas
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              Los gráficos de faja o área representan la evolución de variables cuantitativas a lo largo del tiempo
              mediante áreas sombreadas bajo las curvas. Su principal ventaja es enfatizar la magnitud acumulativa de
              los valores y facilitar la visualización de tendencias y patrones temporales.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <Tabs defaultValue="sencilla" className="w-full">
            <TabsList className={`grid w-full grid-cols-2 mb-6 md:mb-8 bg-gray-100 p-1 rounded-xl`}>
              <TabsTrigger value="sencilla" className="rounded-lg font-medium text-xs md:text-sm">
                Faja Sencilla
              </TabsTrigger>
              <TabsTrigger value="doble" className="rounded-lg font-medium text-xs md:text-sm">
                Faja Doble
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sencilla" className="space-y-4 md:space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm md:text-base">Gráfico de Faja Sencilla</span>
                  </h3>
                  <ResponsiveChart type="line" data={dataSencilla} />
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Características</h3>
                    <div className="space-y-2 md:space-y-3">
                      {[
                        { icon: "📊", text: "Muestra una sola variable a lo largo del tiempo" },
                        { icon: "🎨", text: "El área bajo la curva está sombreada" },
                        { icon: "📈", text: "Enfatiza la magnitud total de los valores" },
                        { icon: "📋", text: "Ideal para mostrar tendencias acumulativas" },
                        { icon: "✨", text: "Visualmente impactante" },
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

                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Tabla de Datos</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                              Período
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                              Valor
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {datosFajaSencilla.map((item, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                                {item.periodo}
                              </td>
                              <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                                  {item.valor}
                                </Badge>
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

            <TabsContent value="doble" className="space-y-4 md:space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm md:text-base">Gráfico de Faja Doble</span>
                  </h3>
                  <ResponsiveChart type="line" data={dataDoble} />
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                      Pasos para Construcción
                    </h3>
                    <ol className="space-y-2 md:space-y-3">
                      {[
                        "Organizar los datos en series temporales",
                        "Determinar la escala apropiada",
                        "Dibujar los ejes coordenados",
                        "Trazar las líneas de cada variable",
                        "Sombrear las áreas bajo las curvas",
                        "Agregar leyenda y títulos",
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

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Aplicaciones</h3>
                    <div className="space-y-2 md:space-y-3">
                      {[
                        { icon: "💰", text: "Análisis financiero (ingresos vs gastos)" },
                        { icon: "👥", text: "Estudios demográficos" },
                        { icon: "📊", text: "Evolución de ventas por producto" },
                        { icon: "📈", text: "Comparación de rendimientos" },
                        { icon: "🏛️", text: "Análisis de tendencias económicas" },
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
                </div>
              </div>

              <div className="mt-4 md:mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Tabla Comparativa</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                            Período
                          </th>
                          <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                            Ingresos
                          </th>
                          <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                            Gastos
                          </th>
                          <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                            Diferencia
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {datosFajaDoble.map((item, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                              {item.periodo}
                            </td>
                            <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                {item.ingresos}
                              </Badge>
                            </td>
                            <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                              <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                                {item.gastos}
                              </Badge>
                            </td>
                            <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                              <Badge
                                variant="secondary"
                                className={
                                  item.ingresos - item.gastos > 0
                                    ? "bg-blue-100 text-blue-800 text-xs"
                                    : "bg-orange-100 text-orange-800 text-xs"
                                }
                              >
                                {item.ingresos - item.gastos}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border-l-4 border-teal-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-teal-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 10: Gráficos de Área y
                    Representación Temporal. Editorial Universitaria, pp. 219-245.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-teal-800 mb-1 md:mb-2">Análisis Temporal:</p>
                  <p className="text-gray-700">
                    Herrera, D. (2019). "Visualización de Series Temporales", Cap. 3: Gráficos de Área en Análisis
                    Económico. Editorial Temporal, pp. 56-78.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-teal-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    Repositorio Académico UEES - "Gráficos Estadísticos Temporales" - Sección: Gráficos de Faja y
                    Aplicaciones.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-teal-800 mb-1 md:mb-2">Aplicaciones Financieras:</p>
                  <p className="text-gray-700">
                    Mendoza, C. (2020). "Estadística Financiera", Cap. 8: Gráficos de Área en Análisis de Tendencias
                    Financieras. Pearson Education, pp. 178-201.
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
