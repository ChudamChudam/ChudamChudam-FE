'use client';

import clsx from 'clsx';

import Envelop from '@/assets/images/letter/envelop.svg';
import styles from '@/components/features/letter/flip/letterFlip.module.css';
import { useLetterStore } from '@/store/letterStore';
import Image from 'next/image';

interface LetterFaceProps {
  side: 'front' | 'back';
  imageUrl?: string;
}

export const LetterFace = ({ side, imageUrl }: LetterFaceProps) => {
  const url = useLetterStore((state) => state.url);

  return (
    <div
      className={clsx(
        styles.card__face,
        side === 'front' && styles['card__face--front'],
        side === 'back' && styles['card__face--back'],
      )}
    >
      {side === 'back' ? (
        <Image width={336} height={448} src={url} alt="letter_result_image" />
      ) : (
        <Envelop />
      )}
    </div>
  );
};
