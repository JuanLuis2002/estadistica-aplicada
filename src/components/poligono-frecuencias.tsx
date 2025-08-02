import "@/lib/chart-config"
import { DynamicLine as Line } from "./dynamic-chart"
import type { ChartOptions } from "chart.js"

const PoligonoFrecuencias = () => {
  const dataPoligono = {
    // Data configuration here
  }

  const optionsPoligono: ChartOptions = {
    // Options configuration here
  }

  return (
    <div className="h-64 md:h-80">
      <Line data={dataPoligono} options={optionsPoligono} />
    </div>
  )
}

export default PoligonoFrecuencias
