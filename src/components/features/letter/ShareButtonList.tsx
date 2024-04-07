'use client';

import KakaoShareButton from '@/components/features/letter/KakaoShareButton';
import { Button } from '@/components/ui/button';
import { shareLink } from '@/utils/share';

const ShareButtonList = () => {
  const handleCopyClipboard = () => {
    shareLink({ url: `${location.href}?share=true` });
  };
  return (
    <div className="flex flex-col gap-2 pt-5 w-full">
      <Button onClick={handleCopyClipboard} variant="yellow">
        링크 공유
      </Button>
      <KakaoShareButton />
    </div>
  );
};

export default ShareButtonList;
