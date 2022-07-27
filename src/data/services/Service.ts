// Configurar a biblioteca axios

import axios, { Axios, AxiosInstance } from "axios";

const NodeAPI:AxiosInstance = axios.create({
    timeout: 30000,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Expose-Headers': 'Access-Control-',
        'Access-Control-Allow-Headers': 
        'Access-Control-, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow_Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Origin': '*',
        Allow: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
       
    },
})
export { NodeAPI }