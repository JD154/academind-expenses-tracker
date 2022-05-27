function ExpenseItem({ date, amount, description, transaction }) {
  console.log(transaction)
  return (
    <div className="card bg-neutral shadow-lg my-6 w-full hover:shadow-xl transition-shadow">
      <div className="card-body flex flex-row items-center justify-between">
        <div>
          <p className="text-xs">{date}</p>
          <h2 className="card-title text-2xl">{description}</h2>
        </div>
        <div>
          {transaction === 'income' ? (
            <p className="text-xl text-green-500">+${amount}</p>
          ) : (
            <p className="text-xl text-red-500">-${amount}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem
