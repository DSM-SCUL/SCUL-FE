import styled from "styled-components";

export const Id = ({ ...props }) => {
  return <InputContainer {...props} />;
};

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
