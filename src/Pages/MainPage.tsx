import styled from "styled-components";
import { PlaceBox } from "../Components/Common/PlaceBox";
import { Header } from "../Components/Common/Header";
import { MiddleContainer } from "../Components/Main/MiddleContainer";
import BannerImg from "../Assets/img/PNG/Banner.png";
import Arrow from "../Assets/img/SVG/Arrow.svg";
import { useEffect, useState } from "react";
import { CultureListType } from "../types/type";
import { getCultureList } from "../Apis/cultures";

export const MainPage = () => {
  const [list, setList] = useState<CultureListType[]>();

  useEffect(() => {
    getCultureList()
      .then((res) => {
        console.log(res.data);
        setList(res.data.culture);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Banner src={BannerImg} />
        <MiddleContainer />
        {list && <PlaceBox lists={list} />}
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

const ArrowIcon = styled.img`
  position: absolute;
  right: 20%;
  bottom: -15%;
  align-items: end;
  width: 70px;
  height: 70px;
`;
