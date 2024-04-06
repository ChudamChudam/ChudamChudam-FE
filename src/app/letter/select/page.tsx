import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Description } from '@/components/layout/description';
import { LetterPreview } from '@/components/features/letter/select/letterPreview';
import { LetterCardCarousel } from '@/components/features/letter/select/letterCardCarousel';

const LetterSelectPage = () => {
  return (
    <div className='flex flex-col items-center h-dvh relative'>
      <Header back />
      <Description>편지지를 선택해주세요.</Description>
      <LetterCardCarousel />
      <LetterPreview />
      <Link href='/letter/write' className='absolute bottom-5 w-full'>
        <Button variant='next'>다음</Button>
      </Link>
    </div>
  );
};

export default LetterSelectPage;
