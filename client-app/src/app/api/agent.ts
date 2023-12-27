import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) =>
    axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  list: () => requests.get<{ data: Activity[] }>("/activities"),
  details: (id: string) =>
    requests.get<{ data: Activity }>(`/activities/${id}`),
  create: (activity: Activity) =>
    requests.post<{ message: string }>("/activities", activity),
  update: (activity: Activity) =>
    requests.put<{ message: string }>(`/activities/${activity.id}`, activity),
  delete: (id: string) =>
    requests.del<{ message: string }>(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
