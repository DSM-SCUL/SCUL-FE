import { useEffect, useState } from "react";
import styled from "styled-components"
import { Reviews } from "../../Apis/reviews";

interface Review {
    id: string;
    writer: string;
    content: string;
    createdAt: string;
    imageUrls: string[];
}

interface ReviewBoxProps {
   cultureId: string;
}

export const ReviewBox = ({cultureId}: ReviewBoxProps) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await Reviews(cultureId);
                setReviews(response.data.reviewList);
            } catch (error) {
                console.error("리뷰 가져오기 실패: ", error);
            }
        };
        fetchReviews();
    }, [cultureId]);

    return (
        <>
            {reviews.map((review, index) => (
                <ReviewContainer key={index}>
                    <UserInfoWrapper>
                        <UserInfo>{review.writer}</UserInfo>
                        <UserInfo>{review.createdAt}</UserInfo>
                    </UserInfoWrapper>
                    <p>{review.content}</p>
                    <ReviewPictureWrapper>
                        {review.imageUrls.map((imageUrl, idx) => (
                            <ReviewPicture key={idx} src={imageUrl}/>
                        ))}
                    </ReviewPictureWrapper>
                </ReviewContainer>
            ))}
        </>
    )
}

const ReviewContainer = styled.div`
    display: flex;
    padding: 16px 0px;
    flex-direction: column;
    width: 960px;
    justify-content: space-between;
    gap: 20px;
    > p {
        font-size: 20px;
        font-weight: 500;
    }
`;

const UserInfoWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const UserInfo = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray700};
`;

const ReviewPictureWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

const ReviewPicture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 4px;
`;