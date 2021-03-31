import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'


const ExpenseTotal = () => {

    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost
    }, 0)

    const remaining = budget - totalExpenses
    const alertClass = remaining <= 0 ? 'alert alert-danger'
        : remaining <= 100 ? 'alert alert-warning' : 'alert alert-primary'
    return (
        <div className={alertClass}>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;