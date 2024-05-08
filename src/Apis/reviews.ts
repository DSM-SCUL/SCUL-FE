import { ReviewWriteType } from "../types/type"
import { instance } from "./axios"
import { useMutation } from "react-query"

export const ReviewWrite = (reviewId: string) => {
    return useMutation(
        async (reviewWriteData: ReviewWriteType) => {
            const {data} = await instance.post(`/reviews/${reviewId}`, reviewWriteData);
            return data;
        },
        {
            onError: (error: Error) => {
                console.error("리뷰 작성 에러: ", error.message);
            }
        }
    )
}