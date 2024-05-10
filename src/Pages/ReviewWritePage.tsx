import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { PictureBox } from "../Components/ReviewWrite/PictureBox";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CultureListType } from "../types/type";
import { ReviewWrite } from "../Apis/reviews";
import { CultureDetail, createImgUrls } from "../Apis/cultures";
import { CultureDetailType } from "../types/type";

export const ReviewWritePage = () => {
  const [pictureAdded, setPictureAdded] = useState(false);
  const [reviewContent, setReviewContent] = useState("");
  const [, setList] = useState<CultureListType[]>([]);
  const [cultureDetail, setCultureDetail] = useState<CultureDetailType | null>();
  const {id} = useParams<{id: string}>();
  const reviewWriteMutation = ReviewWrite(id || '');

  useEffect(() => {
    setList([]);
  }, []);

  const handlePictureAdded = () => {
    setPictureAdded(true);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewContent(e.target.value);
  };

  const handleSubmit = async () => {
    const imageFiles: File[] = [];
    const imageUrls = await Promise.all(
      imageFiles.map((file) => createImgUrls(file))
    );  

    console.log({
      content: reviewContent,
      imageUrls: imageUrls.flat(),
      placeName: cultureDetail?.placeName
    });
    
    reviewWriteMutation.mutate({
      content: reviewContent,
      imageUrls: imageUrls.flat(),
      placeName: cultureDetail?.placeName
    });
  };

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
        <ReviewWriteWrapper>
          <p>리뷰 작성하기</p>
          <PlaceNameBox>
            <PlaceNameTitle>방문한 곳</PlaceNameTitle>
            <PlaceName>{cultureDetail?.placeName}</PlaceName>
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
        <Link to={`/cultures/detail/${id}`}>
          <SubmitButton
            pictureAdded={reviewContent === ""}
            disabled={reviewContent.length === 0}
            onClick={handleSubmit}
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
  background-color: ${({ theme, pictureAdded  }) =>
    pictureAdded ? theme.colors.gray200 : theme.colors.main500};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
