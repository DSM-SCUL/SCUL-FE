import { instance } from "./axios";

export const getCultureList = async () => {
  return await instance.get("/cultures");
};
