import React, { useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";

export const MapComponent = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=34beef0b9df79af488aace2e81150070&autoload=false`;
      document.head.appendChild(script);
  
      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("kakao-map") as HTMLElement;
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          
          // 마커 위치는 나중에 api로 받아옴
          const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });
      };
  
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
    return <div id="kakao-map" style={{ width: "420px", height: "160px", borderRadius: '8px' }}></div>;
  };

