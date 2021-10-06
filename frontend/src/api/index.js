import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchMonument = (name) => API.get(`/monument/${name}`);
