import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api/${process.env.REACT_APP_API_VERSION}/`,
})

export default axiosInstance
