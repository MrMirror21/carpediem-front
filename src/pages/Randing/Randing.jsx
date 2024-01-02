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
import "@/styles//Randing.css";
import { useNavigate } from "react-router-dom";

export default function Randing() {
  const navigate = useNavigate();

  const dummydata = dummy;

  // 0부터 14까지의 랜덤 숫자 생성
  const indexDate = Math.floor(Math.random() * 15);

  // 현재 날짜를 기준으로 0 인덱스부터 14 인덱스까지의 데이터를 가져옴
  const data = dummydata.data[indexDate];
  console.log("data : ", data);

  // test code

  const getTest = () => {
    navigate("/IT", { state: data });
  };

  /*
  const getITData = async () => {
    try {
      const response = await apiClient.get("/info/getHome");
      console.log("data : ", response);
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
        <BlackButton onClick={getTest}>오늘의 알쓸신잡</BlackButton>
        <YellowButtonR onClick={handleVoice}>
          <Carpediem />
        </YellowButtonR>
      </ITContainer>
    </RouletteWrapper>
  );
}
