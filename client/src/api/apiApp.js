import axios from 'axios';

let serverURL  = `http://localhost:3000`;

export const initRequest = async (url, method, headers, data, progress, rest) => {
  headers = undefined;

  const response = await axios.request({
    url,
    method,
    headers,
    data,
    onUploadProgress: progress,
    ...rest,
  });
  return response.data;
};

export const appAPI = {
  getDataByType(type) {
    return initRequest(`${serverURL}/${type}`, 'get');
  },
  getDataById(data) {
    return initRequest(`${serverURL}/${data.type}/${data.id}`, 'get');
  },
  updateDataById(data) {
    return initRequest(`${serverURL}/${data.type}/${data.id}`, 'put', null, data.body);
  }
};