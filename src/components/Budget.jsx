import { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)

    const [edit, setEdit] = useState(false)
    const [newBudget, setBugdet] = useState(budget)

    const onEdit = () => {
        setEdit(true)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setEdit(false)
        const confirm = window.confirm('Do you want to add budget?')
        if (confirm) {
            dispatch({
                type: 'ADD_BUDGET',
                payload: budget + newBudget
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <div className={edit ? 'd-none' : 'd-flex justify-content-between align-items-center'}>
                <span>Budget: ${budget}</span>
                <button onClick={onEdit} className='btn btn-primary'>Edit</button>
            </div>
            <div className={edit ? 'd-block' : 'd-none'}>
                <form className='d-flex justify-content-between align-items-center' onSubmit={onSubmit}>
                    <div className='form-group mt-2'>
                        <input value={newBudget} className='form-control' type="number" onChange={event => setBugdet(event.target.value)} />
                    </div>
                    <div >
                        <button type='submit' className='btn btn-primary'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Budget