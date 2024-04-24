import { useState } from "react";
import styled from "styled-components";
import MyPage from "../../Assets/img/SVG/MyPage.svg";
import Logo from "../../Assets/img/SVG/Logo.svg";
import Search from "../../Assets/img/SVG/Search.svg";
import { MyPageModal } from "../MyPage/MyPageModal";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isMyPageModalVisible, setIsMyPageModalVisible] = useState(false);

  const toggleInputVisibility = () => {
    setIsInputVisible((prevState) => !prevState);
  };

  const toggleMyPageModalVisibility = () => {
    setIsMyPageModalVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <Link to={'/'}>
        <LogoImg src={Logo} />
      </Link>
      <SearchWrapper>
        <InputContainer>
          {isInputVisible && <Input placeholder="문화 생활 검색" />}
          <SearchIcon src={Search} onClick={toggleInputVisibility} />
        </InputContainer>
        {isLogin ? (
          <MyPageIcon src={MyPage} onClick={toggleMyPageModalVisibility} />
        ) : (
          <LoginButton onClick={() => setIsLogin(true)}>로그인</LoginButton>
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

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  border: none;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 500;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-size: 12px;
    font-weight: 500;
  }
  input:focus {
    outline: none;
  }
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
  padding: 0px 38px;
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
