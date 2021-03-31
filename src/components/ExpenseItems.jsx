import { TiDelete } from 'react-icons/ti'

const expenseItems = (props) => {

    return (
        <div className='row col-sm-8 border py-2'>
            <div className='col-10'>
                <span>{props.name}</span>
            </div>
            <div className='col-1'>
                <span className='badge badge-primary badge-pill'>${props.cost}</span>
            </div>
            <div className='col-1'>
                <TiDelete size='1.5em' />
            </div>
        </div>
    )
}

export default expenseItems