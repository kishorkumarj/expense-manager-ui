import axios from 'axios';
import * as siteConfig from '../config';
import * as constants from './constants';

const API = axios.create({
  baseURL: siteConfig.default.apiURL,
  timeout: siteConfig.default.apiTimeout,
  withCredentials: true,
  headers:{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    withCredentials: true
  }
});


API.interceptors.request.use(
  config => {
      const token = localStorage.getItem(constants.authToken);
      if (token && config.url && config.url !== '/obtain-token/') {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
  },
  error => {
      Promise.reject(error)
});

API.interceptors.response.use( response => {
  return response
},
error => {
  if (!error.response){
      return Promise.reject(error);
  }

  try{
    if (error.response.status === 401) {
      // If unauthorized response, then remove the token and reload the page.
      localStorage.removeItem(constants.authToken);
      window.location.reload();
    }
  }catch(err){}

  return Promise.reject(error);
});

export default API;
