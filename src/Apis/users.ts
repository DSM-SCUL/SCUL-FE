import { LoginType, SignupType } from "../types/type";
import { instance } from "./axios";

export const login = async (data: LoginType) => {
  console.log(data);

  return await instance.post("/users/login", data);
};

export const signup = async (data: SignupType) => {
  return await instance.post("/users/signup", data);
};
