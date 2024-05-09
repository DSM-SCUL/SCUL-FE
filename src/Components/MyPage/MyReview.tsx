import styled from "styled-components"

interface Review {
    id: string;
    writer: string;
    content: string;
    createdAt: string;
    imageUrls: string[];
    placeName: string;
}

interface MyReviewBoxProps {
    review: Review;
}

export const MyReviewBox = ({ review }: MyReviewBoxProps) => {
    const { writer, content, createdAt, imageUrls, placeName } = review;

    return (
        <ReviewContainer>
            <PlaceName>{placeName}</PlaceName>
            <UserInfoWrapper>
                <UserInfo>{writer}</UserInfo>
                <UserInfo>{createdAt}</UserInfo>
            </UserInfoWrapper>
            <p>{content}</p>
            <ReviewPictureWrapper>
                {imageUrls.map((url, index) => (
                    <ReviewPicture key={index} src={url} alt={`Review ${index}`} />
                ))}
            </ReviewPictureWrapper>
        </ReviewContainer>
    );
};



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