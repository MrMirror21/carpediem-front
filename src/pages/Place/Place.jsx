import styled from "styled-components";
import { useState } from "react";
import MapContainer from "/src/components/Place/MapContainer";
import { useEffect } from "react";
import PlaceImage1 from "/assets/images/Place/placeImage_building.svg";
import PlaceImage2 from "/assets/images/Place/placeImage_amusement.svg";
import PlaceImage3 from "/assets/images/Place/placeImage_tree.svg";
import PlaceImage4 from "/assets/images/Place/placeImage_dining.svg"
import PlaceImage5 from "/assets/images/Place/placeImage_culture.svg"
import { useLocation } from "react-router-dom";
import SliderButton from '../../components/voice-recognition/SlideButton';

export default function Place() {
  const imgArray = [PlaceImage1, PlaceImage2, PlaceImage3, PlaceImage4, PlaceImage5]; // 장소 이미지 배열
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [Place, setPlace] = useState("");
  const [placeCode, setPlaceCode] = useState("");
  const [isNearSearch, setIsNearSearch] = useState(true);

  const location = useLocation();
  // 데이터 받아오기
  const Data = location.state || null;

  const placeCodeToIndex = () => { // 장소 코드를 인덱스로 변환
    if (placeCode === 'AD5') return 0;
    if (placeCode === 'AT4') return 1;
    if (placeCode === ('CE7' || 'FD6')) return 3;
    if (placeCode === 'CT1') return 4;
    else return 0;
  }
  useEffect(() => {
    setPlace(Data);

    const selectImage = () => { // 장소 코드에 따라 해당하는 이미지 인덱스 지정
      const newImageIndex = placeCodeToIndex(placeCode);
      setCurrentImageIndex(newImageIndex);
    }
    /*
    // 일정 시간이 지난 후에 이미지를 변경
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 4000);
    */
    return () => selectImage();
  }, [placeCode]);

  return (
    <PlaceContainer>
      <ButtonWrap>
        <SliderButton
          isSelected={!isNearSearch}
          onClick={()=>setIsNearSearch(!isNearSearch)}
          option1="전체"
          option2="내 주변"
        />
      </ButtonWrap>
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
        <MapContainer 
          searchPlace={Place} 
          setPlaceCode={setPlaceCode}
          isNearSearch={isNearSearch}  
        />
      </ContentWrap>
    </PlaceContainer>
  );
}

const PlaceContainer = styled.div`
  width: 100%;
  max-width: 390px;
  margin: auto;
  white-space: pre-wrap;
  width: 100%;
  max-height: 844px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
`;