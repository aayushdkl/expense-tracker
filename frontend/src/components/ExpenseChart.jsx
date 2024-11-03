import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ExpenseChart = ({ expenses }) => {
  // Group expenses by category
  const categories = [...new Set(expenses.map((expense) => expense.category))]
  const expenseData = categories.map((category) => {
    return expenses
      .filter((expense) => expense.category === category) //filtering expenses by category
      .reduce((sum, expense) => sum + expense.amount, 0) //summing up the expenses, starting from 0
  })

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: expenseData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expense Breakdown by Category",
      },
    },
  }

  return (
    <div>
      <h2>Expense Chart</h2>
      <Bar data={data} options={options} />
    </div>
  )
}

export default ExpenseChart
