import API from './axiosInstance';
import { errorResponseHandler } from './responseHandler';

export interface loginInterface {
  username: string,
  password: string
}

export interface registerInterface {
  email: string,
  firstName: string,
  lastName: string,
  password: string
}

export const getUserDetailsApi = async () => {
  return await API.get('/user').catch(err => errorResponseHandler(err)) 
}

export const LoginApi = async (formData: loginInterface) => {
  return await API.post('/auth/obtain-token', formData).catch(err => errorResponseHandler(err)) 
}

export const logoutApi = async () => {}

export const registerUserApi =  async (formData: registerInterface) => {
  return await API.post('/auth/register', formData).catch(err => errorResponseHandler(err))
}