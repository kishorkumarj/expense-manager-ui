import API from './axiosInstance';
import { errorResponseHandler } from './responseHandler';

export interface loginInterface {
  username: string,
  password: string
}

export const getUserDetailsApi = async () => {
  return {}
}

export const LoginApi = async (formData: loginInterface) => {
  const res: any = await API.post('api/auth/obtain-token', formData).catch(err => errorResponseHandler(err))
  console.log(res)
}

export const logoutApi = async () => {

}

export const registerUserApi =  async (formData: any) => {

}