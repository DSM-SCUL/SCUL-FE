import styled from "styled-components"


export const MyReviewBox = () => {
    return (
        <ReviewContainer>
            <PlaceName>서울 시립 미술관에서</PlaceName>
            <UserInfoWrapper>
                <UserInfo>강*민</UserInfo>
                <UserInfo>2024. 04. 15</UserInfo>
            </UserInfoWrapper>
            <p>
                아니 여기 자주 가는데 너무 좋아ㅛㅜㅜ 전 진짜 여기 맨날 가고 싶어요 
                진짜 사랑해요 살ㅇ해요 아이 러브 쏘 부산 구다상;
                사랑해요 사랑해요 아이 러브 쏘 김치 구다사이 고구마 구다사ㅣ
            </p>
            <ReviewPictureWrapper>
                <ReviewPicture></ReviewPicture>
                <ReviewPicture></ReviewPicture>
                <ReviewPicture></ReviewPicture>
                <ReviewPicture></ReviewPicture>
            </ReviewPictureWrapper>
        </ReviewContainer>
    )
}


const ReviewContainer = styled.div`
    display: flex;
    padding: 20px 0px;
    flex-direction: column;
    width: 960px;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 6px solid ${({theme}) => theme.colors.gray50};
    > p {
        font-size: 20px;
        font-weight: 500;
    }
`;

const PlaceName = styled.p`
    font-size: 20px;
    font-weight: 500;
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