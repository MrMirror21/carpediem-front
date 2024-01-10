import styled from "styled-components";
import { useState } from "react";
import MapContainer from "@/components/Place/MapContainer";
import { useEffect } from "react";
import PlaceImage1 from "../../assets/images/Place/placeImage_building.png";
import PlaceImage2 from "../../assets/images/Place/placeImage_amusement.png";
import PlaceImage3 from "../../assets/images/Place/placeImage_tree.png";
import { useLocation } from "react-router-dom";

export default function Place() {
  const imgArray = [PlaceImage1, PlaceImage2, PlaceImage3]; // 장소 이미지 배열
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [Place, setPlace] = useState("");

  const location = useLocation();
  // 데이터 받아오기
  const Data = location.state || null;
  console.log("keyword Data : ", Data);

  useEffect(() => {
    setPlace(Data);

    // 일정 시간이 지난 후에 이미지를 변경
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <PlaceContainer>
      <MainText>
        {"' "}
        {Place}
        {" '"} 활동에 대한 {"\n"}추천 장소입니다 :{")"}
      </MainText>
      <ContentWrap>
        <MainImage
          src={imgArray[currentImageIndex]}
          alt={`PlaceImage ${currentImageIndex + 1}`}
        />
        <MapContainer searchPlace={Place} />
      </ContentWrap>
    </PlaceContainer>
  );
}

const PlaceContainer = styled.div`
  width: 100%;
  white-space: pre-wrap;
  width: 100%;
`;

const MainText = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin: 100px 0px 15px 30px;
`;

const MainImage = styled.img`
  margin-top: 30px;
  height: 190px;
  margin-bottom: 25px;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
