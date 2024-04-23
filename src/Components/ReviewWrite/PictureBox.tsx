import styled from "styled-components"
import { useRef } from "react";
import AddButton from "../../Assets/img/SVG/AddButton.svg";

export const PictureBox = () => {
    const ref = useRef<HTMLInputElement>(null);

    const fileHandler = () => {
        if (ref.current) {
            ref.current!.click();
        }
    };

    return (
        <PictureContainer>
            <p>사진</p>
            <PictureWrapper>
                <AddButtonBox onClick={fileHandler}>
                    <input 
                        type="file" 
                        style={{display:'none'}}
                        ref={ref}
                    />
                    <img src={AddButton} alt="버튼" />
                </AddButtonBox>
                <Picture></Picture>
                <Picture></Picture>
            </PictureWrapper>
        </PictureContainer>
    )
}

const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    > p {
        font-size: 16px;
        font-weight: 500;
    }
`;

const PictureWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

const AddButtonBox = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${({theme}) => theme.colors.gray50};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Picture = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${({theme}) => theme.colors.gray50};
    border-radius: 8px;
`;