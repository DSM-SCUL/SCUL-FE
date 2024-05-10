import styled from "styled-components"
import { useRef } from "react";
import AddButton from "../../Assets/img/SVG/AddButton.svg";
import { useState } from "react";
import { instance } from "../../Apis/axios";
interface PictrueBoxProps {
    onPictureAdded?: (urls: string[]) => void;
    setImageArray: any
}
export const PictureBox: React.FC<PictrueBoxProps> = ({ setImageArray }) => {
    const [pictureUrls, setPictureUrls] = useState<string[]>([]);
    const ref = useRef<HTMLInputElement>(null);
    const handlePreview = async (e: any) => {
        const selectedImages = e.target.files[0];
        if (selectedImages) {
            const reader: FileReader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    const imageUrl = reader.result as string;
                    setPictureUrls(prevUrls => [...prevUrls, imageUrl]);
                }
            };
            reader.readAsDataURL(selectedImages);
            try {
                const formData = new FormData();
                formData.append("image", selectedImages);
                const response = await instance.post('/cultures/image', formData);
                const responseData = response.data.imageUrls;
                setImageArray((prev: any) => [...prev, responseData]);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <PictureContainer>
            <p>사진</p>
            <PictureWrapper>
                <AddButtonBox onClick={() => ref.current?.click()}>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={ref}
                        onChange={(e) => {
                            handlePreview(e);
                        }}
                        accept="image/*"
                        multiple
                    />
                    <img src={AddButton} alt="버튼" />
                </AddButtonBox>
                {pictureUrls.map((url, index) => (
                    <Picture key={index} src={url} />
                ))}
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
    object-fit: contain;
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