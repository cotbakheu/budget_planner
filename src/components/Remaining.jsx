import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Remaining = () => {

    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost
    }, 0)

    const remaining = budget - totalExpenses
    return (
        <div className='alert alert-success'>
            <span>Remaining: ${remaining}</span>
        </div>
    )
}

export default Remaining