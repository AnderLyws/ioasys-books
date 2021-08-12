import axios from 'axios';

const mock = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

export default mock;