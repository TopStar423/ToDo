import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'x-api-token': process.env.REACT_APP_X_API_TOKEN,
    'x-client-token': process.env.REACT_APP_X_CLIENT_TOKEN,
};

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = {
    getTasks: () => {
        return axios.get(`${API_BASE_URL}/item`, { headers });
    },

    createTask: ({ task }) => {
        return axios.post(`${API_BASE_URL}/item`, { text: task }, { headers });
    },

    markTaskDone: ({ taskId }) => {
        return axios.post(`${API_BASE_URL}/item/${taskId}`, { done: true }, { headers });
    },
};

export default apiService;