const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              <strong>Amount:</strong> Rs{expense.amount} -
              <strong> Category:</strong> {expense.category} -
              <strong> Date:</strong>{" "}
              {new Date(expense.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  )
}

export default ExpenseList
