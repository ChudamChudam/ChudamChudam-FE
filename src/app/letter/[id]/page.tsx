import ShareButtonList from '@/components/features/letter/ShareButtonList';
import { LetterFlip } from '@/components/features/letter/flip/letterFlip';
import { Header } from '@/components/layout/header';

const LetterDetailPage = () => {
  return (
    <div className='flex flex-col items-center h-dvh'>
      <Header home />
      <LetterFlip />
      <ShareButtonList />
    </div>
  );
};

export default LetterDetailPage;
