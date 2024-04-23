import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { Tag } from "../Components/Main/Tag";
import { PlaceBox } from "../Components/Common/PlaceBox";
import Arrow from "../Assets/img/SVG/Arrow.svg";
import NoResult from "../Assets/img/SVG/NoResult.svg";
import { useState } from "react";

export const SearchPage = () => {
  const [searchResultExists, setSearchResultExists] = useState(true);
  return (
    <Container>
      <Header />
      {searchResultExists ? (
        <Wrapper>
          <Tag />
          <PlaceWrapper>
            <PlaceBox />
            <PlaceBox />
            <PlaceBox />
            <PlaceBox />
            <PlaceBox />
            <PlaceBox />
            <PlaceBox />
            <PlaceBox />
          </PlaceWrapper>
          <ArrowIcon src={Arrow} />
        </Wrapper>
      ) : (
        <Wrapper>
          <NoSearchResult src={NoResult} />
          <Text>검색 결과가 없습니다.</Text>
        </Wrapper>
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 36px;
  max-width: 960px;
  width: 100%;
  margin: 92px auto auto;
`;

const PlaceWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 960px;
  width: 100%;
  margin: auto;
`;

const ArrowIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 20%;
  width: 70px;
  height: 70px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 32px;
  font-weight: 600;
`;

const NoSearchResult = styled.img`
  width: 280px;
  height: 220px;
`;
