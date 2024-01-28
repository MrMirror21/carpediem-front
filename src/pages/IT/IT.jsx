import {
  RouletteWrapper,
  ITContainer,
  PersonImage,
  YellowButton,
  ITTitle,
  ITContent,
  Carpediem,
} from "/src/styles/styles.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export default function IT() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || null;
  console.log("결과 : ", data.result);

  const handleVoice = () => {
    navigate("/voice-recognition");
  };

  return (
    <RouletteWrapper>
      <ITContainer>
        <PersonImage />
        <ITContent>
          <ITTitle>{data.result.title}</ITTitle>          
          {data.result.content}
        </ITContent>
        <YellowButton onClick={handleVoice}>
          <Carpediem />
        </YellowButton>
      </ITContainer>
    </RouletteWrapper>
  );
}
