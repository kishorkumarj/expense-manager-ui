export const errorResponseHandler = (res: any) => {
  const response = {
    status: 500,
    hasError: true,
    message: '',
    data: {}
  }

  try{
    response.status = res?.response?.status || 500;
    response.message = res?.response?.data?.message || '';
    response.data = res?.response?.data || {};

  }catch(err){}

  return response;
}
