'use client';

import { useSearchParams } from 'next/navigation';
import { LetterFlip } from './flip/letterFlip';
import ShareButtonList from './ShareButtonList';

const LetterContent = () => {
  const params = useSearchParams();
  const isEnterBySharedUrl = params.get('share');
  return (
    <>
      <LetterFlip />
      {isEnterBySharedUrl ? null : <ShareButtonList />}
    </>
  );
};

export default LetterContent;
