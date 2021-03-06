import { createContext, useReducer } from "react";

const AppReducer = (state, actions) => {
	switch (actions.type) {
		case 'ADD_EXPENSE':
			return 	{
				...state, 
				expenses: [...state.expenses, actions.payload]
			};
		case 'DEL_EXPENSE': 
			return {
				...state,
				expenses: state.expenses.filter((el)=> el.id !== actions.payload)
			};
		case 'ADD_BUDGET': 
			return {
				...state,
				budget: actions.payload
			}
		default:
			return state;
	}
}

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [state, dispatch]= useReducer(AppReducer, initialState)
	return (
		<AppContext.Provider value={{
			budget: state.budget,
			expenses: state.expenses,
			dispatch
		}}>
			{props.children}
		</AppContext.Provider>
	)
}

