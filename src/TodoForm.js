import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function TodoForm({ addTodo }) {
	const [ value, handleChange, reset ] = useInputState('');
	return (
		<Paper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	);
}

export default TodoForm;
