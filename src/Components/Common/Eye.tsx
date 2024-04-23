import styled from "styled-components";
import CloseEye from "../../Assets/img/SVG/CloseEye.svg";
import OpenEye from "../../Assets/img/SVG/OpenEye.svg";

interface EyeProps {
  isShowPassword: boolean;
  onClick: () => void;
}

export const Eye = ({ isShowPassword, onClick }: EyeProps) => {
  return (
    <Container onClick={onClick}>
      {isShowPassword ? <EyeIcon src={OpenEye} /> : <EyeIcon src={CloseEye} />}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

const EyeIcon = styled.img`
  width: 24px;
  height: 24px;
`;
