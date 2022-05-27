import { useState, useEffect } from 'react'

import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'
import Expenses from './components/data-display/Expenses'
import Drawer from './components/navigation/Drawer'

function App() {
  const [expensesData, setExpensesData] = useState([])
  const [dataIsLoading, setDataIsLoading] = useState(false)

  useEffect(() => {
    setDataIsLoading(true)
    setTimeout(() => {
      setExpensesData([
        {
          amount: 1232.2,
          date: '12/16/1996',
          description: 'Testing',
          category: 'Food',
          transaction: 'income',
        },
        {
          amount: 1232.2,
          date: '12/16/1996',
          description: 'Testing',
          category: 'Food',
          transaction: 'expense',
        },
        {
          amount: 1232.2,
          date: '12/16/1996',
          description: 'Testing',
          category: 'Food',
          transaction: 'income',
        },
        {
          amount: 1232.2,
          date: '12/16/1996',
          description: 'Testing',
          category: 'Food',
          transaction: 'expense',
        },
      ])
      setDataIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="p-4 bg-base-100">
      <Header />
      <Drawer>
        {dataIsLoading ? (
          <p>Is loading</p>
        ) : (
          <Expenses expenses={expensesData} />
        )}
      </Drawer>
      <Footer />
    </div>
  )
}

export default App
