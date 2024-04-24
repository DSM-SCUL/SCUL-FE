import { LoginType } from "../types/type";
import { instance } from "./axios";

export const login = async (data: LoginType) => {
  console.log(data);

  return await instance.post("/users/login", data);
};
