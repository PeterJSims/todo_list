import React, { useContext, Fragment, memo } from 'react';
import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DispatchContext } from './contexts/todos.context';

function Todo({ id, task, completed }) {
	const dispatch = useContext(DispatchContext);
	const [ isEditing, toggle ] = useToggle(false);
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm id={id} task={task} toggleEdit={toggle} />
			) : (
				<Fragment>
					<Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id: id })} />
					<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task} </ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Delete" onClick={() => dispatch({ type: 'REMOVE', id: id })}>
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

export default memo(Todo);
