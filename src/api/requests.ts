import axios from 'axios';
import Swal from 'sweetalert2';
import { api } from '../common/constants';
import { finishLoader, startLoader } from './loader';

/**
 * Here i create axios instance to work with requests.
 */
const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123',
  },
});

/**
 * Here i start loader so it starts right before request is sent.
 */
instance.interceptors.request.use(
  (config) => {
    startLoader();
    return config;
  },
  (error) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error,
    });

    return Promise.reject(error);
  }
);

/**
 * Here i finish loader. So it finishes right after response recieve.
 */
instance.interceptors.response.use((res) => {
  finishLoader();
  return res.data;
});

export default instance;
