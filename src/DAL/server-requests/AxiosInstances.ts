import axios from 'axios';

// you will need to add .env with `REACT_APP_ENDPOINT` etc

export const backendServiceInstance = axios.create({
    baseURL: 'http://localhost:5189',
});
