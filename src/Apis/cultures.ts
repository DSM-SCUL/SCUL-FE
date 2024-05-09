import { CultureDetailType } from "../types/type";
import { instance } from "./axios";

export const CultureDetail = async (cultureId: number) => {
    return await instance.get<CultureDetailType>(`/cultures/detail/${cultureId}`)
} 

export const createImgUrls = (file: File): Promise<string[]> => {
    const formData = new FormData();
    formData.append("image", file);
    
    return instance
        .post("/cultures/image", formData)
        .then((response) => response.data.imageUrls)
        .catch((error: any) => {
            console.error("이미지 URL 생성 에러: ", error.message);
            return [];
        });
};

export const getCultureList = async () => {
  return await instance.get("/cultures");
};