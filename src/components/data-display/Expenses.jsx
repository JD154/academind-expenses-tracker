import ExpenseItem from '../data-display/ExpenseItem'
import EmptyState from '../general/EmptyState'

function Expenses({ expenses }) {
  return (
    <div className="h-full">
      {expenses.length ? (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} {...expense} />
        ))
      ) : (
        <EmptyState
          title="No items to show"
          subtitle="Please, try again in a moment"
        />
      )}
    </div>
  )
}

export default Expenses
