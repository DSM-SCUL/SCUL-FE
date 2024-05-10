import { ReviewWriteType } from "../types/type"
import { instance } from "./axios"
import { useMutation } from "react-query"

export const ReviewWrite = (cultureId: string) => {
    return useMutation(
        async (reviewWriteData: ReviewWriteType) => {
            const {data} = await instance.post(`/reviews/${cultureId}`, reviewWriteData);
            return data;
        },
        {
            onError: (error: Error) => {
                console.error("리뷰 작성 에러: ", error.message);
            }
        }
    )
}

export const MyReview = async () => {
    return await instance.get('/reviews');
}

export const Reviews = async (cultureId: string) => {
    return await instance.get(`/reviews/${cultureId}`)
}