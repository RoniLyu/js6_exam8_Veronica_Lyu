import axios from '.axios';

const axiosApi = axios.create({
    baseURL: 'https://js6-quotes-lyu.firebaseio.com/'
});

export default axiosApi;