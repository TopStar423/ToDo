import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import useTaskItem from './hooks';
import useStyles from './TaskItem.styles';

const TaskItem = ({ task }) => {
    const { successStatus, handleMarkDone } = useTaskItem();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {task.done ? (
                <CheckBoxIcon className={classes.iconDone} />
            ) : (
                <CheckBoxOutlineBlankIcon className={classes.iconUndone} onClick={() => handleMarkDone(task.id)} />
            )}
            <span className={classes.taskText}>
                {task.text}
            </span>
            <Snackbar open={successStatus === 'success'} autoHideDuration={2000}>
                <Alert severity="success">
                    Task is completed successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={successStatus === 'failed'} autoHideDuration={2000}>
                <Alert severity="error">
                    Error while completing a task. Please try again.
                </Alert>
            </Snackbar>
        </div>
    )
};

export { TaskItem };