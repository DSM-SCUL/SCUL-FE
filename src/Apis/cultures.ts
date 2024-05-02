import { CultureDetailType } from "../types/type";
import { instance } from "./axios";

export const CultureDetail = async (cultureId: number) => {
    return await instance.get<CultureDetailType>(`/cultures/detail/${cultureId}`)
} 