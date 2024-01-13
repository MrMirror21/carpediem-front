import { useRef } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

export const Cnavas = () => {
  // divRed : DOM 요소에 대한 참조
  // current 속성을 가진 DOM 요소를 가리키는 가변 객체를 생성한다.
  const divRef = useRef(null);

  // 다운로드 함수
  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      // 렌더링 하고자 하는 요소, 캔버스의 해상도(scale: 2는 기본 해상도의 2배)
      const canvas = await html2canvas(div, { scale: 2 });

      // blob으로 변환
      canvas.toBlob((blob) => {
        if (blob !== null) {
          // 파일 이름
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ backgroundColor: "lime", width: "300px", height: "200px" }}
      >
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <button onClick={handleDownload}>다운로드</button>
    </div>
  );
};
