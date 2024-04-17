import styled from "styled-components"
import { DetailBox } from "../Components/Detail/DetailBox";
import { ReviewBox } from "../Components/Detail/ReviewBox";

export const DetailPage = () =>  {
    return (
        <Wrapper>
            <DetailWrapper>
                <Picture></Picture>
                <DetailBox />
            </DetailWrapper>
            <Border></Border>
            <ReviewHeaderWrapper>
                <div style={{fontSize: '24px', fontWeight: '600'}}>리뷰</div>
                <Button>리뷰 작성</Button>
            </ReviewHeaderWrapper>
            <ReviewBoxWrapper>
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
            </ReviewBoxWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetailWrapper = styled.div`
    display: flex;
    gap: 40px;
`;

const Picture = styled.div`
    width: 500px;
    height: 500px;
    background-color: #DADADA;
    border-radius: 8px;
`;

const Border = styled.div`
    width: 960px;
    height: 1px;
    background-color: #F3F3F3;
    margin-top: 40px;
`;

const ReviewHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 960px;
    margin-top: 28px;
`;

// 컴포넌트로 뺄 예정
const Button = styled.button`
    padding: 4px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main500};
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`;

const ReviewBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;