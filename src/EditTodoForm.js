import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, editTodo, toggleEdit }) {
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEdit();
			}}
		>
			<TextField margin="normal" value={value} onChange={handleChange} fullWidth />
		</form>
	);
}

export default EditTodoForm;
