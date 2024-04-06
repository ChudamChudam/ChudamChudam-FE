import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { META } from '@/constants/metadata';
import KakaoScript from '@/components/layout/KakaoScript';

export const metadata: Metadata = META;

const LetterDetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <KakaoScript />
    </div>
  );
};

export default LetterDetailLayout;
