import { TiDelete } from 'react-icons/ti'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const ExpenseItems = (props) => {
    const { dispatch } = useContext(AppContext)

    const onDelete = () => {
        dispatch({
            type: 'DEL_EXPENSE',
            payload: props.id
        })
    }

    return (
        <div className='row col-sm-8 border py-2'>
            <div className='col-10'>
                <span>{props.name}</span>
            </div>
            <div className='col-1'>
                <span className='badge badge-primary badge-pill'>${props.cost}</span>
            </div>
            <div onClick={onDelete} className='col-1'>
                <TiDelete size='1.5em' />
            </div>
        </div>
    )
}

export default ExpenseItems