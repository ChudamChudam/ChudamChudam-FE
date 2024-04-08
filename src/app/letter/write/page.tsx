import { Header } from '@/components/layout/header';
import { StepProgressBar } from '@/components/layout/stepProgressBar';
import { Description } from '@/components/layout/description';
import { Write } from '@/components/features/letter/write/write';

const WritePage = () => {
  return (
    <div className="relative w-full h-dvh">
      <Header prev />
      <StepProgressBar />
      <Description>추억을 담은 편지를 작성해보세요</Description>
      <Write />
    </div>
  );
};

export default WritePage;
