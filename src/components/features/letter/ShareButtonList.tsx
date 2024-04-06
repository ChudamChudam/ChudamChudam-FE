"use client";

import { shareLink } from "@/utils/share";
import KakaoShareButton from "./KakaoShareButton";

const ShareButtonList = () => {
  const handleCopyClipboard = () => {
    shareLink({ url: location.href });
  };
  return (
    <div className="flex flex-col gap-10">
      <button onClick={handleCopyClipboard}>링크 공유</button>
      <KakaoShareButton />
    </div>
  );
};

export default ShareButtonList;
