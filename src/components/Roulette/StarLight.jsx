import styled from "styled-components";
import StarLight1 from "/assets/images/Roulette/starlight1.svg";
import StarLight2 from "/assets/images/Roulette/starlight2.svg";
import StarLight3 from "/assets/images/Roulette/starlight3.svg";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  max-width: 390px;
  align-items: center;
  justify-content: center;
`;

const Stars = styled.div`
  display: flex;
  width: 340px;
  height: 720px;
  border: none;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
`;

export default function StarLight() {
  const starUrls = [StarLight1, StarLight2, StarLight3];

  const [starUrlIndex, setStarUrlIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 url의 인덱스로 변경 (순환)
      setStarUrlIndex((prevIndex) => (prevIndex + 1) % starUrls.length);
    }, 1000);

    // 컴포넌트가 언마운트 될 때 interval 정리
    return () => clearInterval(intervalId);
  }, []);
  // 3초 간격으로
  return (
    <Wrapper>
      <Stars url={starUrls[starUrlIndex]} />
    </Wrapper>
  );
}
