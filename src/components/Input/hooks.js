import React, { useState, useContext } from 'react';
import apiService from 'services/api.service';
import { Context } from 'store/store';

const useInput = () => {
    const [task, setTask] = useState('');
    const [successStatus, setSuccessStatus] = useState('');

    const [state, dispatch] = useContext(Context);

    const handleTaskInput = e => {
        setTask(e.target.value);
    };

    const handleAddTask = async () => {
        try {
            setSuccessStatus('');
            const res = await apiService.createTask({ task });
            dispatch({
                type: 'ADD_TASK',
                payload: res.data
            });
            setTask('');
            setSuccessStatus('success');
        } catch (err) {
            setSuccessStatus('failed');
            console.log(err);
        }
    };

    return {
        task,
        successStatus,
        handleTaskInput,
        handleAddTask,
    };
};

export default useInput;