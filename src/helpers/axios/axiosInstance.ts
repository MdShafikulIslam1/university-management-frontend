import { authKey } from "@/constant/storageKey";
import { IGenericErrorResponse, IResponseSuccess } from "@/types";
import { getFromLocalStorage } from "@/utils/local-Storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      {
        config.headers.Authorization = accessToken;
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//@ts-ignore
instance.interceptors.response.use(
  function (response) {
    const responseObject: IResponseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    const errorResponseObject: IGenericErrorResponse = {
      statusCode: error?.data?.statusCode || 500,
      message: error?.data?.message || "something went wrong",
      errorMessages: error?.data?.message,
    };
    return errorResponseObject;
  }
);

export { instance };
