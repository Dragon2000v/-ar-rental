import axios from 'axios';

export const mockAPI = axios.create({
  baseURL: 'https://65e83f374bb72f0a9c4eb8c8.mockapi.io/api/',
});

export const limitForPage = 12;
