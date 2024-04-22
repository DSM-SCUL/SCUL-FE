import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { Tag } from "../Components/Main/Tag";
import { PlaceBox } from "../Components/Common/PlaceBox";
import Arrow from "../assets/img/SVG/Arrow.svg";

export const SearchPage = () => {
  return (
    <Container>
      <Header />
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
    </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 36px;
  max-width: 960px;
  width: 100%;
  margin: 48px auto auto;
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
