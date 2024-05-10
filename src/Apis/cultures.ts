import { CultureDetailType } from "../types/type";
import { instance } from "./axios";

export const CultureDetail = async (cultureId: string) => {
    return await instance.get<CultureDetailType>(`/cultures/detail/${cultureId}`)
} 

export const createImgUrls = async (file: any): Promise<string[]> => {
    const formData = new FormData();
    formData.append("image", file);
    
    return await instance
        .post("/cultures/image", formData)
        .then((response) => response.data.imageUrls)
        .catch((error: any) => {
            console.error("이미지 URL 생성 에러: ", error.message);
        });
};

export const getCultureList = async () => {
  return await instance.get("/cultures");
};

export const getSearch = async (keyword: string) => {
    return await instance.get(`/cultures/search?keyword=${keyword}`);
  };
  