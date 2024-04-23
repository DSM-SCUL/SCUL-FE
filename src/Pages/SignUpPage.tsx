import styled from "styled-components";
import { Header } from "../Components/Common/Header";
import { useState, ChangeEvent } from "react";
import { Id } from "../Components/Common/Id";
import { Password } from "../Components/Common/Password";

export const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [isError, setIsError] = useState<boolean>(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "id") {
      setId(e.target.value);
    } else if (e.target.id === "name") {
      setName(e.target.value);
    }
  };

  const isButtonActive =
    id.length > 5 && password.length > 5 && name.length > 2;

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>
          회원가입하고
          <br /> SCUL을 사용해보세요
        </Title>
        <InputWrapper>
          <Text>이름</Text>
          <Id id="name" placeholder="이름" onChange={onChange} value={name} />
        </InputWrapper>
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
          {isError && <Error>이미 있는 아이디입니다.</Error>}
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <SignUp>
          이미 회원이라면?&nbsp;<a href="/">로그인 하기</a>
        </SignUp>
        <Button isActive={isButtonActive}>가입하기</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  margin-bottom: 50px;
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
