import "@/lib/chart-config"
import { DynamicBar as Bar } from "./dynamic-chart"
import type { ChartOptions } from "chart.js"

const Histograma = ({ data, options }: { data: any; options: ChartOptions }) => {
  return (
    <div className="h-64 md:h-96">
      <Bar data={data} options={options} />
    </div>
  )
}

export default Histograma
