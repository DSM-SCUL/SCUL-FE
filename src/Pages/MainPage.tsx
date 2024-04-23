import styled from "styled-components";
import { PlaceBox } from "../Components/Common/PlaceBox";
import { Header } from "../Components/Common/Header";
import { MiddleContainer } from "../Components/Main/MiddleContainer";
import BannerImg from "../Assets/img/PNG/Banner.png";
import Arrow from "../Assets/img/SVG/Arrow.svg";

export const MainPage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Banner src={BannerImg} />
        <MiddleContainer />
        <PlaceWrapper>
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

const Banner = styled.img`
  width: 960px;
  height: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 92px;
`;

const PlaceWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 960px;
  width: 100%;
  margin: 20px auto;
`;

const ArrowIcon = styled.img`
  position: absolute;
  right: 20%;
  bottom: -15%;
  align-items: end;
  width: 70px;
  height: 70px;
`;
