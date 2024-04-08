import Link from 'next/link';

import { LetterCardCarousel } from '@/components/features/letter/select/letterCardCarousel';
import { LetterPreview } from '@/components/features/letter/select/letterPreview';
import { Description } from '@/components/layout/description';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { StepProgressBar } from '@/components/layout/stepProgressBar';

const LetterSelectPage = () => {
  return (
    <div className="w-full h-dvh relative flex flex-col">
      <Header prev />
      <StepProgressBar />
      <Description>
        테마를 선택하거나 이미지를 불러와
        <br /> 편지지를 선택해주세요.
      </Description>
      <LetterCardCarousel />
      <LetterPreview />
      <Link href="/letter/write" className="absolute bottom-5 w-full">
        <Button variant="green">다음</Button>
      </Link>
    </div>
  );
};

export default LetterSelectPage;
