//The most important bit of today
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

// Fetch all expenses
export const fetchExpenses = async () => {
  const response = await axios.get(`${API_URL}/expenses`)
  return response.data
}

// Add a new expense
export const addExpense = async (expenseData) => {
  const response = await axios.post(`${API_URL}/expenses`, expenseData)
  return response.data
}
