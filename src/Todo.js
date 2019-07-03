import React, { Fragment } from 'react';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
	const [ isEditing, toggle ] = useToggle(false);
	return (
		<ListItem>
			{isEditing ? (
				<EditTodoForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle} />
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
