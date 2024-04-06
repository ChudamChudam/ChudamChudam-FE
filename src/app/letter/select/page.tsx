import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Description } from '@/components/layout/description';
import { LetterPreview } from '@/components/features/letter/select/letterPreview';
import { LetterCardCarousel } from '@/components/features/letter/select/letterCardCarousel';

const LetterSelectPage = () => {
  return (
    <div>
      <Header back />
      <Description>편지지를 선택해주세요.</Description>
      <LetterCardCarousel />
      <LetterPreview />
      <Button variant='next'>다음</Button>
    </div>
  );
};

export default LetterSelectPage;
