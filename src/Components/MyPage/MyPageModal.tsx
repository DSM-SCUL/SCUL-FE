import styled from "styled-components";
import MyReview from "../../Assets/img/SVG/MyReview.svg";
import BookMark from "../../Assets/img/SVG/MyPageBookMark.svg";
import Logout from "../../Assets/img/SVG/Logout.svg";
import { Link } from "react-router-dom";
import { LogoutModal } from "./LogoutModal";
import { useState } from "react";
import { useEffect } from "react";
import { getMyName } from "../../Apis/users";
import { NameType } from "../../types/type";

export const MyPageModal = () => {
    const [name, setName] = useState<NameType | undefined>();
    const [isLogout, setIsLogout] = useState(false);

    const handleLogout = () => {
        setIsLogout(true);
    }

    const handleCloseModal = () => {
        setIsLogout(false);
    }

    useEffect(() => {
        getMyName()
          .then((res) => {
            console.log(res.data);
            setName(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return (
        <MyPageModalContainer>
            <ProfileWrap>
                <p>즐거운 여가시간을 보내는</p>
                <div>{`${name?.name}`}님</div>
            </ProfileWrap>
            <p>보기</p>
            <ShowWrap>
                <Link to={'/myReview'}>
                    <BoxWrap>
                        <img src={MyReview} alt="리뷰 아이콘"/>
                        <p>내가 작성한 리뷰</p>
                    </BoxWrap>
                </Link>
                <Link to={'/BookMark'}>
                    <BoxWrap>
                        <img src={BookMark} alt="북마크"/>
                        <p>북마크</p>
                    </BoxWrap>
                </Link>
            </ShowWrap>
            <p>계정</p>
            <BoxWrap onClick={handleLogout}>
                <img src={Logout} alt="로그아웃 아이콘" />
                <p>로그아웃</p>
            </BoxWrap>
            {isLogout && <LogoutModal onClose={handleCloseModal} />}
        </MyPageModalContainer>
    )
}


const MyPageModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1000;
    width: 360px;
    height: 392px;
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.gray100};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    > p {
        margin-top: 32px;
        font-size: 14px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.gray500};
        padding-left: 20px;
    }
`;

const ProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 43px;
    align-items: center;
    > p {
        font-size: 16px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.gray800};
    }
    > div {
        font-size: 24px;
        font-weight: 600;
    }
`;

const ShowWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoxWrap = styled.div`
    height: 52px;
    padding: 16px 20px;
    gap: 20px;
    display: flex;
    cursor: pointer;
    > p {
        font-size: 16px;
        font-weight: 500;
    }
`;