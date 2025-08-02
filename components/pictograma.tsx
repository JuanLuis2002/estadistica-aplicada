"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Car, Home, Book, ImageIcon } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

const datosPictograma = [
  { categoria: "Estudiantes", valor: 150, icono: Users, simbolo: "👨‍🎓", color: "from-blue-500 to-blue-600" },
  { categoria: "Vehículos", valor: 80, icono: Car, simbolo: "🚗", color: "from-green-500 to-green-600" },
  { categoria: "Casas", valor: 60, icono: Home, simbolo: "🏠", color: "from-orange-500 to-orange-600" },
  { categoria: "Libros", valor: 200, icono: Book, simbolo: "📚", color: "from-purple-500 to-purple-600" },
]

export function Pictograma() {
  const { isMobile } = useMobile()

  const renderSimbolos = (cantidad: number, simbolo: string) => {
    const simbolosPorFila = isMobile ? 5 : 10
    const filas = Math.ceil(cantidad / simbolosPorFila)
    const elementos = []

    for (let fila = 0; fila < filas; fila++) {
      const simbolosEnFila = Math.min(simbolosPorFila, cantidad - fila * simbolosPorFila)
      elementos.push(
        <div key={fila} className="flex gap-1 md:gap-2 mb-1 md:mb-2 justify-center">
          {Array.from({ length: simbolosEnFila }, (_, index) => (
            <span
              key={index}
              className="text-lg md:text-3xl hover:scale-110 transition-transform cursor-pointer"
              title={`Unidad ${fila * simbolosPorFila + index + 1}`}
            >
              {simbolo}
            </span>
          ))}
        </div>,
      )
    }
    return elementos
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">
              <ImageIcon className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-bold">4. Pictograma</CardTitle>
              <CardDescription className="text-purple-100 text-sm md:text-base">
                Representación gráfica que utiliza símbolos o imágenes para mostrar datos
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 border-b">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-base md:text-xl">📋</span>
              Descripción General
            </h3>
            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              Los pictogramas representan una forma única y atractiva de visualización estadística que utiliza símbolos
              o imágenes para representar cantidades de datos. Su principal fortaleza radica en la comunicación visual
              inmediata, haciendo que la información sea accesible para audiencias diversas.
            </p>
          </div>
        </div>

        <CardContent className="p-4 md:p-8">
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "lg:grid-cols-2 gap-8"}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-base md:text-xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm md:text-base">Pictograma Interactivo</span>
              </h3>
              <div className="space-y-4 md:space-y-8">
                {datosPictograma.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-100 rounded-lg md:rounded-xl p-3 md:p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className={`p-2 md:p-3 bg-gradient-to-r ${item.color} rounded-lg`}>
                        <item.icono className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-sm md:text-lg text-gray-800">
                          {item.categoria}: {item.valor}
                        </span>
                        <p className="text-xs md:text-sm text-gray-500">Cada símbolo representa 10 unidades</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 md:p-4 max-h-32 md:max-h-40 overflow-y-auto">
                      {renderSimbolos(Math.floor(item.valor / 10), item.simbolo)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Pasos para Construcción</h3>
                <ol className="space-y-2 md:space-y-3">
                  {[
                    "Seleccionar símbolos representativos",
                    "Determinar el valor de cada símbolo",
                    "Calcular la cantidad de símbolos necesarios",
                    "Organizar los símbolos en filas o columnas",
                    "Agregar títulos y leyenda explicativa",
                    "Incluir la escala utilizada",
                  ].map((paso, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Ventajas</h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { icon: "👁️", text: "Fácil comprensión visual" },
                    { icon: "✨", text: "Atractivo para el público general" },
                    { icon: "📊", text: "Ideal para presentaciones" },
                    { icon: "⚡", text: "Permite comparaciones rápidas" },
                    { icon: "🎯", text: "Efectivo para datos categóricos" },
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

              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Tabla de Frecuencias</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-xs md:text-sm">
                          Categoría
                        </th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                          Cantidad
                        </th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                          Símbolos
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {datosPictograma.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-2 md:px-4 py-2 md:py-3">
                            <div className="flex items-center gap-2 md:gap-3">
                              <span className="text-lg md:text-xl">{item.simbolo}</span>
                              <span className="font-medium text-gray-800 text-xs md:text-sm">{item.categoria}</span>
                            </div>
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                              {item.valor}
                            </Badge>
                          </td>
                          <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-600 text-xs md:text-sm">
                            {Math.floor(item.valor / 10)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Fuentes bibliográficas */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas Específicas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-800 mb-1 md:mb-2">Fuente Principal:</p>
                  <p className="text-gray-700">
                    Moya, R. (2018). "Estadística Descriptiva y Probabilidad", Cap. 6: Pictogramas y Representación
                    Simbólica. Editorial Universitaria, pp. 116-135.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-800 mb-1 md:mb-2">Comunicación Visual:</p>
                  <p className="text-gray-700">
                    Torres, C. (2019). "Comunicación Estadística Visual", Cap. 2: Diseño y Construcción de Pictogramas
                    Efectivos. Editorial Comunicación, pp. 45-67.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-800 mb-1 md:mb-2">Recurso Digital UEES:</p>
                  <p className="text-gray-700">
                    Repositorio UEES - "Técnicas de Visualización Estadística" - Sección: Pictogramas en la Comunicación
                    de Datos.
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-800 mb-1 md:mb-2">Aplicaciones Educativas:</p>
                  <p className="text-gray-700">
                    Ramírez, J. (2020). "Estadística Educativa", Cap. 4: Uso de Pictogramas en la Enseñanza de
                    Estadística. Pearson Education, pp. 89-108.
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
