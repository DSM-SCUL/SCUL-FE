import styled from "styled-components";
import { Tag } from "./Tag";
import { useEffect, useState } from "react";
import { getMyName } from "../../Apis/users";
import { NameType } from "../../types/type";

export const MiddleContainer = () => {
  const [name, setName] = useState<NameType | undefined>();
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
    <Container>
      <Text>
        ✨
        {name
          ? `${name.name}님에게 추천하는 문화생활이에요`
          : "로그인하고 사용해주세요!"}
      </Text>
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
