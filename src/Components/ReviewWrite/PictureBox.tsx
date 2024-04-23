import styled from "styled-components"
import { useRef } from "react";
import AddButton from "../../Assets/img/SVG/AddButton.svg";
import { useState } from "react";

interface PictrueBoxProps {
    onPictureAdded: () => void;
}
export const PictureBox: React.FC<PictrueBoxProps> = ({onPictureAdded}) => {
    const [, setPictureAdded] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const fileHandler = () => {
        if (ref.current) {
            ref.current!.click();
        }
    };

    const handlePictureAdded = () => {
        setPictureAdded(true);
        onPictureAdded();
    }

    return (
        <PictureContainer>
            <p>사진</p>
            <PictureWrapper>
                <AddButtonBox onClick={fileHandler}>
                    <input 
                        type="file" 
                        style={{display:'none'}}
                        ref={ref}
                        onChange={handlePictureAdded}
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

const Picture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 8px;
`;