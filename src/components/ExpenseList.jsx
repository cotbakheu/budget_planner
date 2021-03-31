import ExpenseItems from './ExpenseItems'
import { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { BsSearch } from 'react-icons/bs'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)

    const [search, setSearch] = useState('')

    const expenseList = expenses.filter((el) => {
        if (search === '') {
            return el
        } else {
            return el.name.toLowerCase().includes(search.toLowerCase())
        }
    })

    return (
        <div>
            <form action="">
                <div className="input-group mb-3 w-50">
                    <input onChange={event => setSearch(event.target.value)} type="text" className="form-control" placeholder="Search Expenses..." aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
                    </div>
                </div>
            </form>
            <ul className='list-group mt-3'>
                {expenseList.map((el) => (
                    <ExpenseItems key={el.id} id={el.id} name={el.name} cost={el.cost} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList