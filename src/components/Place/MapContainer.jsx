import { useEffect, useState } from "react";
import styled from "styled-components";
import nextButton from "../../assets/images/Place/nextButton.png";
import prevButton from "../../assets/images/Place/prevButton.png";
import { Link } from "react-router-dom";

const { kakao } = window;
const MapContainer = ({ searchPlace }) => {
  const [Places, setPlaces] = useState([]);
  const [Index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const getCurrentCoordinate = async () => {
    return new Promise((res, rej) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log(position);
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도

          const coordinate = new kakao.maps.LatLng(lat, lon);
          res(coordinate);
        });
      } else {
        rej(new Error("현재 위치를 불러올 수 없습니다."));
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const currentCoordinate = await getCurrentCoordinate();
        console.log(currentCoordinate);

        const container = document.getElementById("myMap");
        const options = {
          center: currentCoordinate,
          sort: kakao.maps.services.SortBy.DISTANCE,
        };

        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchPlace, placesSearchCB, {
          location: currentCoordinate,
          sort: kakao.maps.services.SortBy.DISTANCE,
        });

        const placesSearchCB = (data, status) => {
          setIsLoading(false);
          if (status === kakao.maps.services.Status.OK) {
            let bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            map.setBounds(bounds);
            setPlaces(data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchPlace]);

  let placeLength = 5;
  if (Places.length < 5) {
    placeLength = Places.length;
  }

  // 이미지 넘기기 버튼
  const onNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % placeLength);
    console.log(Places);
  };

  const onPrevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? placeLength - 1 : prevIndex - 1
    );
  };

  // 더 알아보기 지도 주소
  const onMoreInfoClick = () => {
    window.open(`https://map.kakao.com/link/map/${Places[Index].id}`);
  };
  return (
    <PlacePageWrap>
      <div id="myMap"></div>
      <div id="result-list">
        {isLoading ? (
          <PlaceNullBox>데이터를 불러오는 중입니다...</PlaceNullBox>
        ) : Places.length > 0 ? (
          <>
            <PlaceWrap>
              <PrevNextButton
                src={prevButton}
                alt="prev button"
                onClick={onPrevImage}
              ></PrevNextButton>
              <PlaceBox>
                <PlaceText>
                  {Places[Index].place_name
                    ? Places[Index].place_name
                    : "이름 정보 없음"}
                </PlaceText>

                <AdressText>
                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6499 6.98047C12.6499 8.23488 12.2534 9.39668 11.5789 10.3474L6.95806 17.1045C6.89916 17.1906 6.77216 17.1907 6.71307 17.1047L2.03954 10.3033C2.02666 10.2848 2.01388 10.2662 2.00121 10.2475L1.97427 10.2083H1.97483C1.35867 9.28434 0.999512 8.17435 0.999512 6.98047C0.999512 3.7633 3.60754 1.15527 6.82471 1.15527C10.0419 1.15527 12.6499 3.7633 12.6499 6.98047ZM6.82445 10.1516C8.64608 10.1516 10.1228 8.67486 10.1228 6.85323C10.1228 5.0316 8.64608 3.55488 6.82445 3.55488C5.00282 3.55488 3.5261 5.0316 3.5261 6.85323C3.5261 8.67486 5.00282 10.1516 6.82445 10.1516Z"
                      fill="#00A3FF"
                    />
                    <path
                      d="M11.5789 10.3474L11.5304 10.313L11.5299 10.3139L11.5789 10.3474ZM6.95806 17.1045L6.90902 17.0709L6.90902 17.0709L6.95806 17.1045ZM6.71307 17.1047L6.66411 17.1384L6.66411 17.1384L6.71307 17.1047ZM2.03954 10.3033L2.0885 10.2696L2.08831 10.2694L2.03954 10.3033ZM2.00121 10.2475L2.05036 10.2141L2.05017 10.2139L2.00121 10.2475ZM1.97427 10.2083V10.1489H1.86137L1.92531 10.2419L1.97427 10.2083ZM1.97483 10.2083V10.2677H2.08585L2.02425 10.1753L1.97483 10.2083ZM11.6273 10.3818C12.3087 9.42134 12.7093 8.2476 12.7093 6.98047H12.5905C12.5905 8.22216 12.1981 9.37202 11.5304 10.313L11.6273 10.3818ZM7.00709 17.138L11.6279 10.3809L11.5299 10.3139L6.90902 17.0709L7.00709 17.138ZM6.66411 17.1384C6.74683 17.2588 6.92464 17.2586 7.00709 17.138L6.90902 17.0709C6.87368 17.1226 6.79748 17.1227 6.76203 17.0711L6.66411 17.1384ZM1.99058 10.3369L6.66411 17.1384L6.76203 17.0711L2.0885 10.2696L1.99058 10.3369ZM1.95205 10.2809C1.96485 10.2997 1.97776 10.3185 1.99078 10.3372L2.08831 10.2694C2.07555 10.251 2.0629 10.2326 2.05036 10.2141L1.95205 10.2809ZM1.92531 10.2419L1.95225 10.2811L2.05017 10.2139L2.02323 10.1747L1.92531 10.2419ZM1.97483 10.1489H1.97427V10.2677H1.97483V10.1489ZM0.940108 6.98047C0.940108 8.18644 1.30294 9.30784 1.92541 10.2413L2.02425 10.1753C1.4144 9.26084 1.05892 8.16226 1.05892 6.98047H0.940108ZM6.82471 1.09587C3.57473 1.09587 0.940108 3.73049 0.940108 6.98047H1.05892C1.05892 3.79611 3.64035 1.21468 6.82471 1.21468V1.09587ZM12.7093 6.98047C12.7093 3.73049 10.0747 1.09587 6.82471 1.09587V1.21468C10.0091 1.21468 12.5905 3.79611 12.5905 6.98047H12.7093ZM10.0634 6.85323C10.0634 8.64205 8.61327 10.0922 6.82445 10.0922V10.211C8.67889 10.211 10.1822 8.70767 10.1822 6.85323H10.0634ZM6.82445 3.61428C8.61327 3.61428 10.0634 5.06441 10.0634 6.85323H10.1822C10.1822 4.99879 8.67889 3.49548 6.82445 3.49548V3.61428ZM3.5855 6.85323C3.5855 5.06441 5.03563 3.61428 6.82445 3.61428V3.49548C4.97001 3.49548 3.46669 4.99879 3.46669 6.85323H3.5855ZM6.82445 10.0922C5.03563 10.0922 3.5855 8.64205 3.5855 6.85323H3.46669C3.46669 8.70767 4.97001 10.211 6.82445 10.211V10.0922Z"
                      fill="white"
                      fill-opacity="0.1"
                    />
                  </Icon>
                  {Places[Index].road_address_name ? (
                    <span>{Places[Index].road_address_name}</span>
                  ) : (
                    <span>{Places[Index].address_name}</span>
                  )}
                </AdressText>
                <PhoneWrap>
                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                  >
                    <path
                      d="M12.1518 10.4763C11.2874 10.4763 10.4511 10.3197 9.67107 10.038C9.4251 9.94409 9.15102 10.0145 8.96127 10.2258L7.85793 11.7676C5.86909 10.711 4.00676 8.7154 3.01585 6.42236L4.38625 5.12324C4.576 4.90411 4.63222 4.59889 4.55492 4.32498C4.29489 3.45629 4.16137 2.52498 4.16137 1.56238C4.16137 1.13977 3.84512 0.787598 3.46563 0.787598H1.03405C0.654553 0.787598 0.197754 0.975423 0.197754 1.56238C0.197754 8.83279 5.63015 14.8745 12.1518 14.8745C12.6508 14.8745 12.8476 14.3815 12.8476 13.951V11.251C12.8476 10.8284 12.5313 10.4763 12.1518 10.4763Z"
                      fill="black"
                    />
                  </Icon>
                  <span>
                    {Places[Index].phone
                      ? Places[Index].phone
                      : "번호 정보 없음"}
                  </span>
                </PhoneWrap>
                <ButtonWrap>
                  <LinkButton onClick={onMoreInfoClick}>더 알아보기</LinkButton>
                </ButtonWrap>
              </PlaceBox>
              <PrevNextButton
                src={nextButton}
                alt="next button"
                onClick={onNextImage}
              ></PrevNextButton>
            </PlaceWrap>
            <Circles>
              {Array.from({ length: placeLength }, (_, i) => (
                <Circle key={i} active={i === Index} />
              ))}
            </Circles>
          </>
        ) : (
          <PlaceNullBox>추천 장소 데이터가 없습니다 :{"("}</PlaceNullBox>
        )}
      </div>

      <AnotherButton to="/voice-recognition">
        다른 룰렛 만들러 가기
      </AnotherButton>
    </PlacePageWrap>
  );
};

export default MapContainer;

const PlacePageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlaceWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;

const PlaceText = styled.div`
  font-weight: bold;
`;

const PlaceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;

  width: 280px;
  height: 180px;
  border-radius: 10px;
  border: 1px solid var(--gray1, #cacdd4);
  padding: 15px;
  font-size: 14px;
`;

const PlaceNullBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #8a898e;
  width: 280px;
  height: 180px;
  border-radius: 10px;
  border: 1px solid var(--gray1, #cacdd4);
  padding: 15px;
  font-size: 14px;
`;

const AdressText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const PhoneWrap = styled.div`
  align-items: center;
  margin-top: 8px;
  display: flex;
`;

const Icon = styled.svg`
  margin-right: 5px;
`;

const PrevNextButton = styled.img`
  width: 28px;
  height: 32px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkButton = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 4px 8px;
  background-color: #00a3ff;
  border-radius: 40px;
  position: absolute;
  bottom: 20px;
`;

const Circles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#00A3FF" : "#D9D9D9")};
  margin: 0 2px;
`;

const AnotherButton = styled(Link)`
  width: 280px;
  height: 25px;
  display: flex;
  justify-content: center;
  color: white;
  border-radius: 10px;
  border: 1px solid var(--strok_1, #cfcfcf);
  background: var(--black, #000);
  padding: 10px 30px;
  align-items: center;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;

  margin-top: 80px;
`;
