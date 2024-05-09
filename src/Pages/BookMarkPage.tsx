import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { MyBookMarkBox } from "../Components/MyPage/MyBookMark";
import { useEffect, useState } from "react";
import { CultureListType } from "../types/type";
import { MyBookMark } from "../Apis/bookmarks";

export const BookMarkPage = () => {
  const [list, setList] = useState<CultureListType[]>();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await MyBookMark();
        setList(response.data.culture);
      } catch (error) {
        console.error("북마크한 페이지 에러: ", error);
        
      }
    }
    fetchBookmarks();
  }, [])

  return (
    <>
      <Header />
      <Wrapper>
        <p>북마크</p>
        <PlaceWrapper>{list && <MyBookMarkBox lists={list} />}</PlaceWrapper>
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
