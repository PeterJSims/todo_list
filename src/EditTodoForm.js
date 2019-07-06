import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEdit }) {
	const { dispatch } = useContext(TodosContext);
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDIT', id: id, newTask: value });
				reset();
				toggleEdit();
			}}
			style={{ marginLeft: '.9rem', width: '60%' }}
		>
			<TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
		</form>
	);
}

export default EditTodoForm;
