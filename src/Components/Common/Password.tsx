import styled from "styled-components";
import { Eye } from "./Eye";
import { useState } from "react";

interface PasswordProps {
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Password = ({
  id,
  placeholder,
  onChange,
  value,
}: PasswordProps) => {
  const [isOpenPasswordEye, setIsOpenPasswordEye] = useState(false);
  const onEyeClickHandle = () => {
    setIsOpenPasswordEye(!isOpenPasswordEye);
  };
  return (
    <Container>
      <InputContainer
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={isOpenPasswordEye ? "text" : "password"}
      />
      <Eye isShowPassword={isOpenPasswordEye} onClick={onEyeClickHandle} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 520px;
`;

const InputContainer = styled.input`
  width: 520px;
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.gray50};
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.main500};
    outline: none;
  }
`;
