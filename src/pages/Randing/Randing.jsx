import {
  RouletteWrapper,
  ITContainer,
  LogoImage,
  StyledParagraph,
  BlackButton,
  YellowButtonR,
  Carpediem,
  CarpediemText,
} from "@/styles/styles.jsx";
import { dummy } from "@/api/ITDummy";
import { useNavigate } from "react-router-dom";
// import { apiClient } from "@/api/ApiClient";
// import axios from "axios";

export default function Randing() {
  const navigate = useNavigate();

  const dummydata = dummy;

  // 0부터 14까지의 랜덤 숫자 생성
  const indexDate = Math.floor(Math.random() * 15);

  // 현재 날짜를 기준으로 0 인덱스부터 14 인덱스까지의 데이터를 가져옴
  const data = dummydata.data[indexDate];
  console.log("data : ", data);

  // test code

  /* const getTest = () => {
    navigate("/IT", { state: data });
  }; */

  const getITData = async () => {
    try {
      const response = await fetch(`https://dev.umc-carpediem.shop/api/info/today`);
      const body = await response.json();
      console.log("data : ", body);
      navigate("/IT", { state: body });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  /*
  const getITData = async () => {
    try {
      const response = await fetch("https://dev.umc-carpediem.shop/info/today");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  */

  const handleVoice = () => {
    navigate("/voice-recognition");
  };

  return (
    <RouletteWrapper>
      <ITContainer>
        <LogoImage />
        <div className="title">
          <StyledParagraph>
            <CarpediemText />
          </StyledParagraph>
        </div>
        <BlackButton onClick={getITData}>오늘의 알쓸신잡</BlackButton>
        <YellowButtonR onClick={handleVoice}>
          <Carpediem />
        </YellowButtonR>
      </ITContainer>
    </RouletteWrapper>
  );
}
