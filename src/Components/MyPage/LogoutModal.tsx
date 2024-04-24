import { useState } from "react";
import styled from "styled-components"

interface LogoutModalProps {
    onClose: () => void
}
export const LogoutModal = ({onClose} : LogoutModalProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
        setIsOpen(false);
        onClose();
    }
    return (
        <>
            {isOpen && (
                <LogoutModalContainer>
                    <ModalBackground onClick={handleCloseModal} />
                    <LogoutModalWrapper>
                        <LogoutHeader>
                            <h3>SCUL에서 로그아웃 하시겠어요?</h3>
                            <p>다시 로그인 할 때까지 사용할 수 없어요</p>
                        </LogoutHeader>
                        <ButtonWrap>
                            <CancelButton onClick={handleCloseModal}>취소</CancelButton>
                            <CheckButton>확인</CheckButton>
                        </ButtonWrap>
                    </LogoutModalWrapper>
                </LogoutModalContainer>
            )}
        </>
    )
}

const LogoutModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9998;
`;

const LogoutModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 422px;
    height: 262px;
    background-color: white;
    border-radius: 8px;
    z-index: 10001;
    gap: 36px;
`;

const LogoutHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    > h3 {
        font-size: 24px;
        font-weight: 600;
    }
    > p {
        font-size: 16px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.gray900};
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    gap: 22px;
`;

const CancelButton = styled.button`
    width: 152px;
    height: 42px;
    background-color: ${({theme}) => theme.colors.gray200};
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: white;
`;

const CheckButton = styled.button`
    width: 152px;
    height: 42px;
    background-color: ${({theme}) => theme.colors.main600};
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: white;
`;