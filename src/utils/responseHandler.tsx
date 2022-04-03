export const errorResponseHandler = (res: any) => {
  console.log(res)
  const response = {
    status: 500,
    hasError: true,
    message: '',
    data: {}
  }

  try{
    response.status = res?.response?.status || 500;

  }catch(err){}

  return response;
}
