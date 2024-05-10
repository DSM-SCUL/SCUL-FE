import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CultureDetailType } from "../../types/type";
import { CultureDetail } from "../../Apis/cultures";
import { Map } from "react-kakao-maps-sdk";

export const MapComponent = () => {
  const [cultureDetail, setCultureDetail] = useState<CultureDetailType | null>(null);
  const { id } = useParams<{ id: string }>();

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

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=34beef0b9df79af488aace2e81150070&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      if(cultureDetail){  
        console.log(cultureDetail);
              
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map") as HTMLElement; 
        const options = {
          center: new window.kakao.maps.LatLng(
            cultureDetail.ycoordinate || 0,
            cultureDetail.xcoordinate || 0
          ),
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);

          const markerPosition = new window.kakao.maps.LatLng(
            parseFloat(cultureDetail.ycoordinate.toString()),
            parseFloat(cultureDetail.xcoordinate.toString())
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
      });
      
          return () => {
            document.head.removeChild(script);
          }; 
    };
  }
  }, [cultureDetail]);

  return <div id="kakao-map" style={{ width: "420px", height: "160px", borderRadius: '8px' }}></div>;
};
