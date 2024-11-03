import { useState, useEffect } from "react"
import { fetchExpenses } from "./api"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import ExpenseChart from "./components/ExpenseChart"
import "./styles.css"

const App = () => {
  const [expenses, setExpenses] = useState([])

  const loadExpenses = async () => {
    const fetchedExpenses = await fetchExpenses()
    setExpenses(fetchedExpenses)
  }

  useEffect(() => {
    loadExpenses()
  }, [])

  const handleExpenseAdded = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense])
  }

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onExpenseAdded={handleExpenseAdded} />
      <ExpenseList expenses={expenses} />
      <ExpenseChart expenses={expenses} />
    </div>
  )
}

export default App
