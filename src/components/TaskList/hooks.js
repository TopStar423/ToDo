import React, { useState, useEffect, useContext } from 'react';
import apiService from 'services/api.service';
import { Context } from 'store/store';

const useTaskList = () => {
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [successStatus, setSuccessStatus] = useState('');

    const [state, dispatch] = useContext(Context);
    const { tasks } = state;

    const fetchTasks = async () => {
        try {
            setSuccessStatus('');
            const res = await apiService.getTasks();
            dispatch({
                type: 'GET_TASKS',
                payload: res.data,
            });
            setSuccessStatus('success');
        } catch (err) {
            console.log(err);
            setSuccessStatus('failed');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        console.log('tasks: ', tasks);
        if (tasks) {
            setTotalCompleted(tasks.filter(task => task.done === true).length);
        }
    }, [tasks]);

    return {
        tasks,
        totalCompleted,
        successStatus,
    };
};

export default useTaskList;