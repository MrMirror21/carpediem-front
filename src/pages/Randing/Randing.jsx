import React from "react";
import {
  RouletteWrapper,
  ITContainer,
  LogoImage,
  StyledParagraph,
  BlackButton,
  YellowButtonR,
  Carpediem,
  CarpediemText,
} from "/src/styles/styles.jsx";
import { dummy } from "/src/api/ITDummy";
import { useNavigate } from "react-router-dom";
import "/src/styles//Randing.css";

export default function Randing() {
  const navigate = useNavigate();
  const dummydata = dummy;
  const indexDate = Math.floor(Math.random() * 15);
  const data = dummydata.data[indexDate];

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

  const handleVoice = () => {
    navigate("/voice-recognition");
  };

  return (
    <RouletteWrapper>
      <ITContainer>
        <LogoImage className="randing-logo"/>
        <div className="title">
          <StyledParagraph>
            <CarpediemText />
          </StyledParagraph>
        </div>
        <BlackButton onClick={getITData}>
          <span className="mobile-text">오늘의 알쓸신잡</span>
        </BlackButton>
        <YellowButtonR onClick={handleVoice}>
          <Carpediem />
        </YellowButtonR>
      </ITContainer>
    </RouletteWrapper>
  );
}
