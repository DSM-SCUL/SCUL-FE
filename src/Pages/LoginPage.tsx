import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { Id } from "../Components/Common/Id";
import { Password } from "../Components/Common/Password";
import { useState, ChangeEvent } from "react";

export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [isError, setIsError] = useState<boolean>(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "id") {
      setId(e.target.value);
    }
  };

  const isButtonActive = id.length > 5 && password.length > 5;

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>
          로그인하고
          <br /> SCUL을 사용해보세요
        </Title>
        <InputWrapper>
          <Text>아이디</Text>
          <Id id="id" placeholder="아이디" onChange={onChange} value={id} />
        </InputWrapper>
        <InputWrapper>
          <Text>비밀번호</Text>
          <Password
            id="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={password}
          />
          {isError && <Error>다시 확인해주세요</Error>}
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <SignUp>
          아직 회원이 아니라면?&nbsp;<a href="/">회원가입 하기</a>
        </SignUp>
        <Button isActive={isButtonActive}>로그인</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  margin-top: 164px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Error = styled.p`
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.main800};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const SignUp = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  > a {
    color: ${({ theme }) => theme.colors.main500};
    text-decoration: none;
  }
`;

const Button = styled.button<{ isActive: boolean }>`
  width: 520px;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.main500 : theme.colors.gray200};
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  border: none;
`;
