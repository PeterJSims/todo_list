import React, { useContext, Fragment } from 'react';
import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { TodosContext } from './contexts/todos.context';

function Todo({ id, task, completed }) {
	const { removeTodo, toggleTodo } = useContext(TodosContext);
	const [ isEditing, toggle ] = useToggle(false);
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm id={id} task={task} toggleEdit={toggle} />
			) : (
				<Fragment>
					<Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
					<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task} </ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
							<DeleteRoundedIcon />
						</IconButton>
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</Fragment>
			)}
		</ListItem>
	);
}

export default Todo;
