import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

export default function GetImage() {
  const divRef = useRef(null);

  useEffect(() => {
    handleAutoDownload();
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  const handleAutoDownload = async () => {
    try {
      if (!divRef.current) return;

      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "RouletteResult.png");
        }
      });
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div
      ref={divRef}
      style={{ backgroundColor: "lime", width: "300px", height: "200px" }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
