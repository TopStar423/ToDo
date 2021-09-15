import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import useInput from './hooks';
import useStyles from './Input.styles';

const Input = () => {
    const {
        task,
        successStatus,
        handleTaskInput,
        handleAddTask
    } = useInput();

    console.log('success status: ', successStatus);

    const classes = useStyles({ task });

    return (
        <div className={classes.root}>
            <input className={classes.input} placeholder="What should be done?" onChange={handleTaskInput}/>
            <div className={classes.btnAdd} onClick={handleAddTask}>
                <span className={classes.addIcon}>+</span>
            </div>
            <Snackbar open={successStatus === 'success'} autoHideDuration={2000}>
                <Alert severity="success">
                    Task is added successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={successStatus === 'failed'} autoHideDuration={2000}>
                <Alert severity="error">
                    Error while trying to add a task. Please try again.
                </Alert>
            </Snackbar>
        </div>
    )
};

export { Input };