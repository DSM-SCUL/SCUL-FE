import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { PlaceBox } from "../Components/Common/PlaceBox";
import { useState } from "react";
import { CultureListType } from "../types/type";

export const BookMarkPage = () => {
  const [list, setList] = useState<CultureListType[]>();
  return (
    <>
      <Header />
      <Wrapper>
        <p>북마크</p>
        <PlaceWrapper>{list && <PlaceBox lists={list} />}</PlaceWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  align-items: center;
  > p {
    font-size: 32px;
    font-weight: 600;
    display: flex;
    width: 960px;
    justify-content: space-between;
  }
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
