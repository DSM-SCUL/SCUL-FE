import styled from "styled-components"
import { useRef } from "react";
import AddButton from "../../Assets/img/SVG/AddButton.svg";
import { useState } from "react";
import { instance } from "../../Apis/axios";

interface PictrueBoxProps {
    onPictureAdded: (urls: string[]) => void;
}

export const PictureBox: React.FC<PictrueBoxProps> = ({onPictureAdded}) => {
    const [pictureUrls, setPictureUrls] = useState<string[]>([]);
    const [previewImg, setPreviewImg] = useState<any>();
    const ref = useRef<HTMLInputElement>(null);

    const handlePictureAdd = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImages = e.target.files;
        if (selectedImages) {
            const imagesArray = Array.from(selectedImages);
    
            for (const image of imagesArray) {
                try {
                    const formData = new FormData();
                    formData.append('image', image);
                    const response = await instance.post('/cultures/images', formData);
                    const data = response.data;
                    setPictureUrls(prevUrls => [...prevUrls, data]);
    
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (reader.readyState === 2) {
                            setPreviewImg(reader.result);
                        }
                    };
                    reader.readAsDataURL(image);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
    
    const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImages = e.target.files;
        if (selectedImages && selectedImages.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setPreviewImg(reader.result);
                }
            };
            reader.readAsDataURL(selectedImages[0]); 
        }
    }

    return (
        <PictureContainer>
            <p>사진</p>
            <PictureWrapper>
                <AddButtonBox onClick={() => ref.current?.click()}>
                    <input 
                        type="file" 
                        style={{display:'none'}}
                        ref={ref}
                        onChange={(e) => {
                            handlePreview(e); 
                            handlePictureAdd(e);
                        }}
                        accept="image/*"
                        multiple
                    />
                    <img src={AddButton} alt="버튼" />
                </AddButtonBox>
                {pictureUrls.map((url, index) => (
                    <Picture key={index} src={url}/>
                ))}
                {previewImg && <Picture src={previewImg as string} />}
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