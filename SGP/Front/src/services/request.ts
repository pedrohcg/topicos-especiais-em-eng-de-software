/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, ResponseType } from "axios";
import { getLSToken } from "../utils/localStorage";

interface IRequest {
  loadingMessage?: string;
  timeout?: number;
  method:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "purge"
    | "PURGE"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;
  path: string;
  baseUrl?: string;
  data?: any;
  removeIp?: boolean;
  removeAppVersion?: boolean;
  basePath?: string;
  headers?: any;
  showErrorMessage?: boolean;
  responseType?: ResponseType;
}

export const request = (params: IRequest): Promise<any> => {
  const loadingMessage =
    params.loadingMessage !== undefined ? params.loadingMessage : "Carregando";
  const timeout = params.timeout !== undefined ? params.timeout : 10000;
  const method = params.method;
  const path = params.path;
  const headers = params.headers || {};
  const baseUrl = params.baseUrl;
  const basePath = params.basePath;
  const removeIp = params.removeIp ? params.removeIp : false;
  const removeAppVersion = params.removeAppVersion
    ? params.removeAppVersion
    : false;
  const showErrorMessage = params.showErrorMessage;
  const responseType = params.responseType;

  const data = params.data;

  const showLoadingTimeout: any = null;

  let base_url = import.meta.env.VITE_BASE_API_URL;

  if (baseUrl) {
    base_url = baseUrl;
  }

  return new Promise(async (resolve, reject) => {
    const config: AxiosRequestConfig = {
      method,
      url: `${base_url}/${path}`,
      timeout,
      headers: { ...params.headers },
    };

    const token = getLSToken();
    if (token && config.headers) {
      config.headers.Authorization = "Bearer " + token;
    }

    if (data) {
      config.data = data;
    }

    if (responseType) {
      config.responseType = responseType;
    }

    return axios(config)
      .then((response) => {
        clearTimeout(showLoadingTimeout);
        resolve(response.data);
      })
      .catch(async (error) => {
        clearTimeout(showLoadingTimeout);

        if (
          error.response?.data?.message === "Unauthorized" &&
          error.response?.data?.statusCode === 401
        ) {
          // await setJWTToken('null');
          console.log("SEM PERMISAO");
          return;
        }

        if (showErrorMessage) {
          if (error.response.data.message) {
            // alert('Ops');
          }
        }

        reject({
          error: error.response ? error.response.data : "timeout",
        });
      });
  });
};
