import styled from "styled-components"
import { Header } from "../Components/Common/Header";
import { DetailBox } from "../Components/Detail/DetailBox";
import { ReviewBox } from "../Components/Detail/ReviewBox";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CultureDetail } from "../Apis/cultures";
import { CultureDetailType } from "../types/type";

export const DetailPage = () =>  {
    const [cultureDetail, setCultureDetail] = useState<CultureDetailType | null>(null);
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        const fetchCultureDetail = async () => {
        try {
            const response = await CultureDetail(String(id));
            setCultureDetail(response.data);
        } catch (error) {
            console.error("문화 생활 상세보기 에러: ", error);
        }
        };

        fetchCultureDetail();
    }, [id]);
    
    return (
        <>
            <Header />
            <Wrapper>
                {cultureDetail ? (
                    <>
                        <DetailWrapper>
                            <Picture src={cultureDetail?.imageUrl}></Picture>
                            <DetailBox />
                        </DetailWrapper>
                        <Border></Border>
                        <ReviewHeaderWrapper>
                            <div style={{fontSize: '24px', fontWeight: '600'}}>리뷰</div>
                            <Link to={"/write"}>
                                <Button>리뷰 작성</Button>
                            </Link>
                        </ReviewHeaderWrapper>
                        <ReviewBoxWrapper>
                            <ReviewBox cultureId={cultureDetail!.id}/>
                        </ReviewBoxWrapper>
                    </>
                ) : (
                    <div>로딩 중...</div>
                )}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 108px;
`;

const DetailWrapper = styled.div`
    display: flex;
    gap: 40px;
`;

const Picture = styled.img`
    width: 500px;
    height: 500px;
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