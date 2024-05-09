import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { PictureBox } from "../Components/ReviewWrite/PictureBox";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CultureListType } from "../types/type";
import { ReviewWrite } from "../Apis/reviews";
import { createImgUrls } from "../Apis/cultures";

export const ReviewWritePage = () => {
  const [pictureAdded, setPictureAdded] = useState(false);
  const [reviewContent, setReviewContent] = useState("");
  const [list, setList] = useState<CultureListType[]>([]);
    const reviewWriteMutation = ReviewWrite('reviewId');

  const handlePictureAdded = () => {
    setPictureAdded(true);
  };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewContent(e.target.value);
    };

    const handleSubmit = async () => {
        if (!pictureAdded || reviewContent === "" ) return;

        const imageFiles: File[] = []
        const imageUrls = await Promise.all(imageFiles.map(file => createImgUrls(file)));

        reviewWriteMutation.mutate({
            content: reviewContent,
            imageUrls: imageUrls.flat()
        });
    };

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
                        <Content 
                            placeholder="리뷰의 내용을 작성해주세요"
                            onChange={handleContentChange}
                        ></Content>
                    </ContentBox>
                    <PictureBox onPictureAdded={handlePictureAdded} />
                </ReviewWriteWrapper>
                <Link to={'/'}>
                    <SubmitButton
                        pictureAdded={pictureAdded && reviewContent !== ""}
                        disabled={!pictureAdded || reviewContent === ""}
                        onClick={handleSubmit}
                    >리뷰 등록하기
                    </SubmitButton>
                </Link>
            </Wrapper>
        </>
    )
}
  useEffect(() => {
    setList([]);
  }, []);

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
              <p style={{ fontSize: "16px", fontWeight: "500" }}>내용</p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#FF5271",
                }}
              >
                *
              </p>
            </div>
            <Content
              placeholder="리뷰의 내용을 작성해주세요"
              onChange={handleContentChange}
            ></Content>
          </ContentBox>
          <PictureBox onPictureAdded={handlePictureAdded} />
        </ReviewWriteWrapper>
        <Link to={"/"}>
          <SubmitButton
            pictureAdded={pictureAdded && reviewContent !== ""}
            disabled={!pictureAdded || reviewContent === ""}
          >
            리뷰 등록하기
          </SubmitButton>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-top: calc(94px + 64px);
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
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
`;

const PlaceNameTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray400};
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
  background-color: ${({ theme }) => theme.colors.gray50};
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const SubmitButton = styled.button<{
  pictureAdded: boolean;
  disabled: boolean;
}>`
  width: 520px;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme, pictureAdded, disabled }) =>
    pictureAdded
      ? disabled
        ? theme.colors.gray200
        : theme.colors.main500
      : theme.colors.gray200};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
