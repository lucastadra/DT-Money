import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dt-money-lucastadra16.netlify.app/api',
});
