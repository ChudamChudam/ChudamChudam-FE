"use client";

/** window.Kakao 타입 에러 해결을 위해서 declare 식별자 활용  */
declare global {
  interface Window {
    Kakao: any;
  }
}

import Script from "next/script";

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SDK_API_KEY);
  };

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  );
}

export default KakaoScript;
