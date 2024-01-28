import { theme } from "/src/styles/theme";
import { Sample } from "/src/styles/styles";

export default function TestPage() {
  return (
    <div>
      <h1>테스트용 페이지입니다.</h1>
      1. 파일 경로는 <b>절대경로</b>입니다. {"@/"}로 시작해주세요. (=== ./src){" "}
      <br />
      2. GlobalStyle.jsx에 <b>전역 스타일</b> 정의해주세요. <br />
      3. 색상 사용법 : `them 파일 import 후 <b>theme.color이름</b>`
      <div style={{ color: theme.red }}> ex{")"} 빨간색</div>
      <br />
      4. 스타일드 컴포넌트는 모두 통일 <Sample>경로 : `@/styles/styles`</Sample>
      <br />
      <h3>다운로드 패키지</h3>
      공용 : react-router-dom, axios 기타 : react-custom-roulette,
      react-speech-recognition
      <br />
      <b>이외 필요한 라이브러리들 설치해주세요.</b>
      <br />
      <br />
      라우터 세팅 완료, baseURL 세팅 완료, eslint 세팅 완료
      <br />
      <h3>공용 스타일</h3>
      5. 기본 폰트 Noto Sans KR, 폰트 사이즈 16px
      <br />
      input 스타일(투명)
      <input type="text" placeholder="placeholder" />
      <br />
      <button>버튼 스타일(투명)</button>
      <br />
      <b>
        이외 필요한 디자인들 커스텀 해주세요.
        <br />
        pages, reducer, components, images 폴더의 test 파일들은 무시해주세요.
        (폴더에 파일 추가를 안 하면 푸시가 안 되는 이슈 해결용)
      </b>
    </div>
  );
}
