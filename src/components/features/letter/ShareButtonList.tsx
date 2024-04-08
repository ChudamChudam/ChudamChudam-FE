'use client';

import KakaoShareButton from '@/components/features/letter/KakaoShareButton';
import { Button } from '@/components/ui/button';
import { shareLink } from '@/utils/share';

const ShareButtonList = () => {
  const handleCopyClipboard = () => {
    shareLink({ url: `${location.href}?share=true` });
  };

  const handleDownload = () => {
    // TODO: 다운로드 기능 구현하기
  };

  return (
    <div className="flex flex-col gap-2 pt-5 w-full">
      <Button variant="yellow" onClick={handleDownload} className="cursor-not-allowed">
        저장하기
      </Button>
      <div className="flex gap-2 ">
        <Button onClick={handleCopyClipboard} variant="green">
          링크 공유
        </Button>
        <KakaoShareButton />
      </div>
    </div>
  );
};

export default ShareButtonList;
