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

interface TransactionQueryInterface {
  account_id?: string,
  category?: string,
  transaction_type?: string,
  start_date?: Date,
  end_date?: Date,
  date?: Date,
}

export const getUserDetailsApi = async () => {
  return await API.get('/user').catch(err => errorResponseHandler(err)) 
}

export const LoginApi = async (formData: loginInterface) => {
  return await API.post('/auth/obtain-token', formData)
    .catch(err => errorResponseHandler(err)) 
}

export const logoutApi = async () => {}

export const registerUserApi =  async (formData: registerInterface) => {
  return await API.post('/auth/register', formData)
    .catch(err => errorResponseHandler(err))
}

export const getTransactionsAPI = async (query: TransactionQueryInterface = {}) => {
  const params = {...query}
  return await API.get('/user/transaction', {params: params})
    .catch(err => errorResponseHandler(err))
}

export const getAccountsAPI = async (type:string='') => {
  const params:any = {};
  if (type){
    params.type=type;
  }
  return await API.get('/user/account', {params: params})
    .catch(err => errorResponseHandler(err))
}