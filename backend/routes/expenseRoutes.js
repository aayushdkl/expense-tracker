const express = require("express")
const Expense = require("../models/Expense")
const router = express.Router()

// POST /api/expenses  To add a new expense
router.post("/", async (req, res) => {
  const { amount, category, date } = req.body

  try {
    const newExpense = new Expense({
      amount,
      category,
      date,
    })

    const savedExpense = await newExpense.save()
    res.status(201).json(savedExpense)
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error adding expense", error })
  }
})

// GET /api/expenses to fetch all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find()
    res.json(expenses)
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error })
  }
})

module.exports = router
