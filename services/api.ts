"use client";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface IAPIResponse<T> {
  data: T;
  message: string;
  status: boolean;
}

const API = async <T, P>(type: string, url: string, data: P) => {
  //get token
  const obj = {
    url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
    method: type,
    data: data,
  } as AxiosRequestConfig;
  try {
    const apiResponse = await axios(obj);
    return apiResponse as AxiosResponse<IAPIResponse<T>>;
  } catch (err: any) {
    return err;
  }
};

export default API;
