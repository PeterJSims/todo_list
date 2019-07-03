import React, { Fragment } from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
	return (
		<Paper>
			<List>
				{todos.map((todo, i) => (
					<Fragment>
						{i > 0 && <Divider />}
						<Todo
							id={todo.id}
							task={todo.task}
							key={todo.id}
							completed={todo.completed}
							removeTodo={removeTodo}
							toggleTodo={toggleTodo}
							editTodo={editTodo}
						/>
						{i < todos.length - 1 && <Divider />}
					</Fragment>
				))}
			</List>
		</Paper>
	);
}
export default TodoList;
