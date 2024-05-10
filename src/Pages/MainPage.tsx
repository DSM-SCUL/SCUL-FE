import styled from "styled-components";
import { PlaceBox } from "../Components/Common/PlaceBox";
import { MiddleContainer } from "../Components/Main/MiddleContainer";
import BannerImg from "../Assets/img/PNG/Banner.png";
import Arrow from "../Assets/img/SVG/Arrow.svg";
import { useEffect, useState } from "react";
import { CultureListType } from "../types/type";
import { getCultureList, getSearch } from "../Apis/cultures";
import { Header } from "../Components/Common/Header";

export const MainPage = () => {
  type a = "x" | "유아" | "장애인" | "노약자";
  const [list, setList] = useState<CultureListType[]>();
  const [selected, setSelected] = useState<a>("x");
  const [usuallyData, setUsuallyData] = useState<CultureListType[]>([]);

  useEffect(() => {
    getCultureList()
      .then((res) => {
        console.log(res.data);
        setList(res.data.culture);
        setUsuallyData(res.data.culture);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTagClick = (tag: a) => {
    setSelected(tag);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Banner src={BannerImg} />
        <MiddleContainer handleTagClick={handleTagClick} />
        {list && (
          <PlaceBox
            lists={
              selected === "x"
                ? list
                : list.filter((item) =>
                    item.wantedPeople.includes(selected || "")
                  )
            }
          />
        )}
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
