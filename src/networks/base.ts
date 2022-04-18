import axios from 'axios';
import type { AxiosPromise, AxiosRequestConfig } from 'axios';

export const baseGet = (config: AxiosRequestConfig): AxiosPromise => {
  const instance = axios.create({
    baseURL: 'http://localhost:7001',
    method: 'get',
  })
  return instance(config)
}

export const basePost = (config: AxiosRequestConfig): AxiosPromise => {
  const instance = axios.create({
    baseURL: 'http://localhost:7001',
    method: 'post',
  })
  return instance(config)
}