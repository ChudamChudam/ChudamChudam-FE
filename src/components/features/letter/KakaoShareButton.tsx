'use client';

import { usePathname } from 'next/navigation';

import { CONFIG } from '@/config';
import { Button } from '@/components/ui/button';

const KakaoShareButton = () => {
  const path = usePathname();

  const handleSendMessage = () => {
    const kakao = window.Kakao;
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: ``,
        description: ``,
        imageUrl: 'https://i.imgur.com/CtZUmU5.png',
        link: {
          mobileWebUrl: `${CONFIG.site}`,
          webUrl: `${CONFIG.site}`,
        },
      },
      buttons: [
        {
          title: '답장 하기',
          link: {
            mobileWebUrl: `${CONFIG.site}${path}}`,
            webUrl: `${CONFIG.site}${path}`,
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={handleSendMessage}
      variant='share'
      //   Icon={<Icon icon="kakaotalk" color="gray-1000" />}
    >
      카카오톡 공유
    </Button>
  );
};

export default KakaoShareButton;
