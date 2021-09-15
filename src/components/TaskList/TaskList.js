import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import TaskItem from 'components/TaskItem';
import useTaskList from './hooks';
import useStyles from './TaskList.styles';

const TaskList = () => {
    const {
        tasks,
        totalCompleted,
        successStatus,
    } = useTaskList();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                Tasks Completed {totalCompleted} / {tasks ? tasks.length : 0}
            </div>
            {tasks && tasks.map(task => (
                <TaskItem task={task} />
            ))}
            <Snackbar open={successStatus === 'success'} autoHideDuration={2000}>
                <Alert severity="success">
                    Fetched tasks successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={successStatus === 'failed'} autoHideDuration={2000}>
                <Alert severity="error">
                    Error while fetching tasks. Please try again.
                </Alert>
            </Snackbar>
        </div>
    )
};

export { TaskList };