"use client"

import { useMobile } from "@/hooks/use-mobile"

interface MobileBarChartProps {
  data: Array<{ categoria: string; frecuencia: number }>
}

export function MobileBarChart({ data }: MobileBarChartProps) {
  const { isMobile } = useMobile()

  if (!isMobile) return null

  const maxValue = Math.max(...data.map((item) => item.frecuencia))

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="text-sm font-bold text-gray-800 mb-3 text-center">Gráfico de Barras</h4>

      <div className="space-y-3">
        {data.map((item, index) => {
          const percentage = (item.frecuencia / maxValue) * 100
          const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-purple-500"]

          return (
            <div key={index} className="flex items-center gap-2">
              <div className="w-8 text-xs font-medium text-gray-700">
                {item.categoria.charAt(item.categoria.length - 1)}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div
                  className={`${colors[index]} h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-1000 ease-out`}
                  style={{ width: `${percentage}%` }}
                >
                  <span className="text-xs font-bold text-white">{item.frecuencia}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        A=Producto A, B=Producto B, C=Producto C, D=Producto D, E=Producto E
      </div>
    </div>
  )
}
