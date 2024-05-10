import styled from "styled-components";
import { useState, useEffect } from "react";
import Arrow from "../../Assets/img/SVG/Arrow.svg";

export const Scroll = () => {
  const [isV, setIsV] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsV(true);
    } else {
      setIsV(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isV && (
        <Container>
          <Button src={Arrow} onClick={scrollToTop} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  cursor: pointer;
  border-radius: 6px;
`;

const Button = styled.img`
  position: fixed;
  right: 10%;
  bottom: 5%;
  width: 70px;
  height: 70px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;
