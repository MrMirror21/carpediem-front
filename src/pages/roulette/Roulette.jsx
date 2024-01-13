import { Wheel } from "react-custom-roulette";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StarLight from "@/components/Roulette/StarLight";
import {
  RouletteWrapper,
  SpinBtn,
  RouletteTool,
  RoulettePin,
  ResultBox,
  PrevBox,
} from "@/styles/styles";
import "@/styles//Roulette.css";

function Roulette() {
  const navigate = useNavigate();
  const location = useLocation();

  // 데이터 받아오기
  const data = location.state.data || null;
  console.log("data : ", data.result);

  const Data = data.result.map((item) => {
    const value = item.optionTitle;
    console.log("vaule", value);
    return { option: value };
  });

  console.log("data : ", Data);

  const [mustSpin, setMustSpin] = useState(false); //룰렛이 회전 애니메이션을 시작
  const [prizeNumber, setPrizeNumber] = useState(0); //당첨 인덱스
  const [spinState, setSpinState] = useState(false);
  const [spinText, setSpinText] = useState("룰렛 돌리기");
  const [isFirstSpin, setIsFirstSpin] = useState(false);

  useEffect(() => {
    setMustSpin(false);
    setSpinState(false);
  }, [mustSpin]);

  // 첫 번째 스핀
  const handleFirstSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(Math.floor(Math.random() * Data.length));
      setMustSpin(true);

      // 3초 후
      setTimeout(() => {
        setSpinState(true);
        setSpinText("다시 돌리기");
        setIsFirstSpin(true);
      }, 3000);
    }
  };

  // 룰렛 돌리기 함수
  const handleSpinClick = () => {
    if (!mustSpin) {
      setPrizeNumber(Math.floor(Math.random() * Data.length));
      setMustSpin(true);

      // 3초 후
      setTimeout(() => {
        setSpinState(true);
      }, 3000);
    }
  };

  // 룰렛이 멈췄을 때
  const StopSpinning = () => {
    setMustSpin(false);
  };

  const handlePostPlace = async () => {
    console.log("option : ", Data[prizeNumber].option);
    // 데이터 전송
    navigate("/place", { state: Data[prizeNumber].option });
    /*try {
      const keyword = await getPlaceData({ option: Data[prizeNumber].option });
      console.log("roulette key data: ", keyword);

      // 데이터 전송
      navigate("/place", { state: { keyword: keyword } });
    } catch (error) {
      console.error("장소 불러오기 실패 error: ", error);
    } */
  };

  return (
    <RouletteWrapper>
      <RouletteTool>
        <RoulettePin />
        <Wheel
          spinDuration={0.2}
          startingOptionIndex={prizeNumber}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={Data}
          onStopSpinning={StopSpinning}
          radiusLineColor={["tranparent"]}
          outerBorderColor={["tranparent"]}
          textColors={["#000"]}
          fontSize={[15]}
          backgroundColors={["#00A3FF", "#FFB13D"]}
          pointerProps={{ src: "@/assets/images/Roulette/RoulettePin.svg" }}
        />
      </RouletteTool>
      {!spinState ? (
        <div>
          <PrevBox></PrevBox>
        </div>
      ) : (
        <div>
          <ResultBox>
            <span>{Data[prizeNumber].option}</span>
          </ResultBox>
        </div>
      )}
      {!isFirstSpin ? (
        <>
          <SpinBtn onClick={handleFirstSpinClick}>{spinText}</SpinBtn>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "0 0 45%" }}>
            <SpinBtn onClick={handleSpinClick} width="45%">
              {spinText}
            </SpinBtn>
          </div>
          <div style={{ flex: "0 0 48%" }}>
            <SpinBtn
              onClick={handlePostPlace}
              width="45%"
              color="#000"
              bg="#FFE03D"
            >
              추천장소 바로가기
            </SpinBtn>
          </div>
        </div>
      )}
      <StarLight />
    </RouletteWrapper>
  );
}

export default Roulette;
