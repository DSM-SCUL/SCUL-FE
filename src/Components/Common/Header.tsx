import { useState } from "react";
import styled from "styled-components";
import MyPage from "../../Assets/img/SVG/MyPage.svg";
import Logo from "../../Assets/img/SVG/Logo.svg";
import Search from "../../Assets/img/SVG/Search.svg";
import { MyPageModal } from "../MyPage/MyPageModal";
import { Link } from "react-router-dom";
import { Cookie } from "../../Utils/cookie";

export const Header = () => {
  const [isMyPageModalVisible, setIsMyPageModalVisible] = useState(false);

  const toggleMyPageModalVisibility = () => {
    setIsMyPageModalVisible((prevState) => !prevState);
  };

  const isLoggedIn = !!Cookie.get("access_token");

  return (
    <Container>
      <Link to={"/"}>
        <LogoImg src={Logo} />
      </Link>
      <SearchWrapper>
        <Link to={"/Search"}>
          <InputContainer>
            <SearchIcon src={Search} />
          </InputContainer>
        </Link>
        {isLoggedIn ? (
          <MyPageIcon src={MyPage} onClick={toggleMyPageModalVisibility} />
        ) : (
          <Link to={"/Login"}>
            <LoginButton>로그인</LoginButton>
          </Link>
        )}
      </SearchWrapper>
      <MyPageModalWrapper isMyPageModalVisible={isMyPageModalVisible}>
        <MyPageModal />
      </MyPageModalWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoImg = styled.img`
  width: 112.8px;
  height: 30px;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  width: auto;
  display: flex;
  gap: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 12%;
  right: 12px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray50};
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 20px;
  padding: 8px 30px;
  cursor: pointer;
`;

const MyPageIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const MyPageModalWrapper = styled.div<{ isMyPageModalVisible: boolean }>`
  position: fixed;
  margin-top: ${({ isMyPageModalVisible }) =>
    isMyPageModalVisible ? "500px" : "-900%"};
  left: 62%;
  z-index: 999;
`;
