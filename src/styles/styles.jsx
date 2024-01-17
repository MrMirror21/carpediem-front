import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";
import R_Tool from "@/assets/images/Roulette/RouletteTool.svg";
import R_Pin from "@/assets/images/Roulette/RoulettePin.svg";
import Result from "@/assets/images/Roulette/ResultBox.svg";
import Prev from "@/assets/images/Roulette/PrevBox.svg";
import DownLoad from "@/assets/images/Roulette/download.svg";
import Arrow from "@/assets/images/Roulette/arrow.svg";
import Logo from "@/assets/images/IT/logo.svg";
import ITLogo from "@/assets/images/IT/logo2.svg";
import ITPerson from "@/assets/images/IT/Person.svg";
import Groom from "@/assets/images/IT/goorm.svg";
import Carpe from "@/assets/images/IT/carpediem.svg";
import CarpeText from "@/assets/images/IT/carpediemtext.svg";
import HomeLogo from "@/assets/images/Home/logo.svg";

// 슬라이드 애니메이션 키프레임
const slideInUp = (percentage) => keyframes`
  from {
    transform: translateY(${percentage});
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 슬라이드 애니메이션 키프레임
const InUp = (top) => keyframes`
  from {
    top: ${top + top * 0.05}px;
    opacity: 0;
  }
  to {
    top: ${top}px;
    opacity: 1;
  }
`;

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${theme.yellow};
`;
/**  첫 페이지 스타일 **/
export const Page = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #00a3ff;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-width: 330px;
  width: 100%;
`;

export const HomeImage = styled.div`
  margin-top: 104px;
  width: 155px;
  height: 180px;
  display: flex;
  align-items: center;
  background-image: url(${Logo});
  background-repeat: no-repeat;

  animation: ${slideInUp("40%")} 0.8s ease-out;
`;

export const StyledTitle = styled.div`
  margin-top: 20px;
  font-family: "Nanum Pen", cursive;
  font-size: 25px;
  line-height: 0.5;
  color: #333;
  text-align: center;
  animation: ${slideInUp("70%")} 0.8s ease-out;
  pointer-events: none;
`;

/**  랜딩 페이지 스타일 **/
export const LogoImage = styled.div`
  margin-top: 104px;
  width: 190px;
  height: 180px;
  display: flex;
  align-items: center;
  background-image: url(${ITLogo});
  background-repeat: no-repeat;

  animation: ${slideInUp("40%")} 0.8s ease-out;
`;

export const StyledParagraph = styled.div`
  margin-top: 45px;
  font-family: Nanum Pen;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  text-align: center;
  animation: ${slideInUp("70%")} 0.8s ease-out;
  pointer-events: none;
`;

export const BlackButton = styled.button`
  color: white;
  font-family: Pretendard;
  margin-top: 52px;
  width: 309px;
  height: 74px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  animation: ${slideInUp("80%")} 0.8s ease-out;
  cursor: pointer;
`;
export const YellowButtonR = styled.button`
  display: flex;
  color: #00A3FF;
  font-family: Nanum Pen;
  margin-top: 17px;
  width: 309px;
  height: 74px;
  justify-content: center;
  align-items: center;
  background-color: #ffe03d;
  border: 1px solid #dadad7;
  border-radius: 10px;
  animation: ${slideInUp("90%")} 0.8s ease-out;
  cursor: pointer;
`;

/** 알쓸신잡 페이지 **/
export const ITContainer = styled.div`
  position: absolute;
  top: 18px;
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  text-align: center;
`;

export const PersonImage = styled.div`
  margin-top: 72px;
  width: 310px;
  height: 222px;
  display: flex;
  background-image: url(${ITPerson});
  background-repeat: no-repeat;
  animation: ${slideInUp("40%")} 0.8s ease-out;
`;

export const ITTitle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 22px;
  font-size: 20px;
  font-weight: 600;
  animation: ${slideInUp("80%")} 0.8s ease-out;
  pointer-events: none;
`;

export const ITContent = styled.div`
  margin-top: 37px;
  width: 78%;
  height: 18%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 7%;
  text-align: left;
  animation: ${slideInUp("20%")} 0.8s ease-out;
  pointer-events: none;
`;

export const YellowButton = styled(YellowButtonR)`
  display: flex;
  color: #ffe03d;
  font-family: Nanum Pen;
  margin-top: 80px;
  width: 309px;
  height: 74px;
  justify-content: center;
  align-items: center;
  background-color: #ffe03d;
  border: 1px solid #dadad7;
  border-radius: 10px;
  animation: ${slideInUp("70%")} 0.8s ease-out;
  cursor: pointer;
`;

/**  룰렛 페이지 **/
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #fff;
  align-items: center;
`;

export const Carpediem = styled.div`
  width: 130px;
  height: 28px;
  background-image: url(${Carpe});
  background-repeat: no-repeat;
  color: #00a3ff;
`;

export const CarpediemText = styled.div`
  width: 246px;
  height: 80px;
  background-image: url(${CarpeText});
  background-repeat: no-repeat;
  color: #00a3ff;  
`;

export const CarpediemLogo = styled.div`
  margin-top: -50px;
  width: 118px;
  height: 45px;
  background-image: url(${HomeLogo});
  background-repeat: no-repeat;
  transform: scale(1.3);
  animation: ${slideInUp("70%")} 0.8s ease-out;
`;

export const RouletteWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #00a3ff;
  align-items: center;
`;

export const SpinBtn = styled.button`
  margin-top: 38px;
  display: flex;
  width: ${(props) => props.width || "338px"};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  background-color: ${(props) => props.bg || "#000"};
  color: ${(props) => props.color || "#fff"};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 800;
  z-index: 1000;
  cursor: pointer;
`;

export const RouletteTool = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 355px;
  margin-top: 134px;
  background-image: url(${R_Tool});
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  transform: scale(1);
`;

export const RoulettePin = styled.div`
  top: -5px;
  position: absolute;
  background-image: url(${R_Pin});
  width: 48px;
  height: 50px;
  background-repeat: no-repeat;
  z-index: 100;
`;

export const ResultBox = styled.div`
  display: flex;
  margin-top: 60px;
  width: 338px;
  height: 122px;
  background-image: url(${Result});
  background-repeat: no-repeat;
  outline: none;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
  pointer-events: none;
`;

export const PrevBox = styled.div`
  display: flex;
  margin-top: 60px;
  width: 338px;
  height: 122px;
  background-image: url(${Prev});
  background-repeat: no-repeat;
  outline: none;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
  pointer-events: none;
`;

export const DownLoadImage = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${DownLoad});
  background-repeat: no-repeat;
`;
export const ArrowImage = styled.div`
  width: 28px;
  height: 32px;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
`;
/**  서브 페이지1 스타일 **/
// ...

/** 서브 페이지2 스타일 **/
