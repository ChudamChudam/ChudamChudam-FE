import LetterContent from '@/components/features/letter/LetterContent';
import { Header } from '@/components/layout/header';

const LetterDetailPage = () => {
  return (
    <div className="flex flex-col items-center h-dvh">
      <Header home />
      <LetterContent />
    </div>
  );
};

export default LetterDetailPage;
