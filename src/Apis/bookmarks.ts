import { instance } from "./axios";

export const bookmark = async (cultureId: string) => {
  return await instance.post(`/bookmarks/${cultureId}`);
};
