import { Methods } from "../../constants/methods";
import { request } from "../request";

const createUser = async (email: string, password: string): Promise<any> => {
  return request({
    showErrorMessage: true,
    method: Methods.POST,
    path: `user/`,
    data: {
      email,
      password,
    },
  });
};

const loginUser = async (email: string, password: string): Promise<any> => {
  return request({
    showErrorMessage: true,
    method: Methods.POST,
    path: `login/`,
    data: {
      email,
      password,
    },
  });
};

export { createUser, loginUser };
