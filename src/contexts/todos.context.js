import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
	{ id: 1, task: 'Enter kumite tournament', completed: true },
	{ id: 2, task: 'Regret joining tournament and hide', completed: false }
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	const [ todos, dispatch ] = useReducer(todoReducer, defaultTodos);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
