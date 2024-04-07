import clsx from 'clsx';

import styles from '@/components/features/letter/flip/letterFlip.module.css';

export const LetterFace = ({ side }: { side: 'front' | 'back' }) => {
  // TODO: 편지를 작성한 데이터를 받아오면 다시 수정하기
  return (
    <div
      className={clsx(
        styles.card__face,
        side === 'front' && styles['card__face--front'],
        side === 'back' && styles['card__face--back']
      )}
    >
      {side}
    </div>
  );
};
