"use client"
import { Badge } from "@/components/ui/badge"

// Gráfico de barras móvil
export function MobileBarChart({ data }: { data: Array<{ categoria: string; frecuencia: number }> }) {
  const maxValue = Math.max(...data.map((item) => item.frecuencia))
  const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-purple-500"]

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="space-y-3">
        {data.map((item, index) => {
          const percentage = (item.frecuencia / maxValue) * 100
          return (
            <div key={index} className="flex items-center gap-2">
              <div className="w-6 text-xs font-medium text-gray-700 text-center">
                {item.categoria.charAt(item.categoria.length - 1)}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                <div
                  className={`${colors[index]} h-8 rounded-full flex items-center justify-end pr-2 transition-all duration-1000 ease-out`}
                  style={{ width: `${percentage}%` }}
                >
                  <span className="text-xs font-bold text-white">{item.frecuencia}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-3 text-xs text-gray-500 text-center">
        A=Producto A, B=Producto B, C=Producto C, D=Producto D, E=Producto E
      </div>
    </div>
  )
}

// Gráfico circular móvil
export function MobilePieChart({ data }: { data: Array<{ nombre: string; valor: number; color: string }> }) {
  const total = data.reduce((sum, item) => sum + item.valor, 0)
  let currentAngle = 0

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const percentage = (item.valor / total) * 100
              const angle = (percentage / 100) * 360
              const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180)
              const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180)
              const x2 = 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180)
              const y2 = 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180)
              const largeArc = angle > 180 ? 1 : 0

              const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`
              currentAngle += angle

              return <path key={index} d={pathData} fill={item.color} stroke="white" strokeWidth="0.5" />
            })}
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-xs text-gray-700">
                {item.nombre}: {item.valor}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Gráfico de líneas móvil
export function MobileLineChart({ data }: { data: Array<{ mes: string; valor: number }> }) {
  const maxValue = Math.max(...data.map((item) => item.valor))
  const minValue = Math.min(...data.map((item) => item.valor))
  const range = maxValue - minValue

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="relative h-32 mb-4">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
          ))}

          {/* Data line */}
          <polyline
            points={data
              .map((item, index) => {
                const x = (index / (data.length - 1)) * 300
                const y = 100 - ((item.valor - minValue) / range) * 100
                return `${x},${y}`
              })
              .join(" ")}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Data points */}
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 300
            const y = 100 - ((item.valor - minValue) / range) * 100
            return <circle key={index} cx={x} cy={y} r="3" fill="#3b82f6" stroke="white" strokeWidth="1" />
          })}
        </svg>
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <div className="font-medium">{item.mes}</div>
            <div className="text-blue-600">{item.valor}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Pictograma móvil
export function MobilePictogram({ data }: { data: Array<{ categoria: string; valor: number; simbolo: string }> }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="space-y-4">
        {data.map((item, index) => {
          const symbols = Math.floor(item.valor / 10)
          return (
            <div key={index} className="text-center">
              <h4 className="text-xs font-medium text-gray-800 mb-2">{item.categoria}</h4>
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {Array.from({ length: symbols }, (_, i) => (
                  <span key={i} className="text-lg">
                    {item.simbolo}
                  </span>
                ))}
              </div>
              <Badge variant="secondary" className="text-xs">
                {item.valor} unidades
              </Badge>
            </div>
          )
        })}
      </div>
      <div className="mt-3 text-xs text-gray-500 text-center">Cada símbolo representa 10 unidades</div>
    </div>
  )
}
