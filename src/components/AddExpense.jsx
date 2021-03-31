import { useContext} from 'react'
import { AppContext } from '../Context/AppContext'

const AddExpenseForm = () => {

    // const { dispatch } = useContext(AppContext)

    

    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                    ></input>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                    ></input>
                </div>

            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;