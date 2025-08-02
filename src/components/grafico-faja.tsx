import "@/lib/chart-config"
import { DynamicLine as Line } from "./dynamic-chart"
import type { ChartOptions } from "chart.js"

const GraficoFaja = () => {
  const dataSencilla = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  }

  const optionsBase: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="h-64 md:h-80">
      <Line data={dataSencilla} options={optionsBase} />
    </div>
  )
}

export default GraficoFaja
