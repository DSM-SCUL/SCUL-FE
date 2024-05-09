import { Header } from "../Components/Common/Header";
import styled from "styled-components";
import { MyReviewBox } from "../Components/MyPage/MyReview";
import { useEffect, useState } from "react";
import { MyReview } from "../Apis/reviews";
import { CultureListType } from "../types/type";

interface Review {
  id: string;
  writer: string;
  content: string;
  createdAt: string;
  imageUrls: string[];
  placeName: string;
}

export const MyReviewPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [list, setList] = useState<CultureListType[]>([]);

  useEffect(() => {
    setList([]);
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await MyReview();
        setReviews(response.data.reviewList);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <ReviewHeader>
          <p>내가 작성한 리뷰</p>
          <Line></Line>
        </ReviewHeader>
        {reviews.map((review) => (
          <MyReviewBox key={review.id} review={review} />
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-top: 128px;
  > p {
    font-size: 32px;
    font-weight: 600;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 960px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
