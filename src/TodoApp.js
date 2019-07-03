import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';

function TodoApp() {
	const starterTodos = [
		{ id: 1, task: 'Walk abbie', completed: false },
		{ id: 2, task: 'Fight Subzero', completed: true },
		{ id: 3, task: 'Recover from fight', completed: false }
	];
	const [ todos, setTodos ] = useState(starterTodos);
	const addTodo = (newTodoText) => {
		setTodos([ ...todos, { id: uuid(), task: newTodoText, completed: false } ]);
	};
	const removeTodo = (todoId) => {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
		setTodos(updatedTodos);
	};

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
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList removeTodo={removeTodo} todos={todos} toggleTodo={toggleTodo} />
				</Grid>
			</Grid>
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
