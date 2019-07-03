import React, { useState } from 'react';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
	const starterTodos = [
		{ id: 1, task: 'Walk abbie', completed: false },
		{ id: 2, task: 'Recover from fight', completed: false },
		{ id: 3, task: 'Fight Subzero', completed: true }
	];
	const [ todos, setTodos ] = useState(starterTodos);
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">Todos (now with hooks!)</Typography>
				</Toolbar>
			</AppBar>
			<TodoList todos={todos} />
		</Paper>
	);
}

export default TodoApp;

//  Structure to build:
// -TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem
// todo contains: id, task, completed
