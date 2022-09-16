import axios from 'axios'

export const getWords = (digits: string) => {
  const baseURL = window.location.href
  return axios.get(`${baseURL}api/t9/${digits}`)
}