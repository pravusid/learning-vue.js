import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vue-test-idpravus.firebaseio.com',
});
instance.defaults.headers.common['Authorization'] = 'token';
instance.defaults.headers.get['Accepts'] = 'application/json';

export default instance;
