"use client";

import { CONFIG } from "@/config";
import { usePathname } from "next/navigation";

const KakaoShareButton = () => {
  const path = usePathname();

  const handleSendMessage = () => {
    const kakao = window.Kakao;
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: ``,
        description: ``,
        imageUrl: "https://i.imgur.com/CtZUmU5.png",
        link: {
          mobileWebUrl: `${CONFIG.site}`,
          webUrl: `${CONFIG.site}`,
        },
      },
      buttons: [
        {
          title: "답장 하기",
          link: {
            mobileWebUrl: `${CONFIG.site}${path}}`,
            webUrl: `${CONFIG.site}${path}`,
          },
        },
      ],
    });
  };
  return (
    <button
      onClick={handleSendMessage}
      //   Icon={<Icon icon="kakaotalk" color="gray-1000" />}
      className="rounded-[100%] bg-[#FEE500]"
    >
      카카오톡 공유
    </button>
  );
};

export default KakaoShareButton;
