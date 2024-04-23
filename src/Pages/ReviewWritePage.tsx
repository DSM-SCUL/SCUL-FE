import styled from "styled-components"
import { Header } from "../Components/Header";
import { PictureBox } from "../Components/ReviewWrite/PictureBox";

export const ReviewWritePage = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <ReviewWriteWrapper>
                    <p>리뷰 작성하기</p>
                    <PlaceNameBox>
                        <PlaceNameTitle>방문한 곳</PlaceNameTitle>
                        <PlaceName>서울 시립 미술관</PlaceName>
                    </PlaceNameBox>
                    <ContentBox>
                        <div>
                            <p style={{fontSize: '16px', fontWeight: '500'}}>내용</p>
                            <p style={{fontSize: '16px', fontWeight: '500', color:'#FF5271'}}>*</p>
                        </div>
                        <Content placeholder="리뷰의 내용을 작성해주세요"></Content>
                    </ContentBox>
                    <PictureBox />
                </ReviewWriteWrapper>
                <SubmitButton>리뷰 등록하기</SubmitButton>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: calc(100vh - 64px);
`;

const ReviewWriteWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    gap: 44px;
    width: 520px;
    height: 600px;
    > p {
        font-size: 32px;
        font-weight: 600;
    }
`;

const PlaceNameBox = styled.div`
    width: 520px;
    height: 56px;
    display: flex;
    padding: 16px 20px;
    background-color: ${({theme}) => theme.colors.gray50};
    border-radius: 8px;
`;

const PlaceNameTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray400};
    margin-right: auto;
`;

const PlaceName = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: black;
    margin-left: auto;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    > div {
        display: flex;
    }
`;

const Content = styled.textarea`
    height: 220px;
    background-color: ${({theme}) => theme.colors.gray50};
    border: none;
    border-radius: 8px;
    outline: none;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 500;
    resize: none;
    
    ::placeholder {
        color: ${({theme}) => theme.colors.gray400};
    }
`;

const SubmitButton = styled.button`
    width: 520px;
    height: 56px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.main500};
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: white;
`;