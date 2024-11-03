// src/components/ExpenseForm.jsx
import { useState } from "react"
import { addExpense } from "../api"

const ExpenseForm = ({ onExpenseAdded }) => {
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const expenseData = { amount: Number(amount), category, date }

    try {
      const newExpense = await addExpense(expenseData)
      onExpenseAdded(newExpense) // Notify parent component
      setAmount("")
      setCategory("")
      setDate("")
    } catch (error) {
      console.error("Error adding expense:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
