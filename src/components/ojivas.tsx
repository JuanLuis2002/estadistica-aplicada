import "@/lib/chart-config"
import { DynamicLine as Line } from "./dynamic-chart"
import type { ChartOptions } from "chart.js"

const OjivasComponent = () => {
  const dataAscendente = {
    // Data configuration here
  }

  const optionsBase: ChartOptions = {
    // Options configuration here
  }

  return (
    <div className="h-64 md:h-80">
      <Line data={dataAscendente} options={optionsBase} />
    </div>
  )
}

export default OjivasComponent
