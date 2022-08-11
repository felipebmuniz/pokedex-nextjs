// Importação do AXIOS
// import axios from 'axios';
const axios = require('axios').default;

// Definição da base url de acesso a API
export const baseURL: string = 'https://pokeapi.co/api/v2/';

// Definindo para a variável api o esqueleto de acesso na baseURL
export const api = axios.create({
  baseURL,
});
