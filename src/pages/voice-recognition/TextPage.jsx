import styled from "styled-components";
import { Wrapper } from "/src/styles/styles";
import SliderButton from "/src/components/voice-recognition/SlideButton";
import NotiBalloon from "/assets/images/notificate_balloon.svg";
import Pen from "/assets/images/Pen.svg";
import { useState } from "react";
import Loading from "/src/components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { getKeywords } from "../../api/getKeywords";

const TextPage = () => {
  const navigate = useNavigate();
  const [isVoice, setIsVoice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState("text");
  const handleSubmit = async () => {
    setIsLoading(true);
    console.log(content);
    getKeywords(content, navigate);
  };

  return (
    <>
      <Wrapper>
        {isLoading && <Loading loadingText="룰렛을 생성중입니다..." />}
        <PageBody>
          <SliderButton
            isSelected={isVoice}
            onClick={()=>navigate("/voice-recognition")}
            option1="음성인식"
            option2="텍스트"
          />
          <Instructions className="instruction">
            하단의 텍스트를 입력해 활동을 계획해보세요
          </Instructions>
          <VoiceRecord>
            <RecordButton>
              <MicIcon />
            </RecordButton>
          </VoiceRecord>
          <TextSection>
            <TextContainer
              value={content}
              onChange={(e) => {
                setContent(e.currentTarget.value);
              }}
              placeholder="오늘은 무엇을 하고 싶나요?"
            />
          </TextSection>
          {content === "" ? (
            <DisabledButton>입력하기</DisabledButton>
          ) : (
            <SubmitButton onClick={handleSubmit}>입력하기</SubmitButton>
          )}
        </PageBody>
      </Wrapper>
    </>
  );
};
export default TextPage;

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .instruction {
    text-align: center;
    line-height: 43.409px;
    font-size: 13px;
  }
`;

const Instructions = styled.div`
  width: 274.08px;
  height: 43.309px;
  flex-shrink: 0;
  background-image: url(${NotiBalloon});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 15px;
`;

const VoiceRecord = styled(PageBody)`
  margin-bottom: 75px;
`;
const RecordButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 149.465px;
  border-radius: 100px;
  flex-shrink: 0;
  background: linear-gradient(164deg, #ffec44 12.46%, #ffb800 88.89%);
  border: 4.118px solid #ffee5f;
  box-shadow: 0px 5px 10px 0px rgba(255, 138, 0, 0.25);
`;

const MicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 149px;
  background-image: url(${Pen});
  background-repeat: no-repeat;
  background-position: center;
  fill: white;
`;

const TextSection = styled.div`
  position: relative;
  font-family: "Pretendard";
`;

const TextContainer = styled.textarea`
  font-family: "Pretendard";
  width: 306px;
  height: 250.775px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray1, #cacdd4);
  background: var(--icon-color, #fff);
  resize: none;
  outline: none;
  font-size: 15px;
  padding: 15px;
`;

const SubmitButton = styled.div`
  position: absolute;
  bottom: 53px;
  display: flex;
  width: 336px;
  height: 51px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--strok_1, #cfcfcf);
  background: var(--black, #000);
  color: #ffffff;
  cursor: pointer;
`;

const DisabledButton = styled(SubmitButton)`
  background: var(--gray1, #cacdd4);
  cursor: none;
`;
