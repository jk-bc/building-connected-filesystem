import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_HOST;

export function post(url, data) {
  return axios.post(url, data)
}
export function postFile(
  url,
  data,
  handleUploadProgress,
) {
  return axios
    .request({
      method: "post",
      url,
      data,
      onUploadProgress: handleUploadProgress
    })
}
