import ExpenseItems from './ExpenseItems'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const ExpenseList = () => {

    const { expenses } = useContext(AppContext)

    return (
        <ul className='list-group mt-3'>
            {expenses.map((el) => (
                <ExpenseItems key={el.id} id={el.id} name={el.name} cost={el.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList