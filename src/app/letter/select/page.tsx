import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { BackButton } from '@/components/layout/backButton';
import { LetterPreview } from '@/components/features/letter/select/letterPreview';
import { LetterCardCarousel } from '@/components/features/letter/select/letterCardCarousel';

export default function LetterSelectPage() {
  return (
    // TODO: padding
    <div className='flex flex-col items-center w-full h-dvh p-4'>
      <BackButton />
      <Header>편지지를 선택해주세요.</Header>
      <LetterCardCarousel />
      <LetterPreview />
      <Button variant='next'>다음</Button>
    </div>
  );
}
