import styled from "styled-components";
import BookMarkIcon from "../../Assets/img/SVG/BookMark.svg";
import BookMarkColorIcon from "../../Assets/img/SVG/BookMarkColor.svg";
import { Link } from "react-router-dom";
import { CultureListType, ListProps } from "../../types/type";
import { bookmark } from "../../Apis/bookmarks";
import { useEffect, useState } from "react";
import { MyBookMark } from "../../Apis/bookmarks";

export const MyBookMarkBox = ({ lists }: ListProps) => {
    const [, setBookmarkedList] = useState([]);

    useEffect(() => {
        fetchBookmarks();
    }, [])

    const fetchBookmarks = async () => {
        try {
            const response = await MyBookMark();
            setBookmarkedList(response.data.culture);
        } catch (error) {
            console.error("북마크 불러오는 중 에러: ", error);
            
        }
    }
    const toggleBookmark = (id: string) => {
        bookmark(id)
        .then((res) => {
            console.log(res.data);
            fetchBookmarks();
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <Asdf>
        {lists.map((list: CultureListType, index: number) => (
            <Container key={index}>
            <Picture src={list.imageUrl} />
            <PlaceInfoWrapper>
                <PlaceInfo>
                <Link to={`/cultures/detail/${list.id}`}>
                    <Name>{list.cultureName}</Name>
                </Link>
                <Address>
                    {list.location}&nbsp;
                    {list.placeName}
                </Address>
                <ReservePriceWrapper>
                    <ReservePrice>
                    예약 <p>{list.isApplicationAble ? "가능" : "불가능"}</p>
                    </ReservePrice>
                    <ReservePrice>
                    이용료 <p>{list.ticketPrice}</p>
                    </ReservePrice>
                </ReservePriceWrapper>
                <TagWrapper>
                    <Tag>{list.wantedPeople}</Tag>
                </TagWrapper>
                </PlaceInfo>
                <BookMark
                src={list.isBookMarked ? BookMarkColorIcon : BookMarkIcon}
                onClick={() => toggleBookmark(list.id)}
                />
            </PlaceInfoWrapper>
            </Container>
        ))}
        </Asdf>
    );
};

const Asdf = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 960px;
  width: 100%;
  margin: 20px auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  width: 302px;
  height: 100%;
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
  max-width: 250px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.main400};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
