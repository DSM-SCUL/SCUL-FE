import styled from "styled-components";
import { MapComponent } from "./Map";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CultureDetailType } from "../../types/type";
import { CultureDetail } from "../../Apis/cultures";

export const MapBox = () => {
    const [cultureDetail, setCultureDetail] = useState<CultureDetailType | null>(null);
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        const fetchCultureDetail = async () => {
        try {
            const response = await CultureDetail(String(id));
            setCultureDetail(response.data);
        } catch (error) {
            console.error("문화 생활 상세보기 에러: ", error);
        }
        };

        fetchCultureDetail();
    }, [id]);

    return (
        <MapContainer>
            <MapWrapper>
                <div style={{fontSize: '16px', fontWeight: '500'}}>위치보기</div>
                <div style={{fontSize: '16px', fontWeight: '500'}}>{cultureDetail?.location}, {cultureDetail?.placeName}</div>
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