import axios from "axios";

const instance = axios.create({

  baseURL: "http://localhost:3000"

})

export const api = {

  get(endpoint) {
    return instance.get(endpoint)
  },

  put(endpoint, body) {
    return instance.put(endpoint, body)
  },

  post(endpoint, body) {
    return instance.post(endpoint, body)
  },

  delete(endpoint) {
    return instance.delete(endpoint)
  }

};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}