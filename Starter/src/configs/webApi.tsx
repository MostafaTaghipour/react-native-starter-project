
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/'
export const BASE_URL = 'https://api.themoviedb.org/3/movie/'
export const API_KEY = 'ec01f8c2eb6ac402f2ca026dc2d9b8fd'

import axios from 'axios'

const webApi = axios.create({
  baseURL: BASE_URL,
})

// webApi.defaults.headers.common["authorization"] =
//   "Basic YmlsbGIyMTEyOnl5ZXl5ZSQx";

export default webApi
