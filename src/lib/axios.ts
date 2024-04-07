import axios, { type AxiosResponse } from 'axios';

import { env } from './env';

const instance = axios.create({
  //TODO : 백엔드와 논의후 env.local baseAPIURL 추가 해야합니다. 현재 ""로 되어있어요
  baseURL: env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },

  timeout: 10000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  function fullfilledRequestInterceptor(config) {
    // TODO 요청이 전달되기 전에 작업 수행
    return config;
  },
  function rejectedRequestInterceptor(error) {
    // TODO 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  function fullfilledResponseInterceptor(response) {
    // TODO 응답 데이터가 있는 작업 수행
    return response;
  },
  function rejectedResponseInterceptor(error) {
    // TODO 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T, AxiosResponse<T>>(...args);
};

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T, AxiosResponse<T>>(...args);
};

export const put = <T>(...args: Parameters<typeof instance.put>) => {
  return instance.put<T, AxiosResponse<T>>(...args);
};

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T, AxiosResponse<T>>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, AxiosResponse<T>>(...args);
};
