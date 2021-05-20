import { AxiosResponse } from 'axios';
import axios from './axios';

export const fetchData = (): Promise<AxiosResponse> => axios.get('/').then((res) => res.data.data);

export const fetchSample = (): Promise<AxiosResponse> => axios.get('/').then((res) => res.data);
