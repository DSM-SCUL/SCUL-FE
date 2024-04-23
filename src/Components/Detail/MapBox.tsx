import styled from "styled-components";
import { MapComponent } from "./Map";

export const MapBox = () => {
    return (
        <MapContainer>
            <MapWrapper>
                <div style={{fontSize: '16px', fontWeight: '500'}}>위치보기</div>
                <div style={{fontSize: '16px', fontWeight: '500'}}>서울특별시 가정북로 76 우정관</div>
            </MapWrapper>
            <MapComponent />
        </MapContainer>
    )
}


const MapContainer = styled.div`
    height: 191px;
    gap: 12px;
    display: flex;
    flex-direction: column;
`;

const MapWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;