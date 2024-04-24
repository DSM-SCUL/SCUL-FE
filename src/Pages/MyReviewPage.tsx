import { Header } from "../Components/Common/Header"
import styled from "styled-components";
import { MyReviewBox } from "../Components/MyPage/MyReview";

export const MyReviewPage = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <ReviewHeader>
                    <p>내가 작성한 리뷰</p>
                    <Line></Line>
                </ReviewHeader>
                <MyReviewBox />
                <MyReviewBox />
                <MyReviewBox />
            </Wrapper>
        </>
    )
}

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
    background-color: ${({theme}) => theme.colors.gray100};
`;