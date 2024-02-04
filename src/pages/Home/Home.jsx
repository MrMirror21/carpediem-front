import {
  Page,
  HomeImage,
  StyledTitle,
  CarpediemLogo,
} from "/src/styles/styles.jsx";
import "/src/styles//Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function IT() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || null;
  console.log("data : ", data);

  const handlePage = () => {
    navigate("/Randing");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Randing");
    }, 3200);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 해제
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <Page>
      <HomeImage onClick={handlePage} />
      <StyledTitle>
        <CarpediemLogo className="home-logo"/>
      </StyledTitle>
    </Page>
  );
}
