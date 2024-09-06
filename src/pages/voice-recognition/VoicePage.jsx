import styled from 'styled-components'
import 'regenerator-runtime'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Wrapper } from '/src/styles/styles';
import Mic from '/assets/images/mic.svg'
import SmallMic from '/assets/images/mic_s.svg'
import NotiBalloon from '/assets/images/notificate_balloon.svg'
import SliderButton from '/src/components/voice-recognition/SlideButton';
import Loading from '/src/components/Loading/Loading';
import RecordingGIF from '/assets/images/Spinner/recording.gif';
import PulseGIF from '/assets/images/Spinner/pulse.gif';
import Reset from '/assets/images/voice-recognition/reset.svg';
import TextPage from '/src/pages/voice-recognition/TextPage.jsx';
import { getKeywords } from '../../api/getKeywords';

const VoicePage = () => {
  const navigate = useNavigate();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isVoice, setIsVoice] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
    }
  };
  const handleSubmit = async () => {
    toggleListening();
    setIsLoading(true);
    getKeywords(transcript, navigate);
  }
  const handlePageTransition = () => {
    if (listening) {SpeechRecognition.stopListening()}
    setIsVoice(!isVoice)
  }
return (
  <>
    <Wrapper>
      {isLoading && <Loading loadingText="룰렛을 생성중입니다..." />}
      <PageBody>
        <SliderButton
          isSelected={isVoice}
          onClick={handlePageTransition}
          option1="음성인식"
          option2="텍스트"
        />
      {isVoice ?
        <>
          <Instructions className='instruction'>하단의 버튼을 눌러 오늘의 활동을 계획해보세요</Instructions>
          <VoiceRecord>
            <RecordButton onClick={toggleListening}>
              {listening ? <PulseContainer><img src={PulseGIF} className='pulseGIF'></img></PulseContainer> : <MicIcon />}
            </RecordButton>
          </VoiceRecord>
          <TextSection>
            <TextContainer>
              <TextInput className="transcript" value={transcript} onChange={() => {}} />
              {listening ? <SpinnerContainer><img src={RecordingGIF} className='recordingGIF'></img></SpinnerContainer> : <SmallMicIcon />}
            </TextContainer>
          </TextSection>
          <ResetSection onClick={resetTranscript}>
            <span>초기화 하기</span>
            <ResetIcon />
          </ResetSection>
          {transcript === "" ? <DisabledButton>룰렛 만들러 가기</DisabledButton>: <SubmitButton onClick={handleSubmit}>룰렛 만들러 가기</SubmitButton>}
        </>
      : <TextPage />
      }
      </PageBody>
    </Wrapper>
  </>
)
}
export default VoicePage

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
  background: linear-gradient(164deg, #7ce0ff 12.46%, #0047ff 88.89%);
  border: 4.118px solid #72d3ff;
  box-shadow: 0px 5px 10px 0px rgba(36, 0, 255, 0.25);
  cursor: pointer;
`;

const PulseContainer = styled.div`
  width: 72.369px;
  height: 72.369px;
  flex-shrink: 0;
  .pulseGIF {
    width: 72.369px;
    height: 72.369px;
    flex-shrink: 0;
  }
`;

const MicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 149px;
  background-image : url(${Mic});
  background-repeat: no-repeat;
  background-position: center;
  fill: white;
`;

const TextSection = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  padding-left: 15px;
  align-itemes: center;
  width: 323px;
  min-height: 51.126px;
  margin-bottom: 
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--gray1, #CACDD4);
  background: var(--icon-color, #FFF);
  line-height: 51px;
  .transcript:: -webkit-scrollbar {
    display: none;
  }
`;

const TextInput = styled.textarea`
  font-family: "Pretendard";
  width: 290px;
  min-height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--icon-color, #fff);
  border: none;
  resize: none;
  outline: none;
  line-height: 45px;
  overflow-y: auto;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 12px;
  width: 33px;
  height: 33px;
  .recordingGIF {
    width: 33px;
    height: 33px;
  }
`;

const SmallMicIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 20px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background-image: url(${SmallMic})
  background-repeat: no-repeat;
  background-position: center;
`;

const ResetSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 91.5px;
  height: 18px;
  margin-top: 29px;
  flex-shrink: 0;
  color: #8a898e;
  font-size: 15px;
  cursor: pointer;
`;

const ResetIcon = styled.div`
  background-image: url(${Reset});
  background-repeat: no-repeat;
  background-position: center;
  fill: #8a898e;
  width: 18px;
  height: 18px;
`;

const SubmitButton = styled.div`
  display: flex;
  width: 336px;
  height: 51px;
  margin-top: 173.5px;
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
