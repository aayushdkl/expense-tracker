const express = require("express")
const app = express()
app.use(express.json())

const expenseRoutes = require("./routes/expenseRoutes")
const connectDB = require("./config/db")
connectDB()

const dotenv = require("dotenv")
dotenv.config()

app.use("/api/expenses", expenseRoutes)

app.get("/", (req, res) => {
  res.send("API is running...")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
