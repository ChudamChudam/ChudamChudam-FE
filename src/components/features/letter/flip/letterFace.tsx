import clsx from 'clsx';

import styles from '@/components/features/letter/flip/letterFlip.module.css';
import Image from 'next/image';
import Envelop from '@/assets/images/letter/envelop.svg';

interface LetterFaceProps {
  side: 'front' | 'back';
  imageUrl?: string;
}

export const LetterFace = ({ side, imageUrl }: LetterFaceProps) => {
  // TODO: 편지를 작성한 데이터를 받아오면 다시 수정하기
  return (
    <div
      className={clsx(
        styles.card__face,
        side === 'front' && styles['card__face--front'],
        side === 'back' && styles['card__face--back'],
      )}
    >
      {side === 'back' ? (
        <Image width={336} height={448} src={imageUrl as string} alt="letter_result_image" />
      ) : (
        <Envelop />
      )}
    </div>
  );
};
