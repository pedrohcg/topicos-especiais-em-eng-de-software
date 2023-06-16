import { Methods } from "../../constants/methods";
import { request } from "../request";

const getAllPavements = async (): Promise<any> => {
  return request({
    showErrorMessage: true,
    method: Methods.GET,
    path: `pavements`,
  });
};

const createPavement = async (payload: any): Promise<any> => {
  return request({
    showErrorMessage: true,
    method: Methods.POST,
    path: `pavements`,
    data: {
      ...payload,
    },
  });
};

const updatePavementById = async (
  pavementId: string,
  payload: any
): Promise<any> => {
  return request({
    showErrorMessage: true,
    method: Methods.PATCH,
    path: `pavements/${pavementId}`,
    data: {
      ...payload,
    },
  });
};

const deletePavementById = async (pavementId: string): Promise<any> => {
  return request({
    showErrorMessage: true,
    method: Methods.DELETE,
    path: `pavements/${pavementId}`,
  });
};

export {
  getAllPavements,
  createPavement,
  updatePavementById,
  deletePavementById,
};
