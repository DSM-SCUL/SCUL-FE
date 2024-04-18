import styled from "styled-components";
import { Tag } from "./Tag";

export const MiddleContainer = () => {
  return (
    <Container>
      <Text>✨강해민님에게 추천하는 문화생활이에요</Text>
      <Tag />
    </Container>
  );
};

const Container = styled.div`
  width: 960px;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
