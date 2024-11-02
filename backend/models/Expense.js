const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

module.exports = mongoose.model("Expense", expenseSchema)
