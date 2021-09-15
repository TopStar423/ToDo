import React, { useState, useContext } from 'react';
import apiService from 'services/api.service';
import { Context } from 'store/store';

const useTaskItem = () => {
    const [successStatus, setSuccessStatus] = useState('');

    const [state, dispatch] = useContext(Context);

    const handleMarkDone = async (taskId) => {
        try {
            setSuccessStatus('');
            await apiService.markTaskDone({ taskId });
            dispatch({
                type: 'MARK_DONE',
                payload: taskId
            });
            setSuccessStatus('success');
        } catch (err) {
            setSuccessStatus('failed');
            console.log(err);
        }
    };

    return {
        successStatus,
        handleMarkDone,
    };
};

export default useTaskItem;