import styled from "styled-components";
import { SearchHeader } from "../Components/Common/SearchHeader";
import { PlaceBox } from "../Components/Common/PlaceBox";
import NoResult from "../Assets/img/SVG/NoResult.svg";
import { useEffect, useState } from "react";
import { CultureListType } from "../types/type";
import { getSearch } from "../Apis/cultures";
import { Scroll } from "../Components/MyPage/Scroll";

export const SearchPage = () => {
  const [searchResultExists, setSearchResultExists] = useState(true);
  const [list, setList] = useState<CultureListType[]>([]);

  useEffect(() => {
    setList([]);
    setSearchResultExists(true);
  }, [setSearchResultExists]);

  const handleSearch = (keyword: string) => {
    if (keyword.trim() !== "") {
      getSearch(keyword.trim())
        .then((response: any) => {
          setList(response.data.culture);
          setSearchResultExists(response.data.culture.length > 0);
        })
        .catch((error) => {
          console.error(error);
          setList([]);
          setSearchResultExists(false);
        });
    } else {
      setList([]);
      setSearchResultExists(false);
    }
  };

  return (
    <Container>
      <SearchHeader handleSearch={handleSearch} />
      {searchResultExists ? (
        <Wrapper>
          <PlaceWrapper>
            {list.map((item, index) => (
              <PlaceBox key={index} lists={[item]} />
            ))}
          </PlaceWrapper>
          <Scroll />
        </Wrapper>
      ) : (
        <SearchWrapper>
          <NoSearchResult src={NoResult} />
          <Text>검색 결과가 없습니다.</Text>
        </SearchWrapper>
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
`;

const SearchWrapper = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
