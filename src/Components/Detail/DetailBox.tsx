import styled from "styled-components";
import { MapBox } from "./MapBox";
import BookMarkIcon from "../../Assets/img/SVG/BookMark.svg";
import BookMarkColorIcon from "../../Assets/img/SVG/BookMarkColor.svg";
import { useState } from "react";
import { CultureDetail } from "../../Apis/cultures";
import { useEffect } from "react";
import { CultureDetailType } from "../../types/type";
import { useParams } from "react-router-dom";
import { bookmark } from "../../Apis/bookmarks";



export const DetailBox = () => {
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

  const toggleBookmark = (id: string | undefined) => {
    if (id) {
      bookmark(id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <DetailContainer>
      <TitleWrapper>
        <Title>{cultureDetail?.cultureName}</Title>
        <BookMark
            src={cultureDetail?.isBookMarked ? BookMarkColorIcon : BookMarkIcon}
            onClick={() => toggleBookmark(cultureDetail?.id)}
        />
      </TitleWrapper>
      <div>
        <div>{cultureDetail?.wantedPeople}</div>
      </div>
      <InputContainer>
        <InputBox>
          <InputTitle>전화번호</InputTitle>
          <Input>{cultureDetail?.phoneNumber}</Input>
        </InputBox>
        <InputBox>
          <InputTitle>이용시간</InputTitle>
          <Input>{cultureDetail?.serviceStartTime}~{cultureDetail?.serviceEndTime}</Input>
        </InputBox>
        <InputBox>
          <InputTitle>접수 일정</InputTitle>
          <Input>{cultureDetail?.applicationStartDate}~{cultureDetail?.applicationEndDate}</Input>
        </InputBox>
        <InputBox>
          <InputTitle>운영 일정</InputTitle>
          <Input>{cultureDetail?.serviceStartDate}~{cultureDetail?.serviceEndDate}</Input>
        </InputBox>
      </InputContainer>
      <UsageMapContainer>
        <UserFeeWrapper>
          <div style={{ fontSize: "16px", fontWeight: "500" }}>이용료</div>
          <Button
            style={{ color: "white", fontSize: "16px" }}
          >
            {cultureDetail?.ticketPrice}
          </Button>
        </UserFeeWrapper>
        <MapBox />
      </UsageMapContainer>
      <LinkWrapper>
        <div style={{ fontSize: "14px", fontWeight: "500" }}>
          더 자세한 정보는 홈페이지 링크를 확인하세요!
        </div>
        <LinkWrap href={cultureDetail?.cultureLink}>
          {cultureDetail?.cultureLink}
        </LinkWrap>
      </LinkWrapper>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 420px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 32px;
  color: black;
  font-weight: 600;
`;

const BookMark = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: 156px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray50};
  border-bottom: 4px solid ${({ theme }) => theme.colors.gray50};
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: 500;
`;

const Input = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 500;
`;

const UsageMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 250px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.gray50};
`;

const UserFeeWrapper = styled.div`
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  width: 52px;
  height: 27px;
  background-color: ${({ theme }) => theme.colors.main400};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinkWrap = styled.a`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main600};
  font-weight: 500;
  cursor: pointer;
`;