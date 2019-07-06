import React, { useContext, Fragment } from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
	const todos = useContext(TodosContext);
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, i) => (
						<Fragment key={i}>
							{i > 0 && <Divider />}
							<Todo {...todo} key={todo.id} />
							{i < todos.length - 1 && <Divider />}
						</Fragment>
					))}
				</List>
			</Paper>
		);
	return null;
}
export default TodoList;
