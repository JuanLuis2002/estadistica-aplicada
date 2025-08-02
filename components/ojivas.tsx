"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LineChart, TrendingUp, TrendingDown } from "lucide-react"
import { ResponsiveChart } from "./responsive-chartjs"
import { useMobile } from "../hooks/use-mobile"
import type { ChartData } from "chart.js"

const datosOjivas = [
  { limite: 20, frecAcumAsc: 5, frecAcumDesc: 106, porcentajeAsc: 4.7, porcentajeDesc: 100 },
  { limite: 30, frecAcumAsc: 17, frecAcumDesc: 94, porcentajeAsc: 16.0, porcentajeDesc: 88.7 },
  { limite: 40, frecAcumAsc: 35, frecAcumDesc: 76, porcentajeAsc: 33.0, porcentajeDesc: 71.7 },
  { limite: 50, frecAcumAsc: 60, frecAcumDesc: 51, porcentajeAsc: 56.6, porcentajeDesc: 48.1 },
  { limite: 60, frecAcumAsc: 80, frecAcumDesc: 31, porcentajeAsc: 75.5, porcentajeDesc: 29.2 },
  { limite: 70, frecAcumAsc: 95, frecAcumDesc: 16, porcentajeAsc: 89.6, porcentajeDesc: 15.1 },
  { limite: 80, frecAcumAsc: 103, frecAcumDesc: 8, porcentajeAsc: 97.2, porcentajeDesc: 7.5 },
  { limite: 90, frecAcumAsc: 106, frecAcumDesc: 3, porcentajeAsc: 100, porcentajeDesc: 2.8 },
]

export function Ojivas() {
  const { isMobile } = useMobile()

  const dataAscendente: ChartData<"line"> = {
    labels: datosOjivas.map((item) => item.limite.toString()),
    datasets: [
      {
        label: "Frecuencia Acumulada Ascendente",
        data: datosOjivas.map((item) => item.frecAcumAsc),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.1,
        fill: false,
      },
    ],
  }

  const dataDescendente: ChartData<"line"> = {
    labels: datosOjivas.map((item) => item.limite.toString()),
    datasets: [
      {
        label: "Frecuencia Acumulada Descendente",
        data: datosOjivas.map((item) => item.frecAcumDesc),
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.1,
        fill: false,
      },
    ],
  }

  const dataCombinada: ChartData<"line"> = {
    labels: datosOjivas.map((item) => item.limite.toString()),
    datasets: [
      {
        label: "Ascendente",
        data: datosOjivas.map((item) => item.frecAcumAsc),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 3 : 5,
        tension: 0.1,
        fill: false,
      },
      {
        label: "Descendente",
        data: datosOjivas.map((item) => item.frecAcumDesc),
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        borderWidth: 3,
        borderDash: [5, 5],
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: isMobile ? 3 : 5,
        tension: 0.1,
        fill: false,
      },
    ],
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <LineChart className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">7. Ojivas</CardTitle>
              <CardDescription className="text-cyan-100 text-sm md:text-base">
                Gráficos de frecuencias acumuladas que muestran la distribución acumulativa de los datos
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              Las ojivas son gráficos de frecuencias acumuladas que muestran la distribución acumulativa de los datos
              mediante curvas suaves. Existen dos tipos principales: ascendente (menor que) y descendente (mayor que),
              cada una proporcionando información complementaria sobre la distribución.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <Tabs defaultValue="ascendente" className="w-full">
            <TabsList className={`grid w-full grid-cols-3 mb-6 md:mb-8 bg-gray-100 p-1 rounded-xl`}>
              <TabsTrigger value="ascendente" className="rounded-lg font-medium text-xs md:text-sm">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {isMobile ? "Asc." : "Ascendente"}
              </TabsTrigger>
              <TabsTrigger value="descendente" className="rounded-lg font-medium text-xs md:text-sm">
                <TrendingDown className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {isMobile ? "Desc." : "Descendente"}
              </TabsTrigger>
              <TabsTrigger value="combinada" className="rounded-lg font-medium text-xs md:text-sm">
                <LineChart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {isMobile ? "Comb." : "Combinada"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ascendente" className="space-y-4 md:space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm md:text-base">Ojiva Ascendente</span>
                  </h3>
                  <ResponsiveChart type="line" data={dataAscendente} />
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Características</h3>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { icon: "📈", text: 'Muestra frecuencias acumuladas "menor que"' },
                      { icon: "⬆️", text: "La curva es siempre creciente" },
                      { icon: "🎯", text: "Inicia en 0 y termina en el total" },
                      { icon: "📊", text: "Útil para encontrar percentiles" },
                      { icon: "🔍", text: "Permite determinar medianas" },
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
            </TabsContent>

            <TabsContent value="descendente" className="space-y-4 md:space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm md:text-base">Ojiva Descendente</span>
                  </h3>
                  <ResponsiveChart type="line" data={dataDescendente} />
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Características</h3>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { icon: "📉", text: 'Muestra frecuencias acumuladas "mayor que"' },
                      { icon: "⬇️", text: "La curva es siempre decreciente" },
                      { icon: "🎯", text: "Inicia en el total y termina en 0" },
                      { icon: "🔄", text: "Complementa la ojiva ascendente" },
                      { icon: "📊", text: "Útil para análisis de cola superior" },
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
            </TabsContent>

            <TabsContent value="combinada" className="space-y-4 md:space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm md:text-base">Ojivas Combinadas</span>
                  </h3>
                  <ResponsiveChart type="line" data={dataCombinada} />
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Aplicaciones</h3>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { icon: "⚖️", text: "Comparación de distribuciones" },
                      { icon: "📊", text: "Cálculo de percentiles y cuartiles" },
                      { icon: "🎯", text: "Determinación de la mediana" },
                      { icon: "📈", text: "Análisis de dispersión" },
                      { icon: "🔍", text: "Control de calidad estadístico" },
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
            </TabsContent>
          </Tabs>

          <div className="mt-6 md:mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                Tabla de Frecuencias Acumuladas
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">Límite</th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Frec. Acum. Asc.
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        Frec. Acum. Desc.
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        % Acum. Asc.
                      </th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                        % Acum. Desc.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosOjivas.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
                          {item.limite}
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                            {item.frecAcumAsc}
                          </Badge>
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                          <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                            {item.frecAcumDesc}
                          </Badge>
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                          {item.porcentajeAsc}%
                        </td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                          {item.porcentajeDesc}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border-l-4 border-cyan-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-cyan-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 9: Ojivas y Distribuciones
                    Acumuladas. Editorial Universitaria, pp. 190-218.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-cyan-800 mb-1 md:mb-2">Percentiles y Cuartiles:</p>
                  <p className="text-gray-700">
                    Morales, P. (2019). "Estadísticos de Posición", Cap. 2: Cálculo de Percentiles mediante Ojivas.
                    Editorial Estadística Aplicada, pp. 34-58.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-cyan-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    E-Recursos UEES - "Análisis de Distribuciones Acumuladas" - Módulo: Construcción e Interpretación de
                    Ojivas.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-cyan-800 mb-1 md:mb-2">Control de Calidad:</p>
                  <p className="text-gray-700">
                    Jiménez, A. (2020). "Estadística en Control de Procesos", Cap. 7: Ojivas en Análisis de Capacidad de
                    Procesos. McGraw-Hill, pp. 167-189.
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
