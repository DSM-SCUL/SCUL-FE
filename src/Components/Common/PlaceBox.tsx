import styled from "styled-components";
import BookMarkIcon from "../../assets/img/SVG/BookMark.svg";
import BookMarkColorIcon from "../../assets/img/SVG/BookMarkColor.svg";
import { useState } from "react";

export const PlaceBox = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };
  return (
    <>
      <Container>
        <Picture />
        <PlaceInfoWrapper>
          <PlaceInfo>
            <Name>서울 시립 미술관</Name>
            <Address>서울특별시 가정북로 76 우정관</Address>
            <ReservePriceWrapper>
              <ReservePrice>
                예약 <p>가능</p>
              </ReservePrice>
              <ReservePrice>
                이용료 <p>무료</p>
              </ReservePrice>
            </ReservePriceWrapper>
            <TagWrapper>
              <Tag>장애인</Tag>
              <Tag>유아</Tag>
            </TagWrapper>
          </PlaceInfo>
          <BookMark
            src={isBookmarked ? BookMarkColorIcon : BookMarkIcon}
            onClick={toggleBookmark}
          />
        </PlaceInfoWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  width: 302px;
  height: 247px;
  padding: 12px 20px;
  border: solid 1px #f3f3f3;
`;

const Picture = styled.img`
  width: 100%;
  height: 120px;
`;

const PlaceInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Address = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray500};
`;

const ReservePriceWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ReservePrice = styled.p`
  display: flex;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray900};
  > p {
    color: ${({ theme }) => theme.colors.main700};
  }
`;

const BookMark = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.div`
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 10px;
  ${({ children, theme }) => {
    switch (children) {
      case "장애인":
        return `background-color: ${theme.colors.main500};`;
      case "유아":
        return `background-color: ${theme.colors.main300};`;
      case "노약자":
        return `background-color: ${theme.colors.main400};`;
      default:
        return null;
    }
  }}
`;
