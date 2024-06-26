import styled from "styled-components";
import { TagProps } from "../../types/type";

export const Tag = ({ handleTagClick }: TagProps) => {
  return (
    <Container>
      <Tag1 onClick={() => handleTagClick("장애인")}>장애인 ♿️</Tag1>
      <Tag2 onClick={() => handleTagClick("유아")}>유아 👶</Tag2>
      <Tag3 onClick={() => handleTagClick("노약자")}>노약자 🧓🏻</Tag3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Tag1 = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main500};
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main500};
  }
  cursor: pointer;
`;

const Tag2 = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main300};
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main300};
  }
  cursor: pointer;
`;

const Tag3 = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main400};
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main400};
  }
  cursor: pointer;
`;
