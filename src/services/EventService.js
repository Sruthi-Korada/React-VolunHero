import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8001/api'
});

export default {
    getVolunteers(){
        debugger
        return apiClient.get('/services/withuserinfo')
    }
}